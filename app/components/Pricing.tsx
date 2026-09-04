import React from 'react';
import { Check, X, User, Users, Building } from 'lucide-react';

const CheckIcon = () => <Check className="w-4 h-4 text-[#4653A2] mr-3 shrink-0 mt-0.5" strokeWidth={3} />;
const CrossIcon = () => <X className="w-4 h-4 text-gray-300 mr-3 shrink-0 mt-0.5" strokeWidth={3} />;

const Pricing = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Pricing Header & Toggle */}
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.6rem] text-[#1A1A1A] mb-4">
            <span className="font-bold">Ready to get started?</span> Discover our offers!
          </h2>
          <p className="text-[1.15rem] text-gray-600 mb-12">
            Secure recurring payment with no commitment. Cancel at any time.
          </p>

          <div className="inline-flex rounded-xl border border-[#8A96D9] bg-white overflow-hidden shadow-sm">
            <button className="px-8 py-3 text-[1.1rem] font-bold text-[#4653A2] border-r border-[#8A96D9] hover:bg-blue-50 transition-colors">
              2 years
            </button>
            <button className="px-8 py-3 text-[1.1rem] font-semibold text-[#8A96D9] border-r border-[#8A96D9] hover:bg-blue-50 transition-colors">
              1 year
            </button>
            <button className="px-8 py-3 text-[1.1rem] font-semibold text-[#8A96D9] hover:bg-blue-50 transition-colors">
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Free Plan */}
          <div className="flex flex-col rounded-2xl border border-gray-100 p-8 h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Free</h3>
              <p className="text-gray-600 text-lg">Free service</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-4">Transfer for free</p>
              <div className="flex items-center text-gray-700 font-medium mb-6">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                No registration
              </div>
              
              <button className="w-full py-2.5 rounded-lg border border-[#4653A2] text-[#4653A2] hover:bg-blue-50 font-medium transition-colors">
                Send files
              </button>
            </div>

            <div className="flex-grow">
              <ul className="space-y-4 text-[0.95rem] text-gray-700">
                <li className="flex items-start"><CheckIcon /> <span className="font-semibold text-gray-900">5 GB</span> &nbsp;per transfer</li>
                <li className="flex items-start"><CheckIcon /> Files available for <span className="font-semibold text-gray-900 ml-1">7 days</span></li>
                <li className="flex items-start"><CheckIcon /> Password protection</li>
                <li className="flex items-start"><CheckIcon /> Simple file reception</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> No storage</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Recover expired transfers</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Full customization</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Outlook Add-in</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Chrome and Gmail extension</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Custom domain</li>
                <li className="flex items-start text-gray-400"><CrossIcon /> Single Sign-On (SSO)</li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col rounded-2xl border-2 border-[#FF6B6B] overflow-hidden h-full relative">
            <div className="bg-[#FF6B6B] text-white text-center py-2 text-xs font-bold tracking-wider">
              SAVE 40%
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-[#1A1A1A]">Premium</h3>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#1A1A1A]">₹ 480</span>
                  <span className="text-sm text-gray-600"> /month</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-4 line-through">₹ 19200</p>
                <p className="text-sm text-gray-700 mb-4">₹ 11520 / 2 years (-40%)</p>
                <div className="flex items-center text-gray-700 font-medium mb-6">
                  <User className="w-5 h-5 mr-2 text-gray-600" />
                  1 user
                </div>
                
                <div className="space-y-3">
                  <button className="w-full py-2.5 rounded-lg bg-[#FF6B6B] hover:bg-[#E55A5A] text-white font-medium transition-colors">
                    Continue with Premium
                  </button>
                  <button className="w-full py-2.5 rounded-lg border border-[#FF6B6B] text-[#FF6B6B] hover:bg-red-50 font-medium transition-colors">
                    Free trial
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <div className="flex-grow">
                <ul className="space-y-4 text-[0.95rem] text-gray-700">
                  <li className="flex items-start"><CheckIcon /> <span className="font-semibold text-gray-900">250 GB</span> &nbsp;per transfer</li>
                  <li className="flex items-start"><CheckIcon /> Files available for <span className="font-semibold text-gray-900 ml-1">365 days</span></li>
                  <li className="flex items-start"><CheckIcon /> Password protection</li>
                  <li className="flex items-start"><CheckIcon /> Complete file reception</li>
                  <li className="flex items-start"><CheckIcon /> <span className="font-semibold text-gray-900">1000 GB</span> &nbsp;of storage</li>
                  <li className="flex items-start"><CheckIcon /> Recover expired transfers</li>
                  <li className="flex items-start"><CheckIcon /> Full customization</li>
                  <li className="flex items-start"><CheckIcon /> Outlook Add-in</li>
                  <li className="flex items-start"><CheckIcon /> Chrome and Gmail extension</li>
                  <li className="flex items-start text-gray-400"><CrossIcon /> Custom domain</li>
                  <li className="flex items-start text-gray-400"><CrossIcon /> Single Sign-On (SSO)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Plan */}
          <div className="flex flex-col rounded-2xl border-2 border-[#7B8BCE] overflow-hidden h-full relative">
            <div className="bg-[#7B8BCE] text-white text-center py-2 text-xs font-bold tracking-wider">
              SAVE 40%
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-6 flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-[#1A1A1A]">Team</h3>
                <div className="text-right">
                  <span className="text-xl font-bold text-[#1A1A1A]">₹ 1440</span>
                  <span className="text-sm text-gray-600"> /month</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-4 line-through">₹ 57600</p>
                <p className="text-sm text-gray-700 mb-4">₹ 34560 / 2 years (-40%)</p>
                <div className="flex items-center text-gray-700 font-medium mb-6">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  10 users included
                </div>
                
                <div className="space-y-3">
                  <button className="w-full py-2.5 rounded-lg bg-[#4653A2] hover:bg-[#384384] text-white font-medium transition-colors">
                    Continue with Team
                  </button>
                  <button className="w-full py-2.5 rounded-lg border border-[#4653A2] text-[#4653A2] hover:bg-blue-50 font-medium transition-colors">
                    Free trial
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <div className="flex-grow">
                <ul className="space-y-4 text-[0.95rem] text-gray-700">
                  <li className="flex items-start"><CheckIcon /> <span className="font-semibold text-gray-900">500 GB</span> &nbsp;per transfer</li>
                  <li className="flex items-start"><CheckIcon /> Files available for <span className="font-semibold text-gray-900 ml-1">365 days</span></li>
                  <li className="flex items-start"><CheckIcon /> Password protection</li>
                  <li className="flex items-start"><CheckIcon /> Complete file reception</li>
                  <li className="flex items-start"><CheckIcon /> <span className="font-semibold text-gray-900">2000 GB</span> &nbsp;of shared storage</li>
                  <li className="flex items-start"><CheckIcon /> Recover expired transfers</li>
                  <li className="flex items-start"><CheckIcon /> Full customization</li>
                  <li className="flex items-start"><CheckIcon /> Outlook Add-in</li>
                  <li className="flex items-start"><CheckIcon /> Chrome and Gmail extension</li>
                  <li className="flex items-start"><CheckIcon /> Custom domain</li>
                  <li className="flex items-start text-gray-400"><CrossIcon /> Single Sign-On (SSO)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col rounded-2xl border border-gray-100 p-8 h-full">
            <div className="mb-6 flex justify-between items-baseline">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Enterprise</h3>
              <div className="text-right">
                <span className="text-[1.05rem] font-bold text-[#1A1A1A]">Customized</span>
              </div>
            </div>
            
            <div className="mb-6 mt-2">
              <p className="text-sm text-gray-500 mb-4">Contact us</p>
              <div className="flex items-center text-gray-700 font-medium mb-6">
                <Building className="w-5 h-5 mr-2 text-gray-600" />
                10 users or more
              </div>
              
              <button className="w-full py-2.5 rounded-lg bg-[#4653A2] hover:bg-[#384384] text-white font-medium transition-colors">
                Contact us
              </button>
            </div>

            <div className="flex-grow pt-[58px]"> {/* Padding to align lists with premium/team which have two buttons */}
              <ul className="space-y-4 text-[0.95rem] text-gray-700">
                <li className="flex items-start"><CheckIcon /> Customized</li>
                <li className="flex items-start"><CheckIcon /> Customized availability</li>
                <li className="flex items-start"><CheckIcon /> Password protection</li>
                <li className="flex items-start"><CheckIcon /> Complete file reception</li>
                <li className="flex items-start"><CheckIcon /> Customized storage</li>
                <li className="flex items-start"><CheckIcon /> Recover expired transfers</li>
                <li className="flex items-start"><CheckIcon /> Full customization</li>
                <li className="flex items-start"><CheckIcon /> Outlook Add-in</li>
                <li className="flex items-start"><CheckIcon /> Chrome and Gmail extension</li>
                <li className="flex items-start"><CheckIcon /> Custom domain</li>
                <li className="flex items-start"><CheckIcon /> Single Sign-On (SSO)</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Starter Banner */}
        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_2px_15px_rgb(0,0,0,0.02)]">
          {/* Left section (Title) */}
          <div className="lg:w-1/6 shrink-0 text-center lg:text-left">
            <p className="text-gray-400 text-sm mb-1">For occasional use</p>
            <h3 className="text-[1.6rem] font-bold text-[#1A1A1A]">Starter</h3>
          </div>

          {/* Middle section (Features) */}
          <div className="lg:flex-1 text-center lg:text-left text-gray-600 text-[0.95rem]">
            <p className="mb-2">
              10 GB per transfer <span className="mx-1 text-gray-400">·</span> 100 GB storage <span className="mx-1 text-gray-400">·</span> Transfers available for 30 days
            </p>
            <p>
              Transfer tracking <span className="mx-1 text-gray-400">·</span> Transfer history <span className="mx-1 text-gray-400">·</span> Zero advertising
            </p>
          </div>

          {/* Right section (Price) */}
          <div className="lg:w-1/6 shrink-0 text-center">
            <p className="text-[#1A1A1A] font-bold text-[1.3rem]">₹ 240 <span className="text-sm font-normal">/month</span></p>
            <p className="text-gray-400 text-sm mt-1">2 years (-40%)</p>
          </div>

          {/* Far Right section (Button) */}
          <div className="lg:w-[220px] shrink-0 flex flex-col items-center">
            <button className="w-full py-2.5 rounded-lg border border-[#4653A2] text-[#4653A2] hover:bg-blue-50 font-medium transition-colors mb-2">
              Continue with Starter
            </button>
            <p className="text-gray-400 text-xs">For individual use</p>
          </div>
        </div>

        {/* Compare link */}
        <div className="mt-20 text-center">
          <a href="#" className="text-[#4653A2] text-lg hover:text-[#384384] transition-colors inline-flex items-center gap-3 border-b border-dashed border-[#8A96D9] pb-0.5">
            Compare our offers and features <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
