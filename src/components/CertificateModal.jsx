import React, { useEffect } from 'react';

export default function CertificateModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="certificateModal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl max-w-2xl w-full p-4 sm:p-6 space-y-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-machine-gray dark:border-[#2A3441] pb-3">
          <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
            <span className="material-symbols-outlined text-lg">workspace_premium</span>
            <h5 className="font-headline-md text-sm sm:text-base font-bold">
              Equipment Manufacturer Letter of Appreciation
            </h5>
          </div>
          <button
            onClick={onClose}
            aria-label="Close certificate preview"
            className="p-1 rounded hover:bg-surface-container dark:hover:bg-[#1E293B] text-on-surface-variant dark:text-[#9CA3AF]"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low border border-machine-gray dark:border-[#2A3441]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTz_SBXPESxFR4yA7OwYOyk717UPMig2dO4BWuj1EZ0XVw104vkU8lGUj8Hg5lipcLrJRc1JRV4WvImEAH5nF1X6mWiASNfGNzi38-wt6OqiFlxHH2q7-7WN95qBwVLbyDTumdpdwxxMty9RB1djkxB-jw8wLsPd-NcFh64VoaiLpoBXabUwC18UaFCYCI6BOsmCHma3EjbZGX7l2b3W_lALEIs8fIqxSfP3F17yh5fDo4iisDDnFl"
            alt="Letter of Appreciation - Pharmaceutical Equipment Manufacturer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
