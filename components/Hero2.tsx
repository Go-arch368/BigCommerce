"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
     
      <div className="bg-white h-auto md:h-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 md:py-0">
        
        <div className="w-full flex justify-between items-center md:w-auto">
          <Image src="/data.png" alt="logo" width={120} height={120} className="ml-2 md:ml-4" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
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


        <div className={`w-full md:flex md:items-center md:space-x-12 ${mobileMenuOpen ? "block" : "hidden"} md:flex`}>
          <div className="flex flex-col md:flex-row text-center md:text-left">
            <h1 className="cursor-pointer hover:text-blue-600 font-semibold text-lg py-2 md:py-0">Features</h1>
            <h1 className="cursor-pointer hover:text-blue-600 font-semibold text-lg py-2 md:py-0">Resources</h1>
            <h1 className="cursor-pointer hover:text-blue-600 font-semibold text-lg py-2 md:py-0">Pricing</h1>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-bold text-md">
              GET STARTED
            </Button>
          </div>
        </div>
      </div>

    
      <div className="w-full bg-[#003d9a] text-center py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white text-sm md:text-lg">
            <span className="font-bold">60 days free - Limited time offer.</span>{" "}
            <span>Get two months free on annual Pro or Plus plans</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
