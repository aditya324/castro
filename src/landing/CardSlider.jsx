import React from 'react';
import Slider from 'react-slick';
import Service from './Service'; 
import "../index.css"
import sliderimage1 from "../assets/images/sliderimg1.png";
import sliderimage2 from "../assets/images/sliderimg2.png";
import sliderimage3 from "../assets/images/sliderimg3.png";
import sliderimage4 from "../assets/images/sliderimg4.png";

const cardsData = [
  {
    no: 1,
    image: sliderimage1,
    title: 'Supply of construction equipments',
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, but also the leap into essentially unchanged.'
  },
  {
    no: 2,
    image: sliderimage2,
    title: 'Plant & machineries',
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, but also the leap into essentially unchanged.'
  },
  {
    no: 3,
    image: sliderimage3,
    title: 'Infra structure-project development',
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, but also the leap into essentially unchanged.'
  },
  {
    no: 4,
    image: sliderimage4,
    title: 'Infra structure-project development',
    description: 'Lorem Ipsum is that it has a more-or-less normal distribution of letters, but also the leap into essentially unchanged.'
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto mt-5 overflow-hidden">
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.no} className="px-2">
            <Service image={card.image} title={card.title} description={card.description} no={card.no} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
