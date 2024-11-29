import React from 'react'

const CommonPara = ({ HeroText , HeroBlackText}) => {
    return (
        <div>
            <p className='leading-[140%] font-medium opacity-[70%] text-white text-center'>{HeroText} <span className='text-black'> {HeroBlackText} </span> </p>
        </div>
    )
}

export default CommonPara