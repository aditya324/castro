import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import card from "../assets/images/card.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div
    className="item border px-5 rounded-lg lg:mx-7 md:mx-7 mx-6"
    data-value="1"
    key="1"
  >
    <div className="mt-5">
      <h1 className="font-bold text-left">Exceeded our expectation</h1>
      <p className="mt-3 text-left ">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, but also the leap into essentially unchanged. Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, but also the
        leap into essentially unchanged. Ipsum is that it has a more.
      </p>
    </div>
    <div className="flex gap-3 mt-3 mb-5">
      <img src={card} alt="" />
      <div className="flex flex-col text-left">
        <h1 className="font-bold">Rehan</h1>
        <p className="text-[#6C6C6C]">Product Manager</p>
      </div>
    </div>
  </div>,
  <div
    className="item border px-5 rounded-lg lg:mx-7 md:mx-7 mx-6"
    data-value="2"
    key="2"
  >
    <div className="mt-5">
      <h1 className="font-bold text-left">Exceeded our expectation</h1>
      <p className="mt-3 text-left">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, but also the leap into essentially unchanged. Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, but also the
        leap into essentially unchanged. Ipsum is that it has a more.
      </p>
    </div>
    <div className="flex gap-3 mt-3 mb-5">
      <img src={card} alt="" />
      <div className="flex flex-col text-left">
        <h1 className="font-bold">Rehan</h1>
        <p className="text-[#6C6C6C]">Product Manager</p>
      </div>
    </div>
  </div>,
  <div
    className="item border px-5 rounded-lg lg:mx-7 md:mx-7 mx-6"
    data-value="3"
    key="3"
  >
    <div className="mt-5">
      <h1 className="font-bold text-left">Exceeded our expectation</h1>
      <p className="mt-3 text-left">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, but also the leap into essentially unchanged. Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, but also the
        leap into essentially unchanged. Ipsum is that it has a more.
      </p>
    </div>
    <div className="flex gap-3 mt-3 mb-5">
      <img src={card} alt="" />
      <div className="flex flex-col text-left">
        <h1 className="font-bold">Rehan</h1>
        <p className="text-[#6C6C6C]">Product Manager</p>
      </div>
    </div>
  </div>,
  <div
    className="item border px-5 rounded-lg lg:mx-7 md:mx-7 mx-6"
    data-value="4"
    key="4"
  >
    <div className="mt-5">
      <h1 className="font-bold text-left">Exceeded our expectation</h1>
      <p className="mt-3 text-left">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, but also the leap into essentially unchanged. Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, but also the
        leap into essentially unchanged. Ipsum is that it has a more.
      </p>
    </div>
    <div className="flex gap-3 mt-3 mb-5">
      <img src={card} alt="" />
      <div className="flex flex-col text-left">
        <h1 className="font-bold">Rehan</h1>
        <p className="text-[#6C6C6C]">Product Manager</p>
      </div>
    </div>
  </div>,
  <div
    className="item border px-5 rounded-lg lg:mx-7 md:mx-7 mx-6"
    data-value="5"
    key="5"
  >
    <div className="mt-5">
      <h1 className="font-bold text-left">Exceeded our expectation</h1>
      <p className="mt-3 text-left">
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, but also the leap into essentially unchanged. Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, but also the
        leap into essentially unchanged. Ipsum is that it has a more.
      </p>
    </div>
    <div className="flex gap-3 mt-3 mb-5">
      <img src={card} alt="" />
      <div className="flex flex-col text-left">
        <h1 className="font-bold">Rehan</h1>
        <p className="text-[#6C6C6C]">Product Manager</p>
      </div>
    </div>
  </div>,
];

const Slider = () => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items.map((item, index) => (
          <div
            key={index}
            className={`${index !== items.length - 1 ? "mr-4" : ""}`}
          >
            {item}
          </div>
        ))}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
        infinite
      />
    </>
  );
};

export default Slider;
