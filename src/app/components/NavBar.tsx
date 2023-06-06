'use client'

import { useState, useEffect, useRef } from "react";
import { BiCodeCurly } from 'react-icons/bi';
import { animate, motion, useAnimationControls } from "framer-motion"
import { IoMdArrowDropup } from "react-icons/io"

function Navbar() {
    const controls = useAnimationControls();
  

    const sequence = async () => {
      await controls.start({ scale: 0.8, transition: { duration: 0.5 } });
      return await controls.start({ scale: 1, transition: { duration: 0.5 } });
    };
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu element
  return (
    <motion.div animate={{ y: [-100, 0] }}
    transition={{ ease: "easeIn", duration: 1 }} className="h-1/2 w-[100%] bg-[#22272e]">
      <div>
        <nav className="w-full bg-[#22272e] shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <motion.div whileHover={{ scale: 1.2, y: -10 }} className='flex flex-row'>
                  <a href="#" className='flex'>
                    <BiCodeCurly size={30} /><span className='flex pl-3 text-2xl text-white font-bold'>CODENERDS</span>
                  </a>
                </motion.div>
                <div className="md:hidden">
                <motion.button whileTap={{ rotate: 180 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="arrow" style={{ transformOrigin: "50% 55%", fill: "white"}}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
                </div>
              </div>
            </div>
            <div>
              <div
                ref={menuRef} // Assign the ref to the menu element
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white hover:scale-105 hover:drop-shadow-2xl hover:bg-white hover:text-black hover:font-medium px-2 rounded-xl transition">
                    <a href='#'>About Us</a>
                  </li>
                  <li className="text-white hover:scale-105 hover:drop-shadow-2xl hover:bg-white hover:text-black hover:font-medium px-2 rounded-xl transition">
                    <a href="#Projects" className="scroll-smooth">Projects</a>
                  </li>
                  <li className="text-white hover:scale-105 hover:drop-shadow-2xl hover:bg-white hover:text-black hover:font-medium px-2 rounded-xl transition">
                    <a>Pricing</a>
                  </li>
                  <li className="text-white hover:scale-105 hover:drop-shadow-2xl hover:bg-white hover:text-black hover:font-medium px-2 rounded-xl transition">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

export default Navbar;