import React from 'react';
import { Plus } from 'lucide-react';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';

const MailboxIntegration = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.35rem] md:text-[1.5rem] font-bold text-[#1A1A1A] mb-8">
          Transfer files directly from your Outlook and Gmail mailboxes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Outlook Card */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-8 md:p-12 flex flex-col items-start">
            {/* Logos */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#4653A2] rounded-2xl flex items-center justify-center text-white font-bold text-[28px] italic font-serif pb-1">
                t
              </div>
              <Plus className="w-6 h-6 text-[#8A96D9]" strokeWidth={2.5} />
              <PiMicrosoftOutlookLogoFill className="w-12 h-12 text-[#0078D4]" />
            </div>
            
            <h3 className="text-[1.25rem] font-bold text-[#1A1A1A] mb-4">
              TransferNow add-in for Outlook
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-[1.05rem]">
              Optimize large file transfers with TransferNow for Outlook. Easy to use, it enables rapid uploading directly from Outlook. Save time and increase efficiency!
            </p>
            
            <button className="bg-[#4653A2] hover:bg-[#384384] text-white font-medium py-3 px-8 rounded-lg transition-colors text-[1rem] shadow-sm cursor-pointer">
              Discover the Outlook add-in
            </button>
          </div>

          {/* Chrome / Gmail Card */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 p-8 md:p-12 flex flex-col items-start">
            {/* Logos */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#4653A2] rounded-2xl flex items-center justify-center text-white font-bold text-[28px] italic font-serif pb-1">
                t
              </div>
              <Plus className="w-6 h-6 text-[#8A96D9]" strokeWidth={2.5} />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" 
                alt="Chrome" 
                className="w-12 h-12 object-contain"
              />
            </div>
            
            <h3 className="text-[1.25rem] font-bold text-[#1A1A1A] mb-4">
              TransferNow extension for Chrome and Gmail
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-[1.05rem]">
              Discover the TransferNow extension for Chrome and Gmail: the ideal solution for transferring large files easily. Perfect integration, fast and secure transfer directly from your browser or Gmail.
            </p>
            
            <button className="bg-[#4653A2] hover:bg-[#384384] text-white font-medium py-3 px-8 rounded-lg transition-colors text-[1rem] shadow-sm cursor-pointer">
              Discover the Chrome extension
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailboxIntegration;
