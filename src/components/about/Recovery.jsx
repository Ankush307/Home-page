import { useState } from 'react';
import React from 'react'

const Recovery = () => {
    const [value, setValue] = useState(1);
    const handleClick = () => {
        setValue(value - 1);
    };
    return (
        <div>
            <h1 className="md:text-5xl font-bold md:mb-10 my-3 text-3xl">Use State</h1>
            <p className="text-xl font-bold mb-5"> {value}</p>
            <button onClick={handleClick} className='bg-black text-white py-2 px-5 rounded-lg'>Click Me</button>
        </div>
    )
}

export default Recovery