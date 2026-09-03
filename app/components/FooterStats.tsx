import React from 'react';

export default function FooterStats() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 w-full px-6 py-4 flex flex-col md:flex-row items-end md:items-center justify-between pb-8 md:pb-4">
      {/* Stats Section */}
      <div className="flex flex-wrap items-center gap-4 md:gap-12 justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
        <div className="text-center">
          <div className="text-[#FFB347] font-bold text-xl drop-shadow-md">4 780 701 959</div>
          <div className="text-white text-sm font-medium drop-shadow">downloaded files</div>
        </div>
        <div className="text-center">
          <div className="text-[#FFB347] font-bold text-xl drop-shadow-md">1 597 892 446</div>
          <div className="text-white text-sm font-medium drop-shadow">sent files</div>
        </div>
        <div className="text-center">
          <div className="text-[#FFB347] font-bold text-xl drop-shadow-md">103 844 988 GB</div>
          <div className="text-white text-sm font-medium drop-shadow">sent into orbit</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-[#FFB347] font-bold text-xl drop-shadow-md">
            <span>4.8</span>
            <div className="flex text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-xs font-normal text-white ml-1">(757 695 votes)</span>
          </div>
          <div className="text-white text-sm font-medium drop-shadow">average user rating</div>
        </div>
      </div>

      {/* Floating Toggles */}
      <div className="flex bg-white rounded-full p-1 shadow-lg mt-4 md:mt-0 mx-auto md:mx-0 shrink-0">
        <button className="px-6 py-2 bg-[#FDE047] text-gray-900 rounded-full font-semibold shadow-sm transition-transform hover:scale-105">
          Send
        </button>
        <button className="px-6 py-2 text-gray-600 hover:text-gray-900 rounded-full font-semibold transition-colors">
          Receive
        </button>
      </div>
    </div>
  );
}
