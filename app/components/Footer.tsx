"use client";

import React from 'react';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 px-4 md:px-8 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Card */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-3xl font-bold italic text-gray-400 mb-6 md:mb-0 lowercase font-serif">
              transfernow
            </h2>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-[#4653A2] transition-colors"><FaFacebookF className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1DA1F2] transition-colors"><FaXTwitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#FF0000] transition-colors"><FaYoutube className="w-6 h-6" /></a>
            </div>
          </div>
          
          <p className="text-gray-600 text-[0.95rem] leading-relaxed">
            TransferNow is a secure solution for <span className="font-semibold text-gray-800">transfer of large files</span> — share and send or receive large files (photos, videos, documents, ...) quickly. Whether for a <span className="font-semibold text-gray-800">personal or professional project</span>, our intuitive file sending and receiving tool is suitable for all uses to transfer heavy documents. Transfer files by email or generate a secure sharing link. Request files by email or get a secure file drop link. TransferNow is simple, fast, and secure.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 text-[0.9rem] text-gray-500">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Create a new file transfer</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Request files</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Offers and prices</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Official discounts</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow Free</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow Premium</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow Team</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow Enterprise</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors inline-flex items-center gap-1">TransferNow API/SDK <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Applications</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Branded transfers</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Register</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Sign in</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Discover</h4>
            <ul className="space-y-3 mb-10">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Discover TransferNow</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send large files by e-mail</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Get a share link</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Sell files and get paid</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Request files by e-mail</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Get a file deposit link</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Receive files on my account</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Receive files from my site</a></li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Industry solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">All solutions</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Photographers</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Videographers</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Music & studios</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Creative agencies</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Architecture & construction</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Send large files</h4>
            <ul className="space-y-3 mb-10">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">All file types</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send a video</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send photos</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send a PDF</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send more than 2 GB</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send with Gmail</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Send via WhatsApp</a></li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Fundamentals</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">File hosting</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Infrastructure and technology</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Terms of use</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Personal data</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Legal information</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-[1.05rem]">Resources</h4>
            <ul className="space-y-3 mb-10">
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Help center</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Guides and tutorials</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Contact support</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Contact sales</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors inline-flex items-center gap-1">Developers <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors inline-flex items-center gap-1">Service status <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Blog news</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Product updates</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Comparisons & alternatives</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow vs WeTransfer</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">TransferNow vs SwissTransfer</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">FTP alternative</a></li>
              <li><a href="#" className="hover:text-[#4653A2] transition-colors">Top 10 File Transfer Services</a></li>
            </ul>

            <button className="flex items-center justify-between w-[200px] border border-gray-200 rounded-lg px-4 py-2 text-gray-600 hover:border-gray-300 transition-colors bg-white">
              <span className="flex items-center gap-2 text-[0.85rem] font-medium">
                <span className="bg-[#4653A2] text-white text-[10px] px-1 rounded-sm">A</span>
                <span className="bg-[#4653A2] text-white text-[10px] px-1 rounded-sm">文</span>
                EN (English)
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[0.8rem] text-gray-500 pt-8 border-t border-gray-100 relative">
          <p>Made in France with ❤️ and lots of ☕.</p>
          <p className="mt-4 md:mt-0">2013 - 2026 © TransferNow — All rights reserved</p>
          
          <button 
            className="hidden md:flex absolute right-0 -top-[1.2rem] bg-white border border-gray-100 shadow-sm rounded-full p-2 hover:shadow transition-shadow text-[#4653A2]"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronUp className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
