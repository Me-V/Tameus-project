import React from "react";

const CTA = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 pb-32">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Background Stacked Card */}
        <div className="absolute top-6 left-6 right-6 bottom-[-24px] bg-[#E1E5F8] rounded-[2rem] z-0" />

        {/* Main Cardd */}
        <div className="relative z-10 bg-[#0B0F6B] rounded-[2rem] p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Take advantage of our 7 day free trial for private and business
            users
          </h2>

          <p className="text-[1.05rem] md:text-[1.1rem] leading-relaxed mb-10 max-w-4xl mx-auto text-gray-200">
            TransferNow is the ideal solution to send your files via email (or
            shareable link) and receive files of every size! Exchange documents
            while showcasing your brand image and make a great impression on
            your users!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#4653A2] hover:bg-[#384384] text-white font-medium rounded-lg transition-colors text-[1.05rem] cursor-pointer">
              Register
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg border border-white transition-colors text-[1.05rem] cursor-pointer">
              Compare our offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
