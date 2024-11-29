import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARDS_DATA } from '../common/Helper';
import SubHeading from '../common/SubHeading';
import PrevArrow from '../common/icons.svg/prev-arrow.svg'
import NextArrow from '../common/icons.svg/next-arrow.svg'

const CustomSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        appendDots: buttons => (
            <div>
                <div className="flex justify-center gap-4 mb-[-50px]">
                    <button onClick={() => sliderRef?.slickPrev()} className='hover:scale-[1.3] transition-all duration-300 ease-linear'>
                        <img src={PrevArrow} alt="prev arrow" /> </button>
                    <button onClick={() => sliderRef?.slickNext()} className='hover:scale-[1.3] transition-all duration-300 ease-linear'>
                        <img src={NextArrow} alt="next arrow" /></button>
                </div>
            </div>
        ),
    };
    let sliderRef = null;
    return (
        <div className="min-h-screen items-center justify-center flex flex-col">
            <div className="container mx-auto max-w-[1180px] max-lg:px-8">
                <SubHeading Subheadings={'Lorem ipsum'} />
                <Slider {...settings} ref={slider => (sliderRef = slider)}>
                    {CARDS_DATA.map((data, i) => (
                        <div key={i} >
                            <div className="bg-[#FFF3ED] p-5 rounded-lg shadow-md max-w-[365px] mx-auto">
                                <img src={data.imgSrc} alt="card img" className="mb-8 rounded-lg max-w-[60px]" />
                                <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                                <p className="text-lg font-light text-[#101010] leading-[150%]">
                                    {data.para}{" "} <span className="flex cursor-pointer font-semibold text-[#FF5501]">
                                        Read more  </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CustomSlider;
