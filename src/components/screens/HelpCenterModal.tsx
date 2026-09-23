import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const HelpCenterModal: React.FC = () => {
  const { isHelpCenterModalOpen, closeHelpCenterModal, t, showToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isHelpCenterModalOpen) return null;

  const supportEmail = 'agnovissupport@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(supportEmail);
    }
    setCopied(true);
    showToast(t('helpCenterEmailCopied'));
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={closeHelpCenterModal}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-[#c1c8c2]/50 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f0eded] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] text-[#002d1c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px] filled">
                help
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#002d1c]">
              {t('helpCenterDialogTitle')}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeHelpCenterModal}
            aria-label="Close"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#717973] hover:bg-[#f0eded] hover:text-[#1b1c1c] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#1b1c1c] leading-snug">
              {t('helpCenterDialogHeading')}
            </h4>
            <p className="text-xs sm:text-sm text-[#414944] mt-2 leading-relaxed">
              {t('helpCenterDialogContactText')}
            </p>
          </div>

          {/* Prominent Clickable Email Card */}
          <a
            href={`mailto:${supportEmail}?subject=AgnoVis%20AI%20Support%20Request`}
            className="group block p-4 rounded-xl border-2 border-[#002d1c]/20 bg-[#f6fbf8] hover:border-[#002d1c] hover:bg-[#e8f5e9]/50 transition-all cursor-pointer shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#002d1c] text-[#c0edd3] flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#5f5e59] uppercase tracking-wider block">
                    Support Email
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#002d1c] group-hover:underline underline-offset-2 break-all">
                    {supportEmail}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#002d1c] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                open_in_new
              </span>
            </div>
          </a>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <a
              href={`mailto:${supportEmail}?subject=AgnoVis%20AI%20Support%20Request`}
              className="h-11 rounded-xl bg-[#002d1c] text-white hover:bg-[#1a4331] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
              <span>{t('helpCenterSendEmailBtn')}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="h-11 rounded-xl border border-[#c1c8c2] bg-white hover:bg-[#f6f3f2] text-[#1b1c1c] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied!' : t('helpCenterCopyEmailBtn')}</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-3 border-t border-[#f0eded] flex justify-end">
          <button
            type="button"
            onClick={closeHelpCenterModal}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#5f5e59] hover:bg-[#f0eded] hover:text-[#1b1c1c] transition-colors cursor-pointer"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
