"use client";

import Anim from "../anims/Anim";
import { motion, useAnimation } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function Footer() {
  return (
    <div className="h-[12rem] w-full">
      <div className="h-px w-full bg-zinc-600 mt-10 shadow-xl drop-shadow-2xl"></div>
      <div className="flex flex-col items-center">
        <h1 className="flex text-5xl font-bold my-3 text-white">CODENERDS</h1>
        <div className="flex">
          <a
            href="https://www.facebook.com/dominik.krakowiak.526/"
            className="pr-5 hover:scale-125 transition"
          >
            <BsFacebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/joachim-hodana-33815b245/"
            className="pr-5 hover:scale-125 transition"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://github.com/codenerds-org/codenerds"
            className="pr-5 hover:scale-125 transition"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="mailto:contact@codenerds.tech"
            className="hover:scale-125 transition"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
        <div className="flex">
          <div className="flex">
            <a
              href="#About"
              className="px-3 py-3 text-sm font-light text-zinc-400 hover:scale-125 transition"
            >
              About Us
            </a>
            <a
              href="#Projects"
              className="px-3 py-3 text-sm font-light text-zinc-400 hover:scale-125 transition"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="px-3 py-3 text-sm font-light text-zinc-400 hover:scale-125 transition"
            >
              Contact
            </a>
          </div>
        </div>
        <h1 className="text-sm font-bold text-zinc-400 mb-3">
          © Copyright 2023 - Codenerds.tech 🤓
        </h1>
      </div>
    </div>
  );
}

export default Footer;
