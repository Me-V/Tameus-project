"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const PlaceholderDropdown = () => (
  <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-3">
    <div className="py-1">
      <Link href="#" className="block p-2.5 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
        Placeholder Link 1
      </Link>
      <Link href="#" className="block p-2.5 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
        Placeholder Link 2
      </Link>
      <Link href="#" className="block p-2.5 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
        Placeholder Link 3
      </Link>
    </div>
  </div>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 right-0 z-50 text-white">
      {/* Logo */}
      <div className="flex-shrink-0 relative z-50">
        <Link href="/" className="text-2xl font-bold italic tracking-tight cursor-pointer">
          transfernow
        </Link>
      </div>

      {/* Main Links (Desktop) */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Discover <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-72 bg-white text-gray-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 pt-2">
            <div className="py-2">
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="font-semibold text-base">TransferNow Free &ndash; For everyone</div>
                <div className="text-sm text-gray-500 mt-1">5 GB per transfer to send and receive files quickly and for free.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1 cursor-pointer">
                <div className="font-semibold text-base">TransferNow Premium &ndash; 1 user</div>
                <div className="text-sm text-gray-500 mt-1">For professionals. 250 GB per transfer.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1 cursor-pointer">
                <div className="font-semibold text-base">TransferNow Team &ndash; 10 users</div>
                <div className="text-sm text-gray-500 mt-1">For teams, small and medium-sized businesses.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1 cursor-pointer">
                <div className="font-semibold text-base">TransferNow Enterprise &ndash; Custom plan</div>
                <div className="text-sm text-gray-500 mt-1">For medium and large businesses.</div>
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                Discover TransferNow <span className="text-gray-400">&gt;</span>
              </Link>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                TransferNow Fundamentals <span className="text-gray-400">&gt;</span>
              </Link>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                Try for free for 7 days <span className="text-gray-400">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Offers and prices <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <PlaceholderDropdown />
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Solutions <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <PlaceholderDropdown />
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Apps <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <PlaceholderDropdown />
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Developers <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <PlaceholderDropdown />
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors py-2 cursor-pointer">
            Resources <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <PlaceholderDropdown />
        </div>
      </div>

      {/* Action Buttons (Desktop) */}
      <div className="hidden lg:flex items-center space-x-3 bg-white/90 rounded-full p-1 border border-white/20 relative z-50">
        <button className="px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          Sign in
        </button>
        <button className="px-5 py-2 text-sm font-medium bg-[#4a58b8] hover:bg-[#3d47b0] text-white rounded-full transition-colors cursor-pointer">
          Try for free
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden relative z-50">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white/40 backdrop-blur-xl overflow-y-auto lg:hidden flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-8 opacity-0 invisible'
        }`}
      >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0A102E] text-white">
            <Link href="/" className="text-xl font-bold italic tracking-tight cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              transfernow
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer p-1 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-6 py-5 flex flex-col text-sm">
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Discover TransferNow</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Plans and pricing</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Applications</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Sign in</Link>
            <Link href="#" className="text-gray-900 font-medium py-2 hover:text-[#4653A2] transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Sign up</Link>

            <div className="w-full h-px bg-gray-100 my-4" />

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-500 font-medium">
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Support & FAQ</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Transfer files</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Request files</Link>
              
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>TransferNow vs WeTransfer</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Send all file types</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Tutorials and guides</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Security</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Terms of use</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Privacy</Link>
              
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact support</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact sales</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Service status</Link>
            </div>

            <div className="w-full h-px bg-gray-100 my-4" />
            
            <Link href="#" className="text-[11px] text-gray-500 hover:text-gray-900 transition-colors font-medium cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Available languages</Link>
          </div>
      </div>
    </nav>
  );
}
