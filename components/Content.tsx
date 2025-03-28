import React from 'react';
import { Card } from './ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import Image from 'next/image';

const Content = () => {
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="bg-[#f0f1f6] rounded-lg p-8 sm:p-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center mb-8">
            A high-performance platform that <br className="hidden sm:block" /> 
            scales with you.
          </h2>
          
          {/* Card 1 - CREATE */}
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl mb-8 w-full max-w-6xl mx-auto">
            {/* White Content Side */}
            <div className="md:w-1/2 p-10 md:p-14 space-y-8 bg-white">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">CREATE</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    Design a website that converts.
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Drag-and-drop Page Builder</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Customizable themes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Built-in mobile responsiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Seamless Wordpress connection</span>
                  </li>
                </ul>

                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-4">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Teal Image Side */}
            <div className="md:w-1/2 relative min-h-[400px] bg-[#cce6e5]">
              <div className="absolute right-0 h-full w-[90%]">
                <Image 
                  src="/image1.png" 
                  alt="Website builder interface"
                  fill
                  className="object-contain object-right"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Card>

          {/* Card 2 - CONVERT */}
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl mb-8 w-full max-w-6xl mx-auto">
            {/* Image Side (Left) */}
            <div className="md:w-1/2 relative min-h-[400px] bg-white">
              <Image 
                src="/image2.png" 
                alt="Shipping and checkout interface"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Side (Right) */}
            <div className="md:w-1/2 p-10 md:p-14 space-y-8 bg-white">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">CONVERT</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-4">
                  Fully customize your checkout.
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Optimized one-page checkout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Preferred payment partners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Digital wallets & BNPL solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Passwordless one-click checkout</span>
                  </li>
                </ul>

                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-6">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>

          {/* Card 3 - MARKET */}
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl mb-8 w-full max-w-6xl mx-auto">
            {/* White Content Side */}
            <div className="md:w-1/2 p-10 md:p-14 space-y-8 bg-white">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">MARKET</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    Attract more shoppers.
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Sell on social media channels, like Meta and TikTok</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Advertise on platforms like Google Shopping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Place products on marketplaces, like Amazon and Walmart</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Maximize site traffic with powerful SEO tools</span>
                  </li>
                </ul>

                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-4">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 relative min-h-[400px] bg-white">
              <Image 
                src="/image3.png" 
                alt="Marketing interface"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Card>

          {/* Card 4 - GROW */}
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl mb-8 w-full max-w-6xl mx-auto">
            {/* Image Side (Left) */}
            <div className="md:w-1/2 relative min-h-[400px] bg-white">
              <Image 
                src="/image4.png" 
                alt="Growth interface"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Side (Right) */}
            <div className="md:w-1/2 p-10 md:p-14 space-y-8 bg-white">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">GROW</h2>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-4">
                  Expand your brand.
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Sell B2B and wholesale with features like customer groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Manage multiple sites with Multi-Storefront</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Connect offline and online with Buy Online, Pick Up in Store</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Quickly spin up a new brand with the same back-end</span>
                  </li>
                </ul>

                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-6">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>

          {/* Card 5 - OPERATE */}
          <Card className="flex flex-col md:flex-row overflow-hidden rounded-xl mb-8 w-full max-w-6xl mx-auto">
            {/* White Content Side */}
            <div className="md:w-1/2 p-10 md:p-14 space-y-8 bg-white">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">OPERATE</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    Operate more efficiently.
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Best-in-class 99.99% uptime</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">100% uptime during Cyber Week 10 years in a row</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Lower total cost of ownership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multiple Tier 1 security compliance including ISO, PCI, SOC, GDPR, and CCPA</span>
                  </li>
                </ul>

                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-4">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 relative min-h-[400px] bg-white">
              <Image 
                src="/image5.png" 
                alt="Operations interface"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Card>


          <h1 className='flex justify-center items-center text-2xl'>BigCommerce is rated the best ecommerce platform by the experts.</h1>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 my-8">
  {/* Card 1 */}
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto min-w-[200px] max-w-[280px]">
    <div className="mb-4 p-3 bg-gray-50 rounded-full">
      <Image src="/g1.png" alt="Trust Radius logo" width={30} height={30} />
    </div>
    <h1 className="text-xl font-bold text-gray-800 mb-1">Trust Radius</h1>
    <p className="text-gray-600 text-center">Top-rated in ecommerce</p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto min-w-[200px] max-w-[280px]">
    <div className="mb-4 p-3 bg-gray-50 rounded-full">
      <Image src="/g2.png" alt="G2 logo" width={30} height={30} />
    </div>
    <h1 className="text-xl font-bold text-gray-800 mb-1">G2</h1>
    <p className="text-gray-600 text-center">Top-rated for B2B SMBs</p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto min-w-[200px] max-w-[280px]">
    <div className="mb-4 p-3 bg-gray-50 rounded-full">
      <Image src="/g3.png" alt="ecommerceCEO logo" width={30} height={30} />
    </div>
    <h1 className="text-xl font-bold text-gray-800 mb-1">ecommerceCEO</h1>
    <p className="text-gray-600 text-center">Top-rated in ecommerce platform</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Content;