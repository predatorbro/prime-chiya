import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-[var(--primary)] bg-[url('/img/broken_noise.png')] text-white pt-16 pb-8 w-full">
      <div className=" max-w-7xl  mx-auto px-6 flex md:justify-between md:flex-row items-center md:items-start flex-col gap-8">
        {/* Left Section */}
        <div className="space-y-2">
          <div className="text-2xl font-semibold">
            <a href="#hero" className="text-2xl font-bold  font-serif italic text-[var(--primary)]">
              Prime Chiya
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <h1 className="text-lg  mb-4">More</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#menu" className="hover:underline">Menu</a>
            </li> 
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <h1 className="text-lg  mb-4 text-center">Social Links</h1>
          <div className="flex justify-end space-x-6 text-lg">
            <a target="_blank" href="https://facebook.com/predatorbro"><i className="fa-brands fa-facebook"></i></a>
            <a target="_blank" href="https://wa.me/qr/ITMSCTVDCRWCE1"><i
              className="fa-brands fa-whatsapp"></i></a>
            <a target="_blank" href="https://www.instagram.com/primechiya_official/"><i
              className="fa-brands fa-instagram"></i></a> 

          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <div className=" max-w-7xl mx-auto my-6 px-4">
        <hr className="border-white" />
      </div>

      {/* Footer Notice */}
      <div className="text-center text-sm text-white">
        &copy; 2025 <a href="/">PrasadBhai</a> | All rights reserved !
      </div>
    </footer>
  );
};

export default Footer;
