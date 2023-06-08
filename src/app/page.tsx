"use client";

import Navbar from "./components/NavBar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-max-[100%] scroll-smooth scrollbar scrollbar-thumb-white scrollbar-track-gray-100">
      <div id="gray">
        <Navbar />
        <Landing />
        <div className="w-full h-[100px] bg-white">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            overflow="visible"
            className="w-full h-[100%]"
          >
            <polygon points="0,100 100,0 0,0" className="fill-[#22272e]" />
          </svg>
        </div>
      </div>
      <div className="bg-white w-full h-screen">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
