import React from 'react'
import { useLocation } from 'react-router-dom';
function Footer() {
    const location = useLocation().pathname;
    return (
        <div className={`${location === "/"
            ? "pt-[78px] max-lg:pt-12 max-md:pt-6 bg-[#1E1E1E] flex-col rounded-t-[30px]"
            : "pt-[78px] max-lg:pt-12 max-md:pt-6 bg-[#002B43]"
            }`}>
            <div className='flex max-w-[1140px] mx-auto flex-wrap max-lg:gap-10'>
                <div className='w-1/2 max-lg:w-full'>
                    <p className=  {`${location === "/"
                        ? "text-[38px] text-[#FF5501] font-bold  max-xl:text-center"
                        : "text-[38px] text-[#007AFF] font-bold max-xl:text-center"
                        }`}>Logo <span className='text-white'>Here</span></p>
                    <p className='max-lg:text-center max-md:mx-auto max-w-[431px] opacity-70 mt-4 text-white'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                </div>
                <div className='w-1/2 flex max-lg:w-full'>
                    <div className='w-1/2 text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col'>
                        <p className='text-lg font-semibold'>About website</p>
                        <div className='flex flex-col gap-4 mt-6 text-white opacity-70'>
                            <a href="">Home</a>
                            <a href="">How It Works</a>
                            <a href="">Testimonials</a>
                            <a href="">Why Choose Us</a>
                        </div>
                    </div>
                    <div className='w-1/2 text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col'>
                        <p className='text-lg font-semibold'>About website</p>
                        <div className='flex flex-col gap-4 mt-6 opacity-70'>
                            <a href="">Instagram</a>
                            <a href="">Twitter</a>
                            <a href="">Discord</a>
                            <a href="">You Tube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-white opacity-40 mt-14'></div>
            <p className='text-center py-6 text-white opacity-70'>Copyright©2024 (Logo) All Rights Reserved.</p>
        </div>
    )
}

export default Footer