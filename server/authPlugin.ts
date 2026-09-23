import type { Plugin } from 'vite';
import {
  loginUserBackend,
  registerUserBackend,
  getSessionUser,
  invalidateSession,
  verifyUserPasswordBackend,
  updateUserProfileBackend,
  updateUserMobileBackend,
  updateUserEmailBackend,
  createOtpBackend,
  verifyOtpBackend
} from './authBackend';

function parseJsonBody(req: any): Promise<any> {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk: any) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

function sendJsonResponse(res: any, statusCode: number, data: any) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

export function authPlugin(): Plugin {
  return {
    name: 'AgnoVis-auth-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        const method = req.method ? req.method.toUpperCase() : 'GET';

        // 1. Login endpoint
        if ((url === '/api/auth/login' || url === '/auth/login') && method === 'POST') {
          try {
            const body = await parseJsonBody(req);
            const { identifier, credential, password } = body;
            const cred = credential !== undefined ? credential : password;
            const result = loginUserBackend(identifier || '', cred);

            if (!result.success) {
              const status = result.error === 'ACCOUNT_NOT_FOUND' ? 404 : 401;
              return sendJsonResponse(res, status, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Internal server error'
            });
          }
        }

        // 2. Register endpoint
        if ((url === '/api/auth/register' || url === '/auth/register') && method === 'POST') {
          try {
            const body = await parseJsonBody(req);
            const { name, email, mobile, phone, password, language, preferredLanguage } = body;
            const result = registerUserBackend({
              name: name || '',
              email: email || '',
              mobile: mobile || phone || '',
              password: password || '',
              language: language || preferredLanguage || 'en'
            });

            if (!result.success) {
              const status = result.error === 'USER_ALREADY_EXISTS' ? 409 : 400;
              return sendJsonResponse(res, status, result);
            }
            return sendJsonResponse(res, 201, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Internal server error'
            });
          }
        }

        // 3. Session verification endpoint
        if ((url === '/api/auth/session' || url === '/auth/session' || url === '/api/auth/me') && method === 'GET') {
          const authHeader = req.headers['authorization'] || '';
          const token = authHeader.replace(/^Bearer\s+/i, '').trim();
          const user = getSessionUser(token);
          if (!user) {
            return sendJsonResponse(res, 401, { success: false, error: 'UNAUTHORIZED' });
          }
          return sendJsonResponse(res, 200, { success: true, user });
        }

        // 4. Logout endpoint
        if ((url === '/api/auth/logout' || url === '/auth/logout') && method === 'POST') {
          const authHeader = req.headers['authorization'] || '';
          const token = authHeader.replace(/^Bearer\s+/i, '').trim();
          invalidateSession(token);
          return sendJsonResponse(res, 200, { success: true, message: 'Logged out' });
        }

        // Helper to resolve caller userId from session token or body
        const resolveUserId = (body: any): string | null => {
          const authHeader = req.headers['authorization'] || '';
          const token = authHeader.replace(/^Bearer\s+/i, '').trim();
          if (token) {
            const sessionUser = getSessionUser(token);
            if (sessionUser) return sessionUser.userId;
          }
          return body?.userId || null;
        };

        // 5. Verify Password endpoint
        if ((url === '/api/user/verify-password' || url === '/user/verify-password') && method === 'POST') {
          try {
            const body = await parseJsonBody(req);
            const userId = resolveUserId(body);
            if (!userId) {
              return sendJsonResponse(res, 401, {
                success: false,
                error: 'UNAUTHORIZED',
                message: 'Unauthorized request.'
              });
            }

            const result = verifyUserPasswordBackend(userId, body.password);
            if (!result.success) {
              return sendJsonResponse(res, 401, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        // 6. Update Profile endpoint (Full Name, avatar)
        if ((url === '/api/user/profile' || url === '/user/profile') && (method === 'PATCH' || method === 'POST')) {
          try {
            const body = await parseJsonBody(req);
            const userId = resolveUserId(body);
            if (!userId) {
              return sendJsonResponse(res, 401, {
                success: false,
                error: 'UNAUTHORIZED',
                message: 'Unauthorized request.'
              });
            }

            const result = updateUserProfileBackend(userId, {
              name: body.name,
              avatarUrl: body.avatarUrl
            });
            if (!result.success) {
              return sendJsonResponse(res, 400, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        // 7. Update Mobile Number endpoint
        if ((url === '/api/user/mobile' || url === '/user/mobile') && (method === 'PATCH' || method === 'POST')) {
          try {
            const body = await parseJsonBody(req);
            const userId = resolveUserId(body);
            if (!userId) {
              return sendJsonResponse(res, 401, {
                success: false,
                error: 'UNAUTHORIZED',
                message: 'Unauthorized request.'
              });
            }

            const result = updateUserMobileBackend(
              userId,
              body.mobile || body.phone,
              body.verificationToken,
              body.password
            );
            if (!result.success) {
              const status = result.error === 'MOBILE_ALREADY_EXISTS' ? 409 : result.error === 'UNAUTHORIZED' ? 403 : 400;
              return sendJsonResponse(res, status, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        // 8. Update Email Address endpoint
        if ((url === '/api/user/email' || url === '/user/email') && (method === 'PATCH' || method === 'POST')) {
          try {
            const body = await parseJsonBody(req);
            const userId = resolveUserId(body);
            if (!userId) {
              return sendJsonResponse(res, 401, {
                success: false,
                error: 'UNAUTHORIZED',
                message: 'Unauthorized request.'
              });
            }

            const result = updateUserEmailBackend(
              userId,
              body.email,
              body.verificationToken,
              body.password
            );
            if (!result.success) {
              const status = result.error === 'EMAIL_ALREADY_EXISTS' ? 409 : result.error === 'UNAUTHORIZED' ? 403 : 400;
              return sendJsonResponse(res, status, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        // 9. Send OTP endpoint
        if ((url === '/api/user/send-otp' || url === '/user/send-otp') && method === 'POST') {
          try {
            const body = await parseJsonBody(req);
            const { target, type } = body;
            if (!target) {
              return sendJsonResponse(res, 400, { success: false, message: 'Target required' });
            }
            const result = createOtpBackend(target, type || 'mobile');
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        // 10. Verify OTP endpoint
        if ((url === '/api/user/verify-otp' || url === '/user/verify-otp') && method === 'POST') {
          try {
            const body = await parseJsonBody(req);
            const { target, code } = body;
            const result = verifyOtpBackend(target, code);
            if (!result.success) {
              return sendJsonResponse(res, 400, result);
            }
            return sendJsonResponse(res, 200, result);
          } catch (err: any) {
            return sendJsonResponse(res, 500, {
              success: false,
              error: 'INTERNAL_ERROR',
              message: err.message || 'Server error'
            });
          }
        }

        next();
      });
    }
  };
}
