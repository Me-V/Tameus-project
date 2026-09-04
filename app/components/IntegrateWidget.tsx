import React from 'react';
import { Download, AlignLeft, Share2 } from 'lucide-react';

const IntegrateWidget = () => {
  return (
    <section className="bg-[#F8F9FA] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#1A1A1A] leading-tight mb-6">
            Integrate TransferNow to your website for file reception
          </h2>
          <p className="text-gray-600 text-[1.1rem] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            Discover our tool for creating <span className="font-semibold text-gray-800">customized forms</span> and then by adding a <span className="font-semibold text-gray-800">simple line of HTML code</span> on your internet site you can directly receive files.
          </p>
          <button className="bg-[#4653A2] hover:bg-[#384384] text-white font-medium py-3 px-8 rounded-lg transition-colors text-[1.05rem]">
            Free trial
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-12 border border-gray-50">
            {/* List Item 1 */}
            <div className="flex items-start gap-6 pb-8">
              <div className="mt-1 text-[#8A96D9] shrink-0">
                <Download className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <p className="text-gray-600 text-[1.05rem] leading-relaxed">
                Customize and <span className="font-semibold text-gray-800">integrate our widget to receive files</span> from your clients or other contacts directly from your own website.
              </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8" />

            {/* List Item 2 */}
            <div className="flex items-start gap-6 pb-8">
              <div className="mt-1 text-[#8A96D9] shrink-0">
                <AlignLeft className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <p className="text-gray-600 text-[1.05rem] leading-relaxed">
                Build your own file reception forms and add your <span className="font-semibold text-gray-800">customized fields</span> (text fields, drop-down lists, checkboxes, and radio buttons).
              </p>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8" />

            {/* List Item 3 */}
            <div className="flex items-start gap-6">
              <div className="mt-1 text-[#8A96D9] shrink-0">
                <Share2 className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <p className="text-gray-600 text-[1.05rem] leading-relaxed">
                The transferred files are stored on our <span className="font-semibold text-gray-800">secure cloud</span> and you will receive a notification to inform you that a <span className="font-semibold text-gray-800">new transfer was received</span> on your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrateWidget;
