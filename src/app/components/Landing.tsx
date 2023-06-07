'use client'

import Anim from "../anims/Anim"
import { motion, useAnimation } from "framer-motion"
import { BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function Landing() {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
    <div className="h-[40rem] w-[100%]">
      <motion.div     variants={boxVariant}
      animate="visible"
      initial="hidden"
      transition={{ ease: "easeOut", duration: 1 }} className="flex flex-col md:flex-row bg-[#22272e] justify-center md:justify-between">
          <div className="flex flex-col justify-center ml-10">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome,</h1>
              <h2 className="text-xl font-thin w-[80%]">We are team of passionate engineers who turn your vision into reality. We specialize in programming and digital solutions, providing tailored services that fit your unique needs. Contact us today.</h2>
              <div className="flex flex-row px align-center justify-center w-2/3 mt-5">
              <a href="https://www.facebook.com/dominik.krakowiak.526/" className="flex pr-5 hover:scale-125 transition"><BsFacebook size={32} /></a>
                  <a href="https://www.linkedin.com/in/joachim-hodana-33815b245/" className="flex pr-5 hover:scale-125 transition"><BsLinkedin size={32}/></a>
                  <a href="https://github.com/codenerds-org/codenerds" className="flex pr-5 hover:scale-125 transition"><BsGithub size={32}/></a>
                  <a href="mailto:contact@codenerds.tech" className="flex hover:scale-125 transition"><AiOutlineMail size={32}/></a>
              </div>
          </div>
          <div className="flex mt-3 md:flex-row md:justify-center md:items-center">
              <Anim />
          </div>
      </motion.div>
    </div>
  );
}

export default Landing;