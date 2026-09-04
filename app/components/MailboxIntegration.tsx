import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
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
          <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-[2px] transition-transform duration-500 hover:-translate-y-2">
            {/* Spinning Border Container (visible on hover) */}
            <div 
              className="absolute inset-[-50%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg, transparent 0 300deg, #4653A2 360deg)',
              }}
            />
            {/* Static Border (visible when not hovered) */}
            <div className="absolute inset-0 bg-gray-200 z-0 group-hover:opacity-0 transition-opacity duration-500 rounded-[2rem] md:rounded-[2.5rem]" />

            {/* Card Content */}
            <div className="relative z-10 bg-white rounded-[calc(2rem-2px)] md:rounded-[calc(2.5rem-2px)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full p-8 md:p-12 flex flex-col items-start transition-all duration-500 group-hover:shadow-2xl">
              {/* Logos */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#4653A2] rounded-2xl flex items-center justify-center text-white font-bold text-[28px] italic font-serif pb-1 shadow-lg shadow-indigo-500/30 transform transition-transform group-hover:scale-110 duration-500">
                  t
                </div>
                <Plus className="w-6 h-6 text-[#8A96D9]" strokeWidth={2.5} />
                <PiMicrosoftOutlookLogoFill className="w-12 h-12 text-[#0078D4] transform transition-transform group-hover:scale-110 duration-500" />
              </div>
              
              <h3 className="text-[1.25rem] font-bold text-[#1A1A1A] mb-4">
                TransferNow add-in for Outlook
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-[1.05rem]">
                Optimize large file transfers with TransferNow for Outlook. Easy to use, it enables rapid uploading directly from Outlook. Save time and increase efficiency!
              </p>
              
              <button className="group/btn relative overflow-hidden bg-[#4653A2] text-white font-medium py-3 px-6 md:px-8 rounded-xl transition-all duration-300 text-[1rem] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer flex items-center gap-2 hover:-translate-y-0.5">
                <span className="relative z-10">Discover the Outlook add-in</span>
                <ArrowRight className="w-4 h-4 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-[#384384] transform scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100 z-0" />
              </button>
            </div>
          </div>

          {/* Chrome / Gmail Card */}
          <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-[2px] transition-transform duration-500 hover:-translate-y-2">
            {/* Spinning Border Container (visible on hover) */}
            <div 
              className="absolute inset-[-50%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]"
              style={{
                background: 'conic-gradient(from 90deg, transparent 0 300deg, #4653A2 360deg)',
              }}
            />
            {/* Static Border (visible when not hovered) */}
            <div className="absolute inset-0 bg-gray-200 z-0 group-hover:opacity-0 transition-opacity duration-500 rounded-[2rem] md:rounded-[2.5rem]" />

            {/* Card Content */}
            <div className="relative z-10 bg-white rounded-[calc(2rem-2px)] md:rounded-[calc(2.5rem-2px)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full p-8 md:p-12 flex flex-col items-start transition-all duration-500 group-hover:shadow-2xl">
              {/* Logos */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#4653A2] rounded-2xl flex items-center justify-center text-white font-bold text-[28px] italic font-serif pb-1 shadow-lg shadow-indigo-500/30 transform transition-transform group-hover:scale-110 duration-500">
                  t
                </div>
                <Plus className="w-6 h-6 text-[#8A96D9]" strokeWidth={2.5} />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" 
                  alt="Chrome" 
                  className="w-12 h-12 object-contain transform transition-transform group-hover:scale-110 duration-500"
                />
              </div>
              
              <h3 className="text-[1.25rem] font-bold text-[#1A1A1A] mb-4">
                TransferNow extension for Chrome and Gmail
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-[1.05rem]">
                Discover the TransferNow extension for Chrome and Gmail: the ideal solution for transferring large files easily. Perfect integration, fast and secure transfer directly from your browser or Gmail.
              </p>
              
              <button className="group/btn relative overflow-hidden bg-[#4653A2] text-white font-medium py-3 px-6 md:px-8 rounded-xl transition-all duration-300 text-[1rem] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer flex items-center gap-2 hover:-translate-y-0.5">
                <span className="relative z-10">Discover the Chrome extension</span>
                <ArrowRight className="w-4 h-4 relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-[#384384] transform scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100 z-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailboxIntegration;
