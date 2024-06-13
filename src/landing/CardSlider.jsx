import React from "react";
import Slider from "react-slick";
import Service from "./Service";
import ore from "../assets/images/services/Rectangle 41995.png";
import com from "../assets/images/services/Rectangle 41998.png";
import adv from "../assets/images/services/Rectangle 41996.png";
import metal from "../assets/images/services/Rectangle 41999.png";
import agr from "../assets/images/services/Rectangle 41997.png";
import "../index.css";
import sliderimage1 from "../assets/images/sliderimg1.png";
import sliderimage2 from "../assets/images/sliderimg2.png";
import sliderimage3 from "../assets/images/sliderimg3.png";
import sliderimage4 from "../assets/images/sliderimg4.png";

const cardsData = [
  {
    no: 1,
    image: ore,
    title: "Ore Mining and Quarry Industries",
    description:
      "Providing holistic solutions for mining operations, from exploration to production, ensuring efficient extraction and processing of minerals and ores.",
  },
  {
    no: 2,
    image: com,
    title: "Comprehensive Engineering Solutions for Plant and Machinery",
    description:
      " Offering integrated engineering solutions tailored to the specific needs of industrial plants and machinery",
  },
  {
    no: 3,
    image: adv,
    title: "Advanced Vehicle Solutions and Waste Management Equipment",
    description:
      "Supplying cutting-edge vehicles and equipment for various industries, including mining and waste management",
  },
  {
    no: 4,
    image: metal,
    title: "Comprehensive Metal and Mineral Trading and Export",
    description:
      "Facilitating the trading and global export of a diverse range of metals and minerals",
  },
  {
    no: 5,
    image: agr,
    title: "Agricultural and Commercial Farming Solutions",
    description:
      " Delivering customized solutions for commercial farming projects, from crop selection to skilled labor recruitment",
  },
];

const CardSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-5 overflow-hidden">
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.no} className="px-2">
            <Service
              image={card.image}
              title={card.title}
              description={card.description}
              no={card.no}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
