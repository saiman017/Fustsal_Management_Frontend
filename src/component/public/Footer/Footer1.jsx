import React from "react";
import FaugetImage from "../../assets/logo.png";

const Footer1 = () => {
  return (
    <footer className="bg-[#222222] bottom-0  text-gray-300 w-full  py-24">
      <div className="container mx-auto text-center">
        {/* Optional Logo and Description Section */}
        {/* 
        <div className="logo flex justify-center mb-2">
          <img className="w-60 h-[250px]" src={FaugetImage} alt="Logo image" />
        </div>
        <div className="description mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          consequuntur voluptatem quidem doloremque?
        </div> */}

        {/* Links Section */}
        <div className="links mb-12">
          <ul className="flex flex-wrap list-disc gap-y-4 gap-x-4 md:gap-x-8 justify-center text-sm mds:text-base">
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Ground
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="followUs mb-6">
          <ul className="flex justify-center space-x-6 sm:space-x-4 text-lg mds:text-xl">
            <li>
              <a href="#">
                <i className="bx bxl-facebook bg-[#3B5998] text-[#fff] p-2 rounded-full"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-instagram bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-[#fff] p-2 rounded-full"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-github bg-[#181717] text-[#fff] p-2 rounded-full"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-twitter bg-[#1DA1F2] text-[#fff] p-2 rounded-full"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="copyRight mt-6">
          <p className="text-sm mds:text-base">
            &copy; 2024 CopyRight All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
