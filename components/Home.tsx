import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
     
        <div className="flex items-center text-sm mb-4">
          <span className="text-blue-700 font-bold">Home</span>
          <span className="mx-2 text-gray-400">›</span>
          <span className="font-medium text-gray-600">Essentials</span>
        </div>

        <h1 className="text-sm font-bold text-gray-900 text-center mb-6">
          BIGCOMMERCE ESSENTIALS
        </h1>

        <p className="text-3xl sm:text-5xl text-black text-center mb-8 leading-tight font-bold">
          Grow your brand with top-rated<br className="hidden sm:block" /> commerce platform.
        </p>

        <div className="text-center">
          <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 sm:px-8 rounded-md shadow-sm transition-all">
            START FREE TRIAL
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 py-8 mt-12">
          {["1.png", "2.png", "3.png"].map((src, index) => (
            <div key={index} className="flex flex-col items-center mx-4 text-center">
              <Image src={`/${src}`} alt="rating" width={48} height={48} className="mb-2" />
              <span className="text-base font-medium text-gray-700">
                {index === 0 ? "Top-rated in ecommerce" : index === 1 ? "Top-rated for B2B SMBs" : "Top-rated ecommerce platform"}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8 px-4 sm:px-8 py-12">
          {["4.png", "5.png", "6.png"].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-auto">
              <Image src={`/${src}`} alt="hero" width={index === 1 ? 600 : 250} height={500} className="object-cover mx-auto" />
            </div>
          ))}
        </div>

        <div className='text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6'>
          What you can achieve with BigCommerce.
        </div>

        <div className="h-[40px]"></div>
        <hr className="border-t border-gray-300" />

      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-white w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png"].map((src, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <Image src={`/${src}`} alt="feature" width={200} height={100} className="h-auto" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {index === 0 ? "Grow revenue faster." : index === 1 ? "Convert more shoppers." : index === 2 ? "Save on rates." : index === 3 ? "Build your way." : index === 4 ? "Boost B2B sales." : "Access reliable support."}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {index === 0 ? "Powerful built-in tools accelerate your ecommerce growth." :
                    index === 1 ? "An industry-leading checkout turns visitors into customers." :
                      index === 2 ? "Preferred payment providers offer competitive rates — no additional fees." :
                        index === 3 ? "Platform flexibility means you have the freedom to customize." :
                          index === 4 ? "Robust B2B features ensure you can scale online sales." :
                            "24x7 live, US-based support solves any ecommerce challenge."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
