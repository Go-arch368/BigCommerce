import Image from 'next/image'
const Content3 = () => {
    return (
        <div className="flex justify-center items-center mt-[60px]">
        <div className='bg-black text-white rounded-3xl w-full max-w-[1200px] py-12 px-6 flex flex-col justify-center items-center'>
         
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Make it Big.</h1>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            <div className="flex flex-col items-center">
              <div className="mb-8 w-full max-w-[400px]">
                <Image 
                  src="/black.png" 
                  alt="The Beer Bat store"
                  width={500}
                  height={350}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-4">+115%</p>
                <p className="text-xl text-gray-300 mb-6">increase in revenue</p>
                <p className="text-lg italic text-white">The Beer Bat</p>
              </div>
            </div>
      
           
            <div className="flex flex-col items-center">
              <div className="mb-8 w-full max-w-[400px]">
                <Image 
                  src="/black2.png" 
                  alt="Moore Brothers Wine Company"
                  width={500}
                  height={350}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-4">+28%</p>
                <p className="text-xl text-gray-300 mb-6">increase in conversion</p>
                <p className="text-lg italic text-white">Moore Brothers Wine Company</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    )
  }

  export default Content3