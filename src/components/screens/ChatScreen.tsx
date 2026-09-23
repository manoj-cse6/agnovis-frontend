import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { TopAppBar } from '../TopAppBar';
import { BottomNavBar } from '../BottomNavBar';
import { apiSendChat } from '../../services/apiService';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export const ChatScreen: React.FC = () => {
  const { goBack, selectedLanguage, showToast } = useApp();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Get voice for current language
  const getVoiceForLanguage = useCallback((lang: string): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    const langMap: Record<string, { primary: string; fallbacks: string[] }> = {
      en: { primary: 'en-IN', fallbacks: ['en-US', 'en-GB', 'en'] },
      te: { primary: 'te-IN', fallbacks: ['te'] },
      hi: { primary: 'hi-IN', fallbacks: ['hi'] },
      mr: { primary: 'mr-IN', fallbacks: ['mr'] },
    };

    const config = langMap[lang] || langMap.en;

    // Try exact match first
    const exactMatch = voices.find(v => v.lang === config.primary);
    if (exactMatch) return exactMatch;

    // Try fallback locales
    for (const fallback of config.fallbacks) {
      const fallbackMatch = voices.find(v => v.lang === fallback);
      if (fallbackMatch) return fallbackMatch;
    }

    // Try base language match
    const baseLang = config.primary.split('-')[0];
    const baseMatch = voices.find(v => v.lang.startsWith(baseLang));
    if (baseMatch) return baseMatch;

    return null;
  }, [voices]);

  const getLangLocale = (lang: string): string => {
    const localeMap: Record<string, string> = {
      en: 'en-IN',
      te: 'te-IN',
      hi: 'hi-IN',
      mr: 'mr-IN',
    };
    return localeMap[lang] || 'en-IN';
  };
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text:
        selectedLanguage === 'te'
          ? 'నమస్కారం! నేను మీ అగ్రివిజన్ ఏఐ వ్యవసాయ సలహాదారుని. పంట ఆరోగ్యం, తెగుళ్లు లేదా ఎరువుల గురించి నన్ను అడగండి.'
          : selectedLanguage === 'hi'
          ? 'नमस्ते! मैं आपका एग्रीविज़न एआई सलाहकार हूँ। फसल सुरक्षा, रोगों या जैविक उपचार के बारे में कोई भी सवाल पूछें।'
          : selectedLanguage === 'mr'
          ? 'नमस्कार! मी आपला अ‍ॅग्रीव्हिजन एआय कृषी सल्लागार आहे. पिकांची काळजी आणि खत व्यवस्थापनाबद्दल काहीही विचारा.'
          : 'Hello! I am your AgriVision AI Agronomist. Ask me any questions regarding crop health, pest treatments, soil preparation, or disease management.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize browser SpeechRecognition if supported
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang =
        selectedLanguage === 'te'
          ? 'te-IN'
          : selectedLanguage === 'hi'
          ? 'hi-IN'
          : selectedLanguage === 'mr'
          ? 'mr-IN'
          : 'en-IN';

      recog.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          setInput(transcript);
          handleSend(transcript);
        }
        setIsListening(false);
      };

      recog.onerror = (err: any) => {
        console.warn('Speech recognition error:', err);
        setIsListening(false);
        showToast('Voice input unavailable or permission denied.');
      };

      recog.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recog;
    }
  }, [selectedLanguage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleVoice = () => {
    if (!recognitionRef.current) {
      showToast('Speech recognition is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        showToast('Listening... Speak your question.');
      } catch (err) {
        console.warn('Recognition start error:', err);
      }
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const langLocale = getLangLocale(selectedLanguage);
      utterance.lang = langLocale;
      
      // Select matching voice
      const matchingVoice = getVoiceForLanguage(selectedLanguage);
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }
      
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Text-to-speech is not supported in this browser.');
    }
  };

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || isSending) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsSending(true);

    try {
      const res = await apiSendChat(textToSend, { language: selectedLanguage });
      const reply = res.reply || res.response || 'Consult local extension officers for field-specific advice.';
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        text: reply
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      let errorText: string;
      if (err?.status === 503) {
        errorText =
          'The AI agronomist service is currently unavailable because the server API key is not configured. Please contact the administrator to configure the Gemini API key on the backend.';
      } else {
        errorText =
          'I could not reach the Gemini knowledge base right now. Please ensure your backend is connected and try again.';
      }
      const fallbackMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        text: errorText
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col pt-14 md:pt-16 pb-20">
      <TopAppBar title="AI Agronomist Chat" showBack onBack={goBack} showProfileAvatar />

      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-4 flex-1 flex flex-col justify-between">
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto space-y-3 pb-4">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            return (
              <div key={m.id} className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#002d1c] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">psychology</span>
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-[#002d1c] text-white rounded-tr-xs'
                      : 'bg-white text-[#1b1c1c] rounded-tl-xs border border-[#c1c8c2]/40 shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  {!isUser && (
                    <button
                      type="button"
                      onClick={() => handleSpeak(m.text)}
                      className="mt-2 text-[#002d1c] hover:opacity-75 inline-flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">volume_up</span>
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {isSending && (
            <div className="flex items-center gap-2 text-xs text-[#5f5e59] italic pt-1">
              <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#002d1c] animate-bounce [animation-delay:0.4s]"></span>
              <span>Consulting Gemini agricultural model...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar with Mic */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 pt-2 border-t border-[#f0eded]"
        >
          <button
            type="button"
            onClick={toggleVoice}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white border border-[#c1c8c2] text-[#002d1c] hover:bg-[#f6f3f2]'
            }`}
            title="Speak Question"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isListening ? 'mic_off' : 'mic'}
            </span>
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about fertilizer, crop diseases, organic sprays..."
            disabled={isSending}
            className="flex-1 h-11 px-4 text-xs sm:text-sm bg-white border border-[#c1c8c2] rounded-xl outline-none focus:border-[#002d1c]"
          />

          <button
            type="submit"
            disabled={!input.trim() || isSending}
            className="h-11 px-5 bg-[#002d1c] text-white hover:bg-[#1a4331] rounded-xl text-xs font-bold transition-all disabled:opacity-40 cursor-pointer"
          >
            Send
          </button>
        </form>
      </main>

      <BottomNavBar />
    </div>
  );
};
