import about from "../assets/images/about.png";
import { TiTick } from "react-icons/ti";
import banner from "../assets/images/star.png";
import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white p-1 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="lg:mt-0 lg:col-span-5 lg:flex md:mt-10 ">
            <img
              className="lg:h-full w-5/6 object-cover rounded-lg lg:ml-32 ml-10 lg:mt-0 mt-4 md:ml-24"
              src={about}
              alt="mockup"
            />
            <div>
              <img
                className="absolute lg:top-full md:top-96 md:mt-36 md:w-44   lg:mt-1  lg:w-40 top-3/4 mt-32  lg:left-24 left-5 w-28 rotate"
                src={banner}
                alt=""
              />
              <h1 className="absolute lg:top-full md:top-96 md:mt-44 md:left-20 md:text-4xl lg:mt-10 mt-36  top-3/4 lg:left-36 left-14 font-bold  text-2xl text-white lg:text-5xl">
                20+
              </h1>
              <p className="absolute lg:top-full lg:ml-1  md:top-96 md:mt-56 md:left-14 md:text-2xl lg:mt-24 mt-44 top-3/4 lg:left-32 left-10 font-bold  text-base lg:text-xl text-white">
                Years Exp
              </p>
            </div>
          </div>
          <div className="mr-auto place-self-start lg:col-span-7 lg:pl-8 lg:mt-14 mt-8 lg:mb-5 md:p-5 md:ml-10">
            <div className="text-[#0060B8] text-left">
              <h1 className="font-semibold text-[#0060B8]">About Us</h1>
            </div>
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none text-left lg:text-5xl md:text-5xl xl:text-6xl mt-3 ">
              Fiza Engineering Corporation.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-left text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Ipsum as their default model text.
            </p>
            <div className="text-left">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <TiTick className="text-[#0060B8]" />
                  <p>Rent and management equipment</p>
                </div>
                <div className="flex items-center">
                  <TiTick className="text-[#0060B8]" />
                  <p>Rent and management equipment</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 my-4">
                <div className="flex items-center">
                  <TiTick className="text-[#0060B8]" />
                  <p>Full satisfaction guaranteed</p>
                </div>
                <div className="flex items-center lg:ml-10">
                  <TiTick className="text-[#0060B8]" />
                  <p>View accurate rates</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <TiTick className="text-[#0060B8]" />
                  <p>Rent and management equipment</p>
                </div>
                <div className="flex items-center">
                  <TiTick className="text-[#0060B8]" />
                  <p>Rent and management equipment</p>
                </div>
              </div>
            </div>
            <div className="text-left mt-4">
              <button
                type="button"
                className="text-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              >
                Know more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <div className="flex justify-center">
          <h1 className="text-[#0060B8] text-3xl font-bold  relative inline-block">
            Our Services
          </h1>
        </div>
        <p className="inline-block text-sm mt-4 lg:mt-5">
          Lorem Ipsum is that it has a more-or-less normal distribution <br />
          <span className="block">
            of letters, but also the leap into essentially unchanged.
          </span>
        </p>
      </div>
    </>
  );
};

export default About;
