import React from 'react';

const Hero1 = () => {
  return (
    <div className="bg-gray-100 h-9 flex items-center justify-between px-20 text-gray-500 text-sm">
      {/* Left side div - Navigation Tabs (static) */}
      <div className="flex h-full">
        <div className="cursor-pointer px-4 flex items-center hover:text-blue-600">
          ENTERPRISE
        </div>
        <div className="cursor-pointer px-4 flex items-center bg-white text-black">
          SMALL BUSINESS
        </div>
      </div>

      {/* Right side div - Utility Links */}
      <div className="flex space-x-6">
        <h1 className="cursor-pointer hover:text-blue-600">Help center</h1>
        <h1 className="cursor-pointer hover:text-blue-600">Developer center</h1>
        <h1 className="cursor-pointer hover:text-blue-600">Call Sales: 1-888-248-9325</h1>
        <h1 className="cursor-pointer hover:text-blue-600">Log In</h1>
      </div>
    </div>
  );
};

export default Hero1;