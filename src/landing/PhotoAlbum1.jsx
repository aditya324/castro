import React from "react";
import Masonry from "react-responsive-masonry";
import NavBar from "../components/NavBar";

import img1 from "../assets/images/about1.jpg";
import img2 from "../assets/images/about.png";
import img3 from "../assets/images/about2.jpg";
import img4 from "../assets/images/about1.jpg";
import img5 from "../assets/images/about.png";
import img6 from "../assets/images/about2.jpg";
import Footer from "../components/Footer";

const images = [img1, img2, img3, img4, img5, img6];

const PhotoAlbum1 = () => {
  return (
    <>
      <NavBar />
      <Masonry columnsCount={3} gutter="10px" className="mt-16">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
            alt={`Image ${i + 1}`}
          />
        ))}
      </Masonry>
      <Footer />
    </>
  );
};

export default PhotoAlbum1;
