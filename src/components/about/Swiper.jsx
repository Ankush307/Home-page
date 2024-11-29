import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SubHeading from '../common/SubHeading';
import CommonPara from '../common/CommonPara';
import 'swiper/css/pagination';
import { SWIPER_DATA } from '../common/Helper';
const Swiper = () => {
  return (
    <div className=' flex items-center justify-center py-[60px] md:pt-[140px] md:pb-[78px]'>
      <div className="container mx-auto max-w-[1140px] px-4">
        <SubHeading BlackSubHeading={'Lorem ipsum dolor sit amet'} />
        <div className="md:mb-[45px] mb-4">
          <CommonPara HeroBlackText={'Lorem ipsum dolor sit amet consectetur. Amet varius in enim.'} /></div>
        <div className="max-lg:px-14">
          <SwiperReact
            slidesPerView={4}
            center={true}
            spaceBetween={10}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {SWIPER_DATA.map((data, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="max-w-[267px] relative overflow-hidden">
                    <img src={data.imgSrc} alt="card img" />
                    <div className="backdrop-blur-[2px] absolute top-[70%] w-full rounded-b-[17px] p-3 border-t-[.2px] border-white mx-auto">
                      <h1 className='text-lg font-medium pb-1 text-white'>{data.Heading}</h1>
                      <p className='text-white opacity-[70%]'>{data.para}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperReact>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
