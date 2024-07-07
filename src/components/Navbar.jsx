import React, { useState } from 'react';
import logo from "../assets/landingPage/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between p-[1rem] pr-[2.5rem] pl-[2.5rem] box-border items-center">
        <img src={logo} className="w-[250px] m-0" alt="Logo" />
        <ul className="flex gap-10 items-center justify-center text-white max-xl:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">How it Works</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
        <ul className="flex items-center justify-center text-white gap-3 max-xl:hidden">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Sign up</li>
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
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">How it Works</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact us</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Sign up</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
