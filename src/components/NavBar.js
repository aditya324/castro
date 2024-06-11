import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../assets/images/logoblue.png";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuElement = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const el = document.querySelector("nav");
    setTop(el.offsetTop);
    setHeight(el.offsetHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > top) {
      document.body.style.paddingTop = `${height}px`;
    } else {
      document.body.style.paddingTop = 0;
    }
  }, [scroll, top, height]);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    // <div>
    //     {/*====================  header area ====================*/}
    //     <div className={`header-area header-sticky header-sticky--default ${scroll > top ? 'is-sticky' : ''}`}>
    //         <div className="header-area__desktop header-area__desktop--default">
    //             {/*=======  header top bar  =======*/}
    //             <div className="header-top-bar">
    //                 <div className="container">
    //                     <div className="row align-items-center">
    //                         <div className="col-lg-4">
    //                             {/* top bar left */}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/*=======  End of header top bar  =======*/}
    //             {/*=======  header navigation area  =======*/}
    //             <div className="header-navigation-area default-bg">
    //                 <div className="container">
    //                     <div className="row">
    //                         <div className="col-lg-12">
    //                             {/* header navigation */}
    //                             <div className="header-navigation header-navigation--header-default position-relative">
    //                                 <div className="header-navigation__nav position-static">
    //                                     <nav>
    //                                         <ul className="flex flex-col md:flex-row md:space-x-8">
    //                                             <li className="">
    //                                                 <Link to={`${process.env.PUBLIC_URL}/home-one`}> HOME </Link>
    //                                             </li>
    //                                             <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</Link></li>
    //                                             <li className="">
    //                                                 <Link to={`${process.env.PUBLIC_URL}/services`}>SERVICE</Link>
    //                                             </li>
    //                                             <li className="">
    //                                                 <Link to={`${process.env.PUBLIC_URL}/projects`}>PROJECT</Link>
    //                                             </li>
    //                                             <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link></li>
    //                                         </ul>
    //                                     </nav>
    //                                     <button
    //                                         className="md:hidden"
    //                                         onClick={toggleMobileMenu}
    //                                     >
    //                                         <svg
    //                                             className="w-6 h-6"
    //                                             fill="none"
    //                                             stroke="currentColor"
    //                                             viewBox="0 0 24 24"
    //                                             xmlns="http://www.w3.org/2000/svg"
    //                                         >
    //                                             <path
    //                                                 strokeLinecap="round"
    //                                                 strokeLinejoin="round"
    //                                                 strokeWidth="2"
    //                                                 d="M4 6h16M4 12h16M4 18h16"
    //                                             ></path>
    //                                         </svg>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/*=======  End of header navigation area =======*/}
    //         </div>
    //     </div>
    //     {/*====================  End of header area  ====================*/}
    //     {/* Mobile Menu */}
    //     {showMobileMenu && <MobileMenu ref={mobileMenuElement} />}
    // </div>
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Footer} className="h-14" alt="" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span> */}
        </Link>
        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          className={`w-full md:block md:w-auto ${
            showMobileMenu ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-2 md:p-0 mt-2 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/home-one"
                className={`block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                  location.pathname === "/home-one"
                    ? "text-[#0060B8] "
                    : "text-gray-400"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                style={
                  location.pathname === "/about-us" ? { color: "blue" } : {}
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                style={
                  location.pathname === "/services" ? { color: "blue" } : {}
                }
              >
                Services
              </Link>
            </li>
           
            <li>
              <Link
                to="/projects"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                style={
                  location.pathname === "/projects" ? { color: "blue" } : {}
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                style={
                  location.pathname === "/contact-us" ? { color: "blue" } : {}
                }
              >
                contact-us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
