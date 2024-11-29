import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1E1E1E] rounded-t-[22px] '>
      <div className="container px-3 mx-auto pt-[78px] pb-[61px]">
        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-1/2">
            <p className='text-[38px] font-bold text-[#FF5501] '>Logo <span className='text-white'>Here</span></p>
            <p className='opacity-[70%] text-white max-w-[431px]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
          </div>
          <div className="w-1/2">
            <div className="w-full flex flex-wrap">
              <div className="w-1/2 text-white">
                <p className='text-lg font-semibold mb-6'>About website</p>
                <p className='mb-4 opacity-[70%]'>Home</p>
                <p className='mb-4 opacity-[70%]'>How It Works</p>
                <p className='mb-4 opacity-[70%]'>Testimonials</p>
                <p className='mb-4 opacity-[70%]'>Why Choose Us</p>
              </div>
              <div className="w-1/2 text-white">
                <p className='text-lg font-semibold mb-6'>Follow links</p>
                <p className='mb-4 opacity-[70%]'>Instagram</p>
                <p className='mb-4 opacity-[70%]'>Twitter</p>
                <p className='mb-4 opacity-[70%]'>Discord</p>
                <p className='mb-4 opacity-[70%]'>You Tube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#787878]"></div>
      <div className="container mx-auto">
        <p className='opacity-[70%] text-white text-center py-6'>Copyright©2024 (Logo) All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer