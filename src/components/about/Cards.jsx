import React from 'react'
import { ABOUT_CARDS } from '../common/Helper'
import SubHeading from '../common/SubHeading'
const Cards = () => {
    return (
        <div className='pb-[60px]'>
            <SubHeading BlackSubHeading={'Lorem ipsum'} />
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                {ABOUT_CARDS.map((data, i) => (
                    <div key={i} >
                        <div className="bg-[#CFEEFF] p-5 rounded-[22px] shadow-md max-w-[365px] mx-auto">
                            <img src={data.imgSrc} alt="card img" className="mb-8 rounded-lg max-w-[60px]" />
                            <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                            <p className="text-lg font-light text-[#101010] leading-[150%]">
                                {data.para}{" "} <span className="flex cursor-pointer font-semibold text-[#007AFF]">
                                    Read more  </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
                {ABOUT_CARDS.map((data, i) => (
                    <div key={i} >
                        <div className="bg-[#CFEEFF] p-5 rounded-[22px] shadow-md max-w-[365px] mx-auto">
                            <img src={data.imgSrc} alt="card img" className="mb-8 rounded-lg max-w-[60px]" />
                            <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                            <p className="text-lg font-light text-[#101010] leading-[150%]">
                                {data.para}{" "} <span className="flex cursor-pointer font-semibold text-[#007AFF]">
                                    Read more  </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards