import React, { useState } from "react";
import Slider from "react-slick";
import homeimage from "../assets/images/homeimage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import footer from "../assets/images/footer.png";
import { Link, useLocation } from "react-router-dom";

const Carousel = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [homeimage, homeimage, homeimage];

  const [activeLink, setActiveLink] = useState("");

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink("");
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="relative w-full lg:h-screen overflow-x-hidden">
      <nav className="absolute w-full bg-transparent z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={footer} className="h-14" alt="Flowbite Logo" />
          </Link>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isNavbarVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${
              isNavbarVisible ? "block" : "hidden"
            } md:hidden`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col items-center p-2 mt-2 rounded-lg bg-white text-gray-800">
              <li
                onMouseEnter={() => handleMouseEnter("/home-one")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/home-one"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/home-one"
                      ? "text-[#0060B8]"
                      : "text-gray-500"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/about-us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/about-us"
                      ? "text-[#0060B8]"
                      : "text-gray-500"
                  }`}
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/services"
                      ? "text-[#0060B8]"
                      : "text-gray-500"
                  }`}
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/projects")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/projects"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/projects"
                      ? "text-[#0060B8]"
                      : "text-gray-500"
                  }`}
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/contact-us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/contact-us"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/contact-us"
                      ? "text-[#0060B8]"
                      : "text-gray-500"
                  }`}
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`w-full md:block md:w-auto hidden md:flex md:space-x-8`}
          >
            <ul className="font-medium flex flex-row md:space-x-8 rtl:space-x-reverse text-white">
              <li
                onMouseEnter={() => handleMouseEnter("/home-one")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/home-one"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/home-one"
                      ? "text-[#0060B8]"
                      : "text-[#0060B8]"
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/about-us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/about-us" ? "text-[#0060B8]" : "text-white"
                  }`}
                  aria-current="page"
                >
                  About-us
                </Link>
              </li>
              {/* <li
                onMouseEnter={() => handleMouseEnter("/services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/services" ? "text-[#0060B8]" : "text-white"
                  }`}
                  aria-current="page"
                >
                  Services
                </Link>
              </li> */}
              <li
                onMouseEnter={() => handleMouseEnter("/services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/services" ? "text-[#0060B8]" : "text-white"
                  }`}
                  aria-current="page"
                >
                  S.O.A
                </Link>
              </li>

              <li
                onMouseEnter={() => handleMouseEnter("/projects")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/projects"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/projects" ? "text-[#0060B8]" : "text-white"
                  }`}
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/products"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/products" ? "text-[#0060B8]" : "text-white"
                  }`}
                  aria-current="page"
                >
                  Products
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/photoAlbum")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/photoAlbum"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/photoAlbum"
                      ? "text-[#0060B8]"
                      : "text-white"
                  }`}
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("/contact-us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/contact-us"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "/contact-us"
                      ? "text-[#0060B8]"
                      : "text-white"
                  }`}
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
          <h1 className="text-6xl font-bold mt-2 text-white">
            Fiza Engineering
          </h1>
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
            <button className="bg-blue-700 text-white py-2 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
