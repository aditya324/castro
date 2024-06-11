import React, { useState } from "react";
import Slider from 'react-slick';
import mainimage from "../assets/images/mainimg.png";
import images from "../data/images.js"; 
import "../index.css"

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        zIndex: 2,
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)"
      }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        zIndex: 2,
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)"
      }}
      onClick={onClick}
    />
  );
}

const Latest = () => {
  const [category, setCategory] = useState('All');

  const handleCategoryChange = (categoryKey) => {
    setCategory(categoryKey);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640, // For screens smaller than 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center">
          <h1 className="text-[#0060B8] text-3xl font-bold mb-3 relative inline-block">
            Latest Projects
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-52 h-1  bg-[#0060B8]"></span>
          </h1>
        </div>
        <p className="inline-block text-sm mt-4 lg:mt-5">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, but also the leap <br />
          <span className="block">into essentially unchanged.</span>
        </p>
      </div>
      <div className="flex lg:justify-center lg:flex-row lg:gap-5 lg:pb-8 lg:mt-8 pl-8 flex-col mt-3 mb-3 ">
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('plants')}>Plants</button>
        <button onClick={() => handleCategoryChange('GlassProject')}>Glass Project</button>
        <button onClick={() => handleCategoryChange('Mining')}>Mining</button>
        <button onClick={() => handleCategoryChange('Environment')}>Environment</button>
        <button onClick={() => handleCategoryChange('Mills')}>Mills</button>
      </div>
      <div
        className="w-full lg:h-40 relative"
        style={{
          backgroundImage: `url(${mainimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "450px",
          marginBottom: "2em"
        }}
      >
        <div className="absolute inset-0">
          <Slider {...settings}>
            {images[category]?.map((image, index) => (
              <div
                key={index}
                className="relative group transform transition-transform duration-500 hover:animate-rotate-y hover:animate-once hover:animate-duration-[1500ms]  w-full h-96 lg:h-full"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="lg:w-full lg:h-full h-full w-screen object-cover mt-8 lg:px-0 px-8"
                />
                <div className="absolute inset-0 bg-[#FFFCEF] top-8 lg:mx-0  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex flex-col items-center ">
                    <img src={image.img} alt={image.alt} className="h-14 w-14" />
                    <h1 className="lg:px-5 my-3 font-semibold">{image.topic}</h1>
                    <p className="lg:px-5">{image.para}</p>
                    <button
                      type="button"
                      className="text-blue-700 font-medium rounded-lg text-sm py-2.5 flex items-center justify-end mt-10 ml-28"
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
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-[#0060B8] text-3xl font-bold mb-8 relative inline-block">
          What Our Client Says
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-1/2 h-1  bg-[#0060B8]"></span>
        </h1>
      </div>
    </div>
  );
};

export default Latest;
