import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const Content2 = () => {
  return (
    <div className="mt-30 flex flex-col md:flex-row items-center bg-[#f2f3f8] rounded-lg overflow-hidden max-w-6xl mx-auto">
   
    <div className="w-full md:w-2/5 p-4">
      <Image 
        src="/last.png" 
        alt="BigCommerce Coach" 
        width={400} 
        height={280}
        className="w-full h-auto object-contain"
      />
    </div>
  
    
    <div className="w-full md:w-3/5 p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 leading-snug">
        Sell more, faster with help from a BigCommerce Coach.
      </h1>
      
      <p className="text-gray-700">
        Launch Coaches provide expert guidance on how to set up your BigCommerce store — new customers on annual Pro or Plus plans can save 50% on this service.
      </p>
  
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Button className="bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors">
          SIGN UP NOW
        </Button>
        <Button variant="outline" className="px-4 py-2 text-sm rounded-md border-gray-900 hover:bg-gray-100 transition-colors">
          LEARN MORE →
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Content2
