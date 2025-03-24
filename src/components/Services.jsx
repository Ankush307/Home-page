import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SERVICES_LIST } from "../utils/helper";

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="lg:pt-[50px] sm:pt-20 sm:pb-[62px] pt-[30px] pb-[30px] max-w-[1920px] mx-auto relative min-h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-[1140px]">
                <div className="max-xl:px-[30px] max-sm:px-4">
                    <p className="sm:text-tiny-5xl text-[32px] leading-[121%] sm:pt-6 md:pb-10 pb-6 font-bold max-lg:max-w-[465px] text-dark-black">Dynamic Image Carousel with Swiper</p>
                </div>
                <div className="max-xl:pl-[30px] max-sm:pl-4">
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            320: { slidesPerView: 1.6 },
                            450: { slidesPerView: 2 },
                            580: { slidesPerView: 2.5 },
                            640: { slidesPerView: 2.6 },
                            700: { slidesPerView: 3.2 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        onSlideChange={(swiper) => {
                            { setActiveIndex(swiper.realIndex); }
                        }}>
                        {SERVICES_LIST.map((item, index) => (
                            <SwiperSlide key={index} className="w-[209px]">
                                <div className="relative cursor-pointer overflow-hidden w-[209px]" onClick={() => setActiveIndex(index)}>
                                    <div className={`absolute top-0 left-0 w-full h-full text-white py-6 px-4 bg-black/50 transition-all duration-300 ease-linear flex flex-col justify-between ${activeIndex === index ? "translate-y-[0%]" : "translate-y-[-105%]"}`}>
                                        <div>
                                            <p>{item.number}</p>
                                            <p className="font-bold text-2xl">{item.title}</p>
                                        </div>
                                        <p className="text-sm max-w-[160px]">{item.description}</p>
                                    </div>
                                    <img className="h-[300px] w-[209px] object-cover" src={item.cardImg} alt="services img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="max-xl:px-[30px] max-sm:px-4 max-w-[1122px]">
                    <div className="flex md:pt-[52px] sm:pt-[42px] pt-[44px] md:gap-5 max-[700px]:flex-col items-center max-[700px]:justify-center min-[700px]:justify-between md:justify-start relative">
                        <div className="absolute sm:border-t-[5px] border-t-[3px] border-t-gray-500 w-full md:top-[52px] top-[42px] left-0"></div>
                        <div className="absolute sm:border-b-[5px] border-b-[3px] border-b-gray-500 max-[700px]:hidden w-full md:top-[52px] bottom-[0px] left-0"></div>
                        <div className="max-md:max-w-[580px] flex items-center justify-center max-h-[282px] relative w-full">
                            <div className="min-[1083px]:!py-[66px] min-[873px]:!py-[46px] md:py-7 sm:py-12 py-6 w-full">
                                <p className="md:text-2xl sm:text-xl md:max-w-[674px] sm:max-w-[397px] max-w-[323px] leading-158"> {SERVICES_LIST[activeIndex].descriptionTwo}{" "}</p>
                            </div>
                            <div className="border-b-[3px] border-b-gray-500 w-full absolute bottom-0 min-[700px]:hidden"></div>
                        </div>
                        <div className="h-full relative z-[1]">
                            <div className="flex gap-4 items-center">
                                <img className="lg:w-[700px] md:w-[432px] min-[700px]:w-[377px] max-sm:h-[274px] max-sm:w-[343px] h-[290px] object-cover" src={SERVICES_LIST[activeIndex].cardImg} alt="services img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;