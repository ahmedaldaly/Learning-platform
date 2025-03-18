'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
const MySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"

  };

  return (
      <motion.div
      initial={{y:200}}
      whileInView={{y:0}}
      transition={{duration:0.5}}
      >
    <Slider {...settings}  className="w-[70%] max-md:mt-[-50px] mb-10 max-md:w-[80%] mx-auto mt-[-100px] rounded-3xl">
      
        <img src="/1.png" alt="image" className='rounded-3xl'/>
     
      
       <img src="/2.png" alt="image"className='rounded-3xl' />
      
      
    </Slider>
    </motion.div>
  );
};

export default MySlider;