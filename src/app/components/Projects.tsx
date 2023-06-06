// import React, { useRef, useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper";


// function Projects() {
//   return (
// <div className='bg-white'>
//     <Swiper
//         dir="rtl"
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Navigation, Pagination]}
//         className="mySwiper bg-black"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion, useAnimation } from "framer-motion"


function Projects() {
  const slides = [
    {
      name: 'Wazonowo.net',
      gurl: 'https://github.com/Style77/wazonowo.net',
      url: 'https://github.com/Style77/wazonowo.net/raw/main/img_3.png',
    },
    {
      name: 'Wazonowo.net',
      gurl: 'https://github.com/Style77/wazonowo.net/raw/main/img_3.png',
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      name: 'Wazonowo.net',
      gurl: 'https://github.com/Style77/wazonowo.net/raw/main/img_3.png',
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      name: 'Wazonowo.net',
      gurl: 'https://github.com/Style77/wazonowo.net/raw/main/img_3.png',
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      name: 'Wazonowo.net',
      gurl: 'https://github.com/Style77/wazonowo.net/raw/main/img_3.png',
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
     className='flex flex-col w-[100%] group h-screen py-16 px-4 bg-white justify-center items-center'>
      <motion.h1
      animate={{ y: [-100, 0] }}
      transition={{ ease: "easeIn", duration: 1 }}
       className='flex text-gray-700 font-bold text-4xl md:text-6xl mb-5'>Our Projects</motion.h1>
      <motion.div
        id='aProjects'
        viewport={{ once: false}}
        initial={{ opacity: 0, x: 200}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ ease: "easeOut", duration: 0.2}}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='flex w-full md:w-2/3 h-2/3 md:h-full rounded-2xl justify-center items-end bg-center bg-cover duration-500'>
          <div className='flex text-center h-1/3 w-full bg-black opacity-50 z-0'>
            <div className='flex justify-start w-full items-center px-3 z-1'>
              <div className='flex hidden group-hover:block align-start items-start justify-start text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
            </div>
            <div className='flex flex-row text-center items-center !opacity-100  h-1/3'>
              <h1 className='flex font-light mx-2 w-full text-white text-2xl text-white'>{slides[currentIndex].name}</h1>
              <motion.a href={slides[currentIndex].gurl} target="_blank" rel="noopener noreferrer" className='hover:scale-125 transition'><BsBoxArrowUpRight size={17}/></motion.a>
            </div>
            <div className='flex justify-end w-[100%] items-center px-3 z-1'>
              <div className='flex hidden group-hover:block right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
}

export default Projects;