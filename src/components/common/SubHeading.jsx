import React from 'react'

const SubHeading = ({Subheadings , BlackSubHeading}) => {
    return (
        <div>
            <p className='leading-[140%] font-semibold text-[40px] mb-5 text-center'>{Subheadings} <span className='text-black !mb-5'> {BlackSubHeading} </span> </p>
        </div>
    )
}

export default SubHeading