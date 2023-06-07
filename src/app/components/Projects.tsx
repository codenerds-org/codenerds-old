import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

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

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
     className='flex flex-col w-[100%] group h-screen py-16 px-4 bg-white justify-center items-center' id='Projects'>
      <motion.h1
      animate={{ y: [-100, 0] }}
      transition={{ ease: "easeIn", duration: 1 }}
       className='flex text-gray-700 font-bold text-4xl md:text-6xl mb-5'>Our Projects</motion.h1>
      <motion.div
        ref={ref}
        id='aProjects'
        variants={boxVariant}
        animate={controls}
        initial="hidden"
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
    </section>
  );
}

export default Projects;