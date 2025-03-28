import React from 'react';
import Image from 'next/image';
const HomePage = () => {
  return (
<div className="bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto px-6 py-12">
    {/* Breadcrumb - Top left */}
    <div className="flex items-center text-sm mb-4">
      <span className="text-blue-700 text-bold ">Home</span>
      <span className="mx-2 text-gray-400">›</span>
      <span className="font-medium text-gray-600">Essentials</span>
    </div>

  
    <h1 className=" font-bold text-gray-900 text-center mb-12 text-sm ">
      BIGCOMMERCE ESSENTIALS
    </h1>

    
    <p className="text-5xl text-black text-center mb-8 leading-tight mt-10 font-bold ">
    Grow your brand with top-rated<br className="hidden sm:block" /> 
       commerce platform.
    </p>

   
    <div className="text-center">
      <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-md shadow-sm transition-all">
        START FREE TRIAL
      </button>
    </div>

   
    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 py-8 mt-12">
  {/* Item 1 */}
  <div className="flex flex-col items-center mx-4">
    <Image 
      src="/1.png" 
      alt="ecommerce rating" 
      width={48} 
      height={48}
      className="mb-2"
    />
    <span className="text-base font-medium text-gray-700">Top-rated in ecommerce</span>
  </div>

  {/* Divider */}
  <div className="w-px h-12 bg-gray-300"></div>

  {/* Item 2 */}
  <div className="flex flex-col items-center mx-4">
    <Image 
      src="/2.png" 
      alt="B2B rating" 
      width={48} 
      height={48}
      className="mb-2"
    />
    <span className="text-base font-medium text-gray-700">Top-rated for B2B SMBs</span>
  </div>

  {/* Divider */}
  <div className="w-px h-12 bg-gray-300"></div>

  {/* Item 3 */}
  <div className="flex flex-col items-center mx-4">
    <Image 
      src="/3.png" 
      alt="platform rating" 
      width={48} 
      height={48}
      className="mb-2"
    />
    <span className="text-base font-medium text-gray-700">Top-rated ecommerce platform</span>
  </div>
</div>

<div className="flex flex-row justify-center items-center gap-8 px-8 py-12">
  {/* Left Image */}
  <div className="flex-shrink-0">
    <Image 
      src="/4.png" 
      alt="hero" 
      width={250} 
      height={500}
      className="object-cover h-full ml-20"
    />
  </div>
  
  {/* Center Image (larger) */}
  <div className="flex-shrink-0 justify-center items-center">
    <Image 
      src="/5.png" 
      alt="hero" 
      width={600} 
      height={700}
      className="object-cover h-full "
    />
  </div>
  
  {/* Right Image */}
  <div className="flex-shrink-0">
    <Image 
      src="/6.png" 
      alt="hero" 
      width={250} 
      height={500}
      className="object-cover h-full"
    />
  </div>
</div>

<div className='text-3xl font-bold text-gray-900'>
    What you can achieve with BigCommerce.
</div>

<div>
  <div className="h-[40px]"></div>  {/* Sample content */}
  <hr className="mt-auto border-t border-gray-300" />  {/* Will stick to bottom */}
</div>

<div className="max-w-7xl mx-auto px-6 py-12 bg-white w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Item 1 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c1.png" alt="Revenue growth" width={250} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Grow revenue faster.</h3>
      <p className="text-gray-600">Powerful built-in tools accelerate your ecommerce growth.</p>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c2.png" alt="Conversion" width={200} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Convert more shoppers.</h3>
      <p className="text-gray-600">An industry-leading checkout turns visitors into customers.</p>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c3.png" alt="Payment rates" width={50} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Save on rates.</h3>
      <p className="text-gray-600">Preferred payment providers offer competitive rates — no additional fees.</p>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c4.png" alt="Customization" width={50} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Build your way.</h3>
      <p className="text-gray-600">Platform flexibility means you have the freedom to customize.</p>
    </div>

    {/* Item 5 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c5.png" alt="B2B sales" width={250} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Boost B2B sales.</h3>
      <p className="text-gray-600">Robust B2B features ensure you can scale online sales.</p>
    </div>

    {/* Item 6 */}
    <div className="flex flex-col space-y-4">
      <Image src="/c6.png" alt="Support" width={250} height={100} className="h-auto"/>
      <h3 className="text-2xl font-bold text-gray-900">Access reliable support.</h3>
      <p className="text-gray-600">24x7 live, US-based support solves any ecommerce challenge.</p>
    </div>
  </div>
</div>

  </div>
</div>
  );
};

export default HomePage;