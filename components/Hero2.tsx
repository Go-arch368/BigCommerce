import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero2 = () => {
  return (
    <div>

      <div className='bg-white h-20  flex items-center justify-between px-12'>
    
        <div className='flex items-center space-x-12'>
          <Image src="/data.png" alt="logo" width={120} height={120} className='ml-4' />
          <h1 className='cursor-pointer hover:text-blue-600 font-semibold text-lg'>Features</h1>
          <h1 className='cursor-pointer hover:text-blue-600 font-semibold text-lg'>Resources</h1>
          <h1 className='cursor-pointer hover:text-blue-600 font-semibold text-lg'>Pricing</h1>
        </div>
        
        {/* Right-aligned button */}
        <div className='mr-6'>
          <Button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold text-md'>
            GET STARTED
          </Button>
        </div>
      </div>

      {/* Full-width blue banner */}
      <div className="w-full bg-[#003d9a] text-center py-4 px-6">
      <div className="max-w-6xl mx-auto">
    <p className="text-white text-lg md:text-xl">
      <span className="font-bold">60 days free - Limited time offer.</span>{' '}
      <span>Get two months free on annual Pro or Plus plans</span>
    </p>
  </div>
</div>
    </div>
  )
}

export default Hero2