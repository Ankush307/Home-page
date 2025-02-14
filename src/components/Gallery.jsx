"use client";
import React, { useState } from 'react';
import { IMAGES_LIST } from '../utils/helper';

const Gallery = () => {
    const [clickedImage, setClickedImage] = useState();

    return (
        <div className='container mx-auto min-h-screen flex flex-col items-center justify-center py-20 max-md:py-16 px-8'>
            <h2 className='md:text-4xl text-3xl font-semibold text-gray-600 sm:pb-8 pb-5'>Gallery</h2>
            <div className='grid lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-4'>
                {IMAGES_LIST.map((image, index) => (
                    <div key={index} className="max-w-[500px] overflow-hidden rounded-2xl h-full">
                        <img className='w-full rounded-2xl max-h-[500px] object-cover max-w-[500px] cursor-zoom-in hover:scale-110 transition-all duration-300 h-full' src={image.images} onClick={() => setClickedImage(image.images)} alt="img" />
                    </div>
                ))}
            </div>
            {clickedImage && (
                <div className='fixed inset-0 bg-black/90 flex justify-center items-center z-50 px-5'>
                    <div className='relative'>
                        <img className='pointer-events-none rounded-2xl object-center max-h-[500px] ' src={clickedImage} alt='image' />
                        <div className="absolute top-1 right-1 text-white font-bold p-2 bg-red-500 w-[40px] rounded-full cursor-pointer" onClick={() => setClickedImage(null)}>
                            <img src="/assets/images/cross-icon.png" alt="cross" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery