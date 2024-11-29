import React from 'react'
import CommonHeading from './CommonHeading'
import CommonPara from './CommonPara'
import SearchIcon from '../common/icons.svg/search-icon.svg'

const Hero = () => {
  return (
    <div className='bg-[#EF6443] min-h-screen flex items-center justify-center'>
      <div className="container max-w-[1140px] mx-auto px-3">
        <CommonHeading HeroHeading={'Lorem ipsum dolor sit amet consectetur. Sceleris'} />
        <CommonPara HeroText={'Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.'} />
        <form action="" className='flex items-center justify-between bg-white pl-[15px] pr-1 py-[3px] rounded-[15px] border-[1px] border-[#C8C8C8] max-w-[435px] mx-auto mt-[40px]'>
          <img src={SearchIcon} alt="Search Icon" />
          <input className='bg-transparent w-full outline-none px-5' type="email" placeholder='Search' name='email' required />
          <button className='bg-[#FF722C] font-semibold !tracking-[2%] px-[27px] py-[14px] rounded-[13px] text-white'>Start</button>
        </form>
      </div>
    </div>
  )
}

export default Hero