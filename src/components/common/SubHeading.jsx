import React from 'react'

const SubHeading = ({Subheadings , BlackSubHeading , BlueSubHeading}) => {
    return (
        <div>
            <p className='leading-[140%] font-semibold text-[40px] mb-5 text-center'>{Subheadings} <span className='text-black !mb-5'> {BlackSubHeading} </span> <span className='text-[#43BBFF] '> {BlueSubHeading} </span> </p>
        </div>
    )
}

export default SubHeading