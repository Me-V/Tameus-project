import React from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 right-0 z-50 text-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-bold italic tracking-tight">
          transfernow
        </Link>
      </div>

      {/* Main Links */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Discover <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-72 bg-white text-gray-900 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 pt-2">
            <div className="py-2">
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="font-semibold text-base">TransferNow Free &ndash; For everyone</div>
                <div className="text-sm text-gray-500 mt-1">5 GB per transfer to send and receive files quickly and for free.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1">
                <div className="font-semibold text-base">TransferNow Premium &ndash; 1 user</div>
                <div className="text-sm text-gray-500 mt-1">For professionals. 250 GB per transfer.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1">
                <div className="font-semibold text-base">TransferNow Team &ndash; 10 users</div>
                <div className="text-sm text-gray-500 mt-1">For teams, small and medium-sized businesses.</div>
              </Link>
              <Link href="#" className="block p-2 hover:bg-gray-50 rounded-lg mt-1">
                <div className="font-semibold text-base">TransferNow Enterprise &ndash; Custom plan</div>
                <div className="text-sm text-gray-500 mt-1">For medium and large businesses.</div>
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium">
                Discover TransferNow <span className="text-gray-400">&gt;</span>
              </Link>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium">
                TransferNow Fundamentals <span className="text-gray-400">&gt;</span>
              </Link>
              <Link href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg font-medium">
                Try for free for 7 days <span className="text-gray-400">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Offers and prices <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Solutions <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Apps <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Developers <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center hover:text-gray-200 transition-colors">
            Resources <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center space-x-3 bg-white/90 rounded-full p-1 border border-white/20">
        <button className="px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
          Sign in
        </button>
        <button className="px-5 py-2 text-sm font-medium bg-[#4a58b8] hover:bg-[#3d47b0] text-white rounded-full transition-colors">
          Try for free
        </button>
      </div>

      {/* Mobile Menu Icon (Placeholder) */}
      <div className="lg:hidden">
        <button className="p-2">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
}
