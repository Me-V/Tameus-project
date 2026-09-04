import React from 'react';
import { Cloud, Settings } from 'lucide-react';
import { FaWindows, FaApple, FaLinux, FaAppStoreIos, FaAndroid } from 'react-icons/fa';

const AvailablePlatforms = () => {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.35rem] md:text-[1.5rem] font-bold text-[#1A1A1A] mb-8">
          TransferNow is available for your Windows, macOS, and Linux devices.
        </h2>

        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-50 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Group 1: Web & API */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full md:w-auto flex-1 px-2 py-4 md:py-0">
            {/* Web */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <Cloud className="w-10 h-10 text-[#8A96D9] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" fill="currentColor" strokeWidth={0} />
              <span className="text-gray-800 font-medium text-[1.1rem]">Web</span>
              <button className="px-6 py-1.5 rounded-md border border-[#8A96D9] text-[#4653A2] hover:bg-blue-50 font-medium transition-colors text-sm cursor-pointer">
                Use
              </button>
            </div>
            
            {/* API */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <Settings className="w-10 h-10 text-[#4B5563] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45" strokeWidth={2.5} />
              <span className="text-gray-800 font-medium text-[1.1rem]">API</span>
              <button className="px-6 py-1.5 rounded-md bg-[#4B5563] hover:bg-gray-800 text-white font-medium transition-colors text-sm cursor-pointer">
                View
              </button>
            </div>
          </div>

          <div className="hidden md:block w-px h-24 bg-gray-100 shrink-0" />
          <div className="md:hidden w-full h-px bg-gray-100" />

          {/* Group 2: Desktop */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full md:w-auto flex-[1.5] px-2 py-4 md:py-0">
            {/* Windows */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,164,239,0.15)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <FaWindows className="w-10 h-10 text-[#00A4EF] transition-transform duration-300 group-hover:scale-110" />
              <span className="text-gray-800 font-medium text-[1.1rem]">Windows</span>
              <button className="px-6 py-1.5 rounded-md bg-[#00A4EF] hover:bg-[#008DD1] text-white font-medium transition-colors text-sm shadow-sm group-hover:shadow cursor-pointer">
                Download
              </button>
            </div>
            
            {/* macOS */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(90,99,156,0.15)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <FaApple className="w-10 h-10 text-[#5A639C] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <span className="text-gray-800 font-medium text-[1.1rem]">macOS</span>
              <button className="px-6 py-1.5 rounded-md bg-[#5A639C] hover:bg-[#4A538C] text-white font-medium transition-colors text-sm shadow-sm group-hover:shadow cursor-pointer">
                Download
              </button>
            </div>

            {/* Linux */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <FaLinux className="w-10 h-10 text-[#374151] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <span className="text-gray-800 font-medium text-[1.1rem]">Linux</span>
              <button className="px-6 py-1.5 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium transition-colors text-sm shadow-sm group-hover:shadow cursor-pointer">
                Download
              </button>
            </div>
          </div>

          <div className="hidden md:block w-px h-24 bg-gray-100 shrink-0" />
          <div className="md:hidden w-full h-px bg-gray-100" />

          {/* Group 3: Mobile */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full md:w-auto flex-1 px-2 py-4 md:py-0">
             {/* iOS */}
             <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <FaAppStoreIos className="w-10 h-10 text-black transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <span className="text-gray-800 font-medium text-[1.1rem]">iOS</span>
              <button className="px-6 py-1.5 rounded-md bg-black hover:bg-gray-800 text-white font-medium transition-colors text-sm shadow-sm group-hover:shadow cursor-pointer">
                Download
              </button>
            </div>

            {/* Android */}
            <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(61,220,132,0.15)] bg-white border border-transparent hover:border-gray-100 cursor-pointer">
              <FaAndroid className="w-10 h-10 text-[#3DDC84] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              <span className="text-gray-800 font-medium text-[1.1rem]">Android</span>
              <button className="px-6 py-1.5 rounded-md bg-[#3DDC84] hover:bg-[#34C575] text-white font-medium transition-colors text-sm shadow-sm group-hover:shadow cursor-pointer">
                Download
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AvailablePlatforms;
