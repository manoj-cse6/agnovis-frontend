import React, { useEffect, useRef, useState } from 'react';
import farmlandHeroImage from '../assets/farmland_hero.jpg';

interface InteractiveFarmlandBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const InteractiveFarmlandBackground: React.FC<InteractiveFarmlandBackgroundProps> = ({
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // Decoupled raw pointer tracking
  // Event listeners only record raw mouse coordinates and state;
  // all velocity calculations, smoothing, and physics take place synchronized with the render loop.
  const pointerState = useRef({
    rawX: 0,
    rawY: 0,
    prevX: 0,
    prevY: 0,
    isInside: false,
    hasMoved: false,
    justEntered: true,
    filteredVx: 0,
    filteredVy: 0
  });

  // Wind Physics & Cursor Influence State
  // Cursor acts strictly as a gentle, heavily-damped modifier to the dominant automatic wind
  const windState = useRef({
    // Base automatic wind parameters (continuous, natural rolling breeze)
    baseAngle: 0.04,        // slight downward angle, predominantly blowing left-to-right (+X)
    baseStrength: 0.72,     // steady, relaxing ambient wind strength

    // Current interpolated wind state
    currentAngle: 0.04,
    targetAngle: 0.04,
    currentStrength: 0.72,
    targetStrength: 0.72,

    // Cursor influence blend factor (0.0 = 100% automatic wind, max 0.40 = subtle cursor modifier)
    cursorInfluence: 0.0,

    // Continuous integrated wave phase and noise offset
    windPhase: 0.0,
    windOffsetX: 0.0,
    windOffsetY: 0.0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Initialize WebGL context
    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext('webgl', { alpha: false, antialias: false, depth: false }) ||
        (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);
    } catch {
      gl = null;
    }

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Vertex shader source
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = (a_position + 1.0) * 0.5;
        // Flip Y so texture coordinates match image orientation
        v_texCoord.y = 1.0 - v_texCoord.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader source: Continuous Natural Wheat / Crop Wind Waves
    // Preserves the existing organic crop waving animation.
    // Cursor modulates wind direction and speed smoothly without any local distortion.
    const fsSource = `
      precision highp float;

      uniform sampler2D u_texture;
      uniform vec2 u_resolution;
      uniform vec2 u_imageResolution;
      uniform vec2 u_windDir;
      uniform float u_windStrength;
      uniform float u_windPhase;
      uniform vec2 u_windOffset;

      varying vec2 v_texCoord;

      // Fast, smooth 2D gradient noise for natural organic wind gusts
      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      float noise2D(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        // Quintic smooth interpolation curve
        vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

        float n00 = dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));
        float n10 = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
        float n01 = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
        float n11 = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));

        return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
      }

      void main() {
        // 1. Cover aspect-ratio matching
        vec2 s = u_resolution;
        vec2 i = u_imageResolution;
        float canvasRatio = s.x / s.y;
        float imageRatio = i.x / i.y;
        vec2 uv = v_texCoord;

        if (canvasRatio > imageRatio) {
          float scale = imageRatio / canvasRatio;
          uv.y = (uv.y - 0.5) * scale + 0.5;
        } else {
          float scale = canvasRatio / imageRatio;
          uv.x = (uv.x - 0.5) * scale + 0.5;
        }

        // 2. Strict Sky, Trees, and Horizon Preservation
        // In the farmland image, the horizon treeline sits at uv.y ~ 0.42.
        // Above 0.42, cropMask is strictly 0.0 (sky, clouds, trees remain 100% still and crisp).
        float cropMask = smoothstep(0.42, 0.485, uv.y);

        vec2 displacement = vec2(0.0);
        float waveSheen = 0.0;

        if (cropMask > 0.001) {
          // 3. Perspective Depth Scaling:
          // Foreground crops at the bottom have the strongest sway.
          // Middle crops have moderate sway.
          // Distant crops near horizon move very slightly.
          float depthFactor = clamp((uv.y - 0.44) / 0.56, 0.0, 1.0);
          float depthScale = mix(0.12, 1.0, pow(depthFactor, 1.45));

          // Unit wind direction and perpendicular vector
          vec2 windDir = normalize(u_windDir);
          vec2 perpDir = vec2(-windDir.y, windDir.x);

          // Metric coordinates for aspect-independent wave propagation
          vec2 pos = vec2(uv.x * imageRatio, uv.y);

          // Coordinates along and across wind direction
          float s_coord = dot(pos, windDir);
          float q_coord = dot(pos, perpDir);

          // 4. Broad, irregular rolling wind waves
          // Primary rolling wave with curved organic wave fronts
          float frontWarp = noise2D(pos * 2.8 + u_windOffset * 0.4) * 1.6;
          float wave1 = sin(s_coord * 7.5 - u_windPhase * 2.6 + frontWarp);

          // Secondary harmonic wave rolling at a slightly offset frequency and angle
          float wave2 = sin(s_coord * 12.0 - u_windPhase * 3.4 + q_coord * 1.2 + 1.2) * 0.42;

          // Traveling wind gust patches (multi-octave traveling noise)
          vec2 gustCoord = pos * 3.8 - u_windOffset * 1.4;
          float gustNoise1 = noise2D(gustCoord);
          float gustNoise2 = noise2D(gustCoord * 2.2 + vec2(2.1, 4.3)) * 0.5;
          float gustIntensity = (gustNoise1 + gustNoise2);

          // High-frequency blade rustle anchored to ground position (jitter-free)
          float stalkFlutter = sin(pos.x * 70.0 + pos.y * 35.0 - u_windPhase * 5.5) * 0.15;

          // Combined wave motion
          float totalMotion = (wave1 * 0.65 + wave2 * 0.35 + gustIntensity * 0.55 + stalkFlutter);

          // 5. Stalk bending physics:
          // Stalks bend primarily along the wind direction.
          // As stalks bend forward, they also dip slightly downwards in visual perspective.
          vec2 bendDirection = vec2(windDir.x, windDir.y * 0.4 + 0.15 * abs(windDir.x));

          // Calculate displacement magnitude (gentle, natural, photographic scale)
          float baseAmplitude = 0.0095 * u_windStrength;
          displacement = bendDirection * (totalMotion * baseAmplitude) * cropMask * depthScale;

          // 6. Natural sunlight wave sheen (photographic lighting characteristic of waving wheat)
          waveSheen = totalMotion * 0.055 * cropMask * depthScale * min(u_windStrength, 1.5);
        }

        // Sample texture with wave displacement
        vec2 sampleUV = uv - displacement;
        sampleUV = clamp(sampleUV, vec2(0.0005), vec2(0.9995));

        vec4 texColor = texture2D(u_texture, sampleUV);

        // Apply subtle warm sunlight sheen to wave crests (strictly on crops below horizon)
        if (cropMask > 0.001) {
          texColor.rgb += vec3(0.038, 0.032, 0.015) * waveSheen;
        }

        gl_FragColor = texColor;
      }
    `;

    // Compile shader helper
    const createShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglSupported(false);
      return;
    }
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }
    gl.useProgram(program);

    // Full-screen quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uImgResLoc = gl.getUniformLocation(program, 'u_imageResolution');
    const uWindDirLoc = gl.getUniformLocation(program, 'u_windDir');
    const uWindStrengthLoc = gl.getUniformLocation(program, 'u_windStrength');
    const uWindPhaseLoc = gl.getUniformLocation(program, 'u_windPhase');
    const uWindOffsetLoc = gl.getUniformLocation(program, 'u_windOffset');

    // Create & initialize texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Initial placeholder pixel
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([34, 110, 45, 255])
    );

    let imageWidth = 1376;
    let imageHeight = 768;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    const onImageLoaded = () => {
      if (!gl) return;
      imageWidth = img.naturalWidth || 1376;
      imageHeight = img.naturalHeight || 768;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    };

    img.onload = onImageLoaded;
    img.src = farmlandHeroImage;
    if (img.complete && img.naturalWidth > 0) {
      onImageLoaded();
    }

    // Resize handling
    const handleResize = () => {
      if (!container || !canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    handleResize();

    // Lightweight pointer event handlers
    // NEVER compute heavy velocities or mutate wind physics inside raw event callbacks.
    const onMouseMove = (e: MouseEvent) => {
      const p = pointerState.current;
      p.rawX = e.clientX;
      p.rawY = e.clientY;
      p.isInside = true;
      p.hasMoved = true;
    };

    const onMouseEnter = (e: MouseEvent) => {
      const p = pointerState.current;
      p.rawX = e.clientX;
      p.rawY = e.clientY;
      p.isInside = true;
      p.justEntered = true;
      p.hasMoved = true;
    };

    const onMouseLeave = () => {
      const p = pointerState.current;
      p.isInside = false;
      p.hasMoved = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const p = pointerState.current;
        p.rawX = e.touches[0].clientX;
        p.rawY = e.touches[0].clientY;
        p.isInside = true;
        p.hasMoved = true;
      }
    };

    const onTouchEnd = () => {
      const p = pointerState.current;
      p.isInside = false;
      p.hasMoved = false;
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseenter', onMouseEnter, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // Animation & Physics Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      if (!gl) return;

      // Stable frame delta time (clamped between 1ms and 50ms)
      const dt = Math.min(Math.max((time - lastTime) * 0.001, 0.001), 0.05);
      lastTime = time;

      const p = pointerState.current;
      const w = windState.current;
      const rect = container.getBoundingClientRect();
      const rectW = rect.width || 1;
      const rectH = rect.height || 1;

      // 1. Synchronized Pointer Velocity Calculation & Heavy Low-Pass Filter
      if (p.justEntered) {
        // Prevent sudden jumps when entering canvas from any edge
        p.prevX = p.rawX;
        p.prevY = p.rawY;
        p.filteredVx = 0;
        p.filteredVy = 0;
        p.justEntered = false;
      } else if (p.isInside && p.hasMoved) {
        // Normalized coordinate delta
        let dx = (p.rawX - p.prevX) / rectW;
        let dy = (p.rawY - p.prevY) / rectH;
        p.prevX = p.rawX;
        p.prevY = p.rawY;
        p.hasMoved = false;

        // Deadzone: Ignore microscopic jitter, tremors, and optical mouse noise
        const moveDist = Math.hypot(dx, dy);
        if (moveDist < 0.0018) {
          dx = 0;
          dy = 0;
        }

        const instantVx = dx / dt;
        const instantVy = dy / dt;

        // Heavy low-pass filter for rock-solid velocity stability
        const filterSpeed = Math.min(dt * 3.5, 0.22);
        p.filteredVx += (instantVx - p.filteredVx) * filterSpeed;
        p.filteredVy += (instantVy - p.filteredVy) * filterSpeed;
      } else {
        // When cursor is stationary or leaves: gently decay velocity toward 0
        const decay = Math.max(0, 1.0 - dt * 3.5);
        p.filteredVx *= decay;
        p.filteredVy *= decay;
      }

      const smoothedSpeed = Math.hypot(p.filteredVx, p.filteredVy);

      // 2. Cursor Influence Target: The cursor acts strictly as a subtle modifier
      if (p.isInside && smoothedSpeed > 0.06) {
        // Calculate intentional cursor movement angle
        // Vertical component is damped (0.35) so waves flow predominantly across the field horizontally
        const cursorAngle = Math.atan2(p.filteredVy * 0.35, p.filteredVx);

        // Blend target angle toward cursor angle
        w.targetAngle = cursorAngle;

        // Capped cursor influence (max 0.40) - automatic wind remains dominant
        const targetInfl = Math.min(0.12 + smoothedSpeed * 0.16, 0.40);
        w.cursorInfluence += (targetInfl - w.cursorInfluence) * Math.min(dt * 2.2, 0.15);

        // Gentle, subtle wind speed boost (never violent or jittery)
        const speedBonus = Math.min(smoothedSpeed * 0.12, 0.28) * w.cursorInfluence;
        w.targetStrength = w.baseStrength + speedBonus;
      } else {
        // When cursor stops moving or leaves:
        // Smoothly and gradually return to the dominant automatic wind
        w.targetAngle = w.baseAngle;
        w.targetStrength = w.baseStrength;

        // Gradual, organic decay of cursor influence over ~1.8 to 2.5 seconds
        w.cursorInfluence += (0.0 - w.cursorInfluence) * Math.min(dt * 1.6, 0.1);
      }

      // 3. Jitter-Free Shortest-Path Angular Interpolation
      // Enforces a strict maximum angular turn rate (1.2 rad/sec) so wind never flips or snaps suddenly
      let angleDiff = w.targetAngle - w.currentAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      const maxAngularStep = 1.2 * dt;
      const desiredStep = angleDiff * Math.min(dt * 2.2, 0.15);
      const clampedStep = Math.max(-maxAngularStep, Math.min(maxAngularStep, desiredStep));
      w.currentAngle += clampedStep;

      // Current unit wind direction vector (guaranteed exact unit length: no singularities, no sign flips)
      const curDirX = Math.cos(w.currentAngle);
      const curDirY = Math.sin(w.currentAngle);

      // 4. Smooth Wind Strength Interpolation
      const strengthStep = (w.targetStrength - w.currentStrength) * Math.min(dt * 2.2, 0.12);
      w.currentStrength += strengthStep;

      // 5. Continuous Wave Phase and Offset Propagation
      const waveSpeedFactor = w.currentStrength * 1.15;
      w.windPhase += dt * waveSpeedFactor;
      w.windOffsetX += curDirX * dt * waveSpeedFactor * 0.75;
      w.windOffsetY += curDirY * dt * waveSpeedFactor * 0.75;

      // 6. Upload uniforms & Render
      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform2f(uImgResLoc, imageWidth, imageHeight);
      gl.uniform2f(uWindDirLoc, curDirX, curDirY);
      gl.uniform1f(uWindStrengthLoc, w.currentStrength);
      gl.uniform1f(uWindPhaseLoc, w.windPhase);
      gl.uniform2f(uWindOffsetLoc, w.windOffsetX, w.windOffsetY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
        gl.deleteBuffer(positionBuffer);
        gl.deleteTexture(texture);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-screen overflow-hidden select-none ${className}`}
    >
      {/* Interactive WebGL Waving Crops Shader Canvas */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block pointer-events-none"
        />
      ) : (
        /* Graceful Fallback if WebGL unavailable */
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={farmlandHeroImage}
            alt="AgnoVis AI Farmland"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Atmospheric Vignette & Contrast Shading for Crisp Readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

      {/* Foreground Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
