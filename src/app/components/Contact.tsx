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
import Anims from "../anims/Anims"


function Contact() {
  return (
    <div className='flex flex-col w-[100%] h-[40rem] justify-center items-center'>
        <h1 className='flex text-white my-5 font-bold text-4xl md:text-6xl mb-5'>Contact Us!</h1>
        <div className='flex h-5/6 w-2/6 text-center rounded-xl bg-[#FEFEFE] border border-zinc-700 shadow-xl py-5 px-8'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col mb-12'>
                    <h1 className='flex w-full h-min text-gray-700 font-medium text-2xl justify-start '>Do you want to work with us?</h1>
                    <h2 className='flex w-full h-min text-gray-700 font-light text-base'>Every client is very important htmlFor us.</h2>
                </div>
                    <div className='flex flex-col w-2/3 h-full'>
                    <form>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-start text-sm text-gray-500 dark:text-gray-400 duration-300 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform left-0 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                                <textarea id="floating_msg" rows={4} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                                <label htmlFor="floating_msg" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform left-0 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                    </div>
                </div>
                <div className='flex align-center justify-center items-center w-1/3'>
                <Anims />
                </div>
            </div>
        </div>
  );
}

export default Contact;