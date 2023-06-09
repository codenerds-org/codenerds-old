import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const slides = [
    {
      name: "Wazonowo.net",
      gurl: "https://github.com/Style77/wazonowo.net",
      url: "https://github.com/Style77/wazonowo.net/raw/main/img_3.png",
    },
    {
      name: "Velluci",
      gurl: "https://github.com/codenerds-org/velluci",
      url: "https://media.discordapp.net/attachments/1115753924033523783/1116438360249094154/image.png?width=1245&height=671",
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
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="flex flex-col w-full group h-screen py-16 px-4 bg-white justify-center items-center"
      id="Projects"
    >
      <motion.h1
        animate={{ y: [-100, 0] }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex text-gray-700 font-bold text-4xl md:text-6xl mb-5"
      >
        Our Projects
      </motion.h1>
      <motion.div
        ref={ref}
        id="aProjects"
        variants={boxVariant}
        animate={controls}
        initial="hidden"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="flex w-full md:w-2/3 h-2/3 md:h-full rounded-2xl justify-center items-end overflow-hidden bg-no-repeat bg-cover"
      >
        <div className="flex text-center h-1/6 w-full bg-black bg-opacity-50 z-0">
          <div className="flex justify-start w-full items-center px-3 z-1">
            <div className="flex hidden group-hover:block align-start items-start justify-start text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
          </div>
          <div className="flex flex-row text-center items-center !opacity-100  h-1/3">
            <h1 className="flex font-light mx-2 w-full text-white text-2xl text-white">
              {slides[currentIndex].name}
            </h1>
            <motion.a
              href={slides[currentIndex].gurl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition"
            >
              <BsBoxArrowUpRight size={17} />
            </motion.a>
          </div>
          <div className="flex justify-end w-full items-center px-3 z-1">
            <div className="flex hidden group-hover:block right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
