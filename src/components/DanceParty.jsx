import React, { useState } from 'react';

const DanceParty = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleDance = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='bg-black min-h-screen flex items-center justify-center flex-col'>
            <button onClick={toggleDance} className="absolute top-10 bg-white py-2 px-6 rounded-lg font-bold text-lg shadow-lg focus:scale-110 transform transition-all duration-300 ease-in-out ">Change Dance Pose </button>
            <h1 className="text-white font-extrabold text-6xl mb-12"> DANCE PARTY!</h1>
            <div className="w-full flex items-center justify-center flex-col">
                {/* Head */}
                <div className={`rounded-2xl shadow-inner w-[80px] h-[80px] bg-white ${isActive ? 'dancer-head' : 'head'}`} />
                {/* Body */}
                <div className="rounded-2xl shadow-inner w-[20px] body h-[120px] mt-3 bg-white" />
                {/* Arms */}
                <div className="flex gap-20 w-[500px] items-center justify-center translate-y-[-100px] relative z-10">
                    <div className={`rounded-2xl w-[100px] shadow-inner h-[20px] bg-white ${isActive ? 'dancer-arm origin-right' : 'left-arm'}`} />
                    <div className={`rounded-2xl w-[100px] shadow-inner h-[20px] bg-white ${isActive ? 'dancer-arm origin-left' : 'right-arm'}`} />
                </div>
                {/* Legs */}
                <div className="flex gap-5">
                    <div className={`rounded-2xl shadow-inner w-[20px] h-[120px] bg-white ${isActive ? 'dancer-leg ' : 'left-leg'}`} />
                    <div className={`rounded-2xl shadow-inner w-[20px] h-[120px] bg-white ${isActive ? 'dancer-leg ' : 'right-leg'}`} />
                </div>
            </div>
        </div>
    );
};

export default DanceParty;
