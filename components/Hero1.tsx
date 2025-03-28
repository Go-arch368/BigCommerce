"use client";
import React, { useState } from "react";

const Hero1 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 h-auto md:h-9 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 text-gray-500 text-sm py-2 md:py-0">
      {/* Mobile Menu Toggle */}
      <div className="w-full flex justify-between items-center md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop & Mobile Navigation */}
      <div className={`w-full md:flex justify-between items-center ${mobileMenuOpen ? "block" : "hidden"} md:flex`}>
        {/* Left Side - Navigation Tabs */}
        <div className="flex flex-col md:flex-row h-full">
          <div className="cursor-pointer px-4 py-2 md:py-0 flex items-center hover:text-blue-600">
            ENTERPRISE
          </div>
          <div className="cursor-pointer px-4 py-2 md:py-0 flex items-center bg-white text-black">
            SMALL BUSINESS
          </div>
        </div>

        {/* Right Side - Utility Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <h1 className="cursor-pointer hover:text-blue-600">Help center</h1>
          <h1 className="cursor-pointer hover:text-blue-600">Developer center</h1>
          <h1 className="cursor-pointer hover:text-blue-600">Call Sales: 1-888-248-9325</h1>
          <h1 className="cursor-pointer hover:text-blue-600">Log In</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
