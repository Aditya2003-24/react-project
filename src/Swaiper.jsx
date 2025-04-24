import React from 'react'
import "./App.css"
import image from "./IMAGES/mahindra-logo-new.webp"
import ima from "./IMAGES/lavender-7341619_1280.jpg"
import im from "./IMAGES/lighthouse-9183463_1280.jpg"


import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'


const Swaiper = () => {
   
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={im} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ima} alt="" /></SwiperSlide>
        <SwiperSlide><img src={im} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swaiper
