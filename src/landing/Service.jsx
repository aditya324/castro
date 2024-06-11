import React, { useState } from 'react';

const Service = ({ image, title, description, no }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      <div
        className={`card w-full h-96 rounded-lg overflow-hidden relative transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div
          className={`info absolute bottom-0 left-0 p-4 w-full ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-300 ease-in-out`}
        >
          <h1 className="text-white text-xl font-semibold">{no}</h1>
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <p className="text-white mt-2">{description}</p>
          <button
            type="button"
            className="text-blue-700 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
