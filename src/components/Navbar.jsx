import React, { useEffect, useState } from 'react';
import logo from "../assets/landingPage/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ co, onNavItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("co", co);
  }, [co]);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`bg-[#${co}] flex justify-between p-[1rem] pr-[2.5rem] pl-[2.5rem] box-border items-center`}>
        <img src={logo} className="w-[250px] m-0" alt="Logo" />
        <ul className="flex gap-10 items-center justify-center text-white max-xl:hidden">
          <li className="cursor-pointer relative group" onClick={() => onNavItemClick('hero-section')}>
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group" onClick={() => onNavItemClick('how-it-works-section')}>
            How it Works
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Contact us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <ul className="flex items-center justify-center text-white gap-3 max-xl:hidden">
          <li className="cursor-pointer relative group">
            Login
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Sign up
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <GiHamburgerMenu 
          size={30} 
          style={{ color: "white" }} 
          className="xl:hidden cursor-pointer" 
          onClick={toggleSlider} 
        />
      </nav>
      <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64`}>
        <button onClick={toggleSlider} className="text-right p-4 text-2xl">×</button>
        <ul className="flex flex-col gap-4 p-4">
          <li className="cursor-pointer relative group" onClick={() => onNavItemClick('hero-section')}>
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group" onClick={() => onNavItemClick('how-it-works-section')}>
            How it Works
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Contact us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Login
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            Sign up
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
