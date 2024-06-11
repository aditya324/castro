import React, { useState } from "react";
import Slider from "react-slick";
import homeimage from "../assets/images/homeimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow";
import footer from "../assets/images/footer.png"
import { Link, useLocation } from "react-router-dom";

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    homeimage, // Use the imported image
    homeimage, // Use the imported image
    homeimage, // Use the imported image
    // Add more images as needed
  ];

   // Define state to track the active link
   const [activeLink, setActiveLink] = useState('');

   // Function to handle mouse enter event
   const handleMouseEnter = (link) => {
       setActiveLink(link);
   };

   // Function to handle mouse leave event
   const handleMouseLeave = () => {
       setActiveLink('');
   };

  const location=useLocation()

  return (
    <div className="relative w-full lg:h-screen overflow-hidden">
      <nav className="absolute w-full bg-transparent z-10 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={footer} className="h-14" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span> */}
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-2 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent text-white">
            <li onMouseEnter={() => handleMouseEnter('/home-one')} onMouseLeave={handleMouseLeave}>
                <Link
                    to="/home-one"
                    className={`block py-2 px-3 text-[#0060B8] rounded md:bg-transparent md:p-0 ${activeLink === "/home-one"? "text-[#0060B8]" : "text-[#0060B8]"}`}
                    aria-current="page"
                >
                    Home
                </Link>
            </li>
            {/* Repeat for other links, updating the `to`, `onMouseEnter`, and `onMouseLeave` props accordingly */}
            <li onMouseEnter={() => handleMouseEnter('/about-us')} onMouseLeave={handleMouseLeave}>
                <Link
                    to="/about-us"
                    className={`block py-2 px-3 text-[#0060B8] rounded md:bg-transparent md:p-0 ${activeLink === "/about-us"? "text-[#0060B8]" : "text-white"}`}
                    aria-current="page"
                >
                    About-us
                </Link>
            </li>
            <li onMouseEnter={() => handleMouseEnter('/services')} onMouseLeave={handleMouseLeave}>
                <Link
                    to="/services"
                    className={`block py-2 px-3 text-[#0060B8] rounded md:bg-transparent md:p-0 ${activeLink === "/services"? "text-[#0060B8]" : "text-white"}`}
                    aria-current="page"
                >
                    Services
                </Link>
            </li>
            <li onMouseEnter={() => handleMouseEnter('/projects')} onMouseLeave={handleMouseLeave}>
                <Link
                    to="/projects"
                    className={`block py-2 px-3 text-[#0060B8] rounded md:bg-transparent md:p-0 ${activeLink === "/projects"? "text-[#0060B8]" : "text-white"}`}
                    aria-current="page"
                >
                    Projects
                </Link>
            </li>
            <li onMouseEnter={() => handleMouseEnter('/contact-us')} onMouseLeave={handleMouseLeave}>
                <Link
                    to="/contact-us"
                    className={`block py-2 px-3 text-[#0060B8] rounded md:bg-transparent md:p-0 ${activeLink === "/contact-us"? "text-[#0060B8]" : "text-white"}`}
                    aria-current="page"
                >
                    Contact-us
                </Link>
            </li>
        </ul>
          </div>
        </div>
      </nav>
      <Slider {...settings}>
  {images.map((image, index) => (
    <div key={index} className="relative">
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="h-[calc(100vh-70px)] sm:h-auto md:h-[500px] lg:w-screen lg:h-screen md:w-screen w-fit"
      />
    </div>
  ))}
</Slider>
      <div className="absolute inset-0 lg:top-28 lg:left-9 md:left-5 lg:mt-0 mt-20 text-white pointer-events-none px-6">
        <div>
          <p className="text-[#0060B8] text-2xl font-semibold">Welcome to</p>
          <h1 className="text-6xl font-bold mt-2 text-white">Fiza Engineering</h1>
          <h1 className="text-6xl font-bold mt-2 text-white">Corporation</h1>
          <p className="mt-4 mb-4">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature <br /> from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at <br />
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words <br />
            ipsum lorem.
          </p>
          <div>
            <button className="bg-blue-700 text-white py-2 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
