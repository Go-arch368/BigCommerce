import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
const Content4 = () => {
  return (
    <div>
    <div className='flex justify-center items-center mt-20'>
      <h1 className='text-3xl font-bold'>Find a partner to bring your vision to life.</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mt-20">
  {/* Card 1 */}
  <Card className="p-8 hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <Image 
          src='/card1.png' 
          alt='Agency partners illustration' 
          width={180} 
          height={60}
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Request a quote from one of our agency partners.
      </h1>
      <p className="text-gray-600 mb-6 flex-grow">
  They&apos;re the experts — so you don&apos;t have to be. Our partners have deep proficiency with BigCommerce, and many are certified in specialized topics for even greater ecommerce expertise.
</p>
      <div className="mt-auto">
        <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  </Card>

  {/* Card 2 */}
  <Card className="p-8 hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <Image 
          src='/card2.png' 
          alt='Upwork freelancers illustration' 
          width={180} 
          height={60}
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Hire talented and hand-picked freelancers through Upwork.
      </h1>
      <p className="text-gray-600 mb-6 flex-grow">
        Simplify the process of designing and building your store by working with verified freelancers with knowledge of the BigCommerce platform.
      </p>
      <div className="mt-auto">
        <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  </Card>
</div>

    </div>
  )
}

export default Content4
