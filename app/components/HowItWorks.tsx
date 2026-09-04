import React from 'react';
import { Users, Download, Paintbrush } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="bg-white text-gray-800 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-center mb-16 text-[#1A1A1A]">
          How to send and share large files with TransferNow?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Card 1 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="w-10 h-10 rounded-full bg-[#8A96D9] group-hover:bg-white group-hover:text-[#4653A2] transition-colors duration-300 text-white flex items-center justify-center font-bold mb-8 text-lg">
              1
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Select your files to send</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              Click on <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Start</span> to select the files and 
              documents to send or drag and drop them 
              directly anywhere on our interface.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="w-10 h-10 rounded-full bg-[#8A96D9] group-hover:bg-white group-hover:text-[#4653A2] transition-colors duration-300 text-white flex items-center justify-center font-bold mb-8 text-lg">
              2
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Fill-in our form</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              Send files via email to your contacts or get a 
              customizable shareable link. Our tool 
              provides the adapted features in keeping 
              with your needs.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="w-10 h-10 rounded-full bg-[#8A96D9] group-hover:bg-white group-hover:text-[#4653A2] transition-colors duration-300 text-white flex items-center justify-center font-bold mb-8 text-lg">
              3
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Validate to transfer and start upload!</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              When you have finished filling-in the file 
              transfer form, click on <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Transfer</span> to confirm 
              your transfer information and start uploading 
              your documents 🚀
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 4 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="text-[#8A96D9] group-hover:text-white transition-colors duration-300 flex items-center justify-start mb-6">
              <Users className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Use TransferNow to send files for your business</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              Take advantage of our multi-user service subscriptions to <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">add or import your collaborators and additional users</span> so that they too can get a TransferNow account. Get an administrator account where <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">you will have complete managing control</span> over your users' access, white label customization, file reception and billing. You can also access the sending and receiving history of your business' files.
            </p>
          </div>
          
          {/* Card 5 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="text-[#8A96D9] group-hover:text-white transition-colors duration-300 flex items-center justify-start mb-6">
              <Download className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Integrate the TransferNow widget on your website and receive files easily.</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              Discover our <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">form generator</span> to receive files directly on your account and customize the widget's appearance as well as it's fields (text boxes, drop-down lists, checkboxes, radio buttons). You can get a simple <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">HTML code to integrate into your website</span> allowing you to receive files instantaneously.
            </p>
          </div>
          
          {/* Card 6 */}
          <div className="group bg-white hover:bg-[#4653A2] hover:shadow-[0_12px_40px_rgb(70,83,162,0.25)] transition-all duration-300 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border border-gray-50 hover:border-[#4653A2]">
            <div className="text-[#8A96D9] group-hover:text-white transition-colors duration-300 flex items-center justify-start mb-6">
              <Paintbrush className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold mb-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300">Customize your account with white label customization</h3>
            <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300 leading-relaxed text-[1.05rem]">
              Create your <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">personalized web subdomain</span> (for example: https://mycompany.transfernow.net) add your logo and wallpaper to highlight <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">your brand image and/or graphic identity</span>. You can visually improve your account by adding your logo and color scheme for your transfer emails. <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Promote your firm's vision</span> by customizing your account when you send and receive files.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-6xl mx-auto">
          <button className="bg-[#4653A2] hover:bg-[#384384] text-white font-medium py-3.5 px-8 rounded-lg transition-colors w-full sm:w-auto text-[1.05rem] cursor-pointer">
            Send files now
          </button>
          <button className="bg-white border border-[#CED4DA] hover:border-[#4653A2] text-[#4653A2] font-medium py-3.5 px-8 rounded-lg transition-colors w-full sm:w-auto text-[1.05rem] cursor-pointer">
            Compare our offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
