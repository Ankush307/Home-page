import React from 'react'

const CommonHeading = ({HeroHeading , HeroBlackHeading}) => {
  return (
    <div>
        <div>
            <p className='lg:text-[60px] md:text-5xl  text-4xl leading-[120%] font-bold text-white text-center mb-5 max-w-[768px] mx-auto'>{HeroHeading} <span className='text-black'>{HeroBlackHeading}</span> </p>
        </div>
    </div>
  )
}

export default CommonHeading