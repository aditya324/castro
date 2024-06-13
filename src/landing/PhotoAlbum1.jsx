import React from "react";
import Masonry from "react-responsive-masonry";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";
// Import images
import img1 from "../assets/images/galleryimage/img1.jpg";
import img2 from "../assets/images/galleryimage/img2.jpg";
import img3 from "../assets/images/galleryimage/img3.jpg";
import img4 from "../assets/images/galleryimage/img4.jpg";
import img5 from "../assets/images/galleryimage/img5.jpg";
import img6 from "../assets/images/galleryimage/img6.jpg";
import img7 from "../assets/images/galleryimage/img7.jpg";
import img8 from "../assets/images/galleryimage/img8.jpg";
import img9 from "../assets/images/galleryimage/img9.jpg";

// const images = [img1, img2, img3, img4, img5, img6];


const photos =[
  { src: img1, width: 1080, height: 780 },
  { src: img2, width: 1080, height: 1620 },
  { src: img3, width: 1080, height: 720 },
  { src: img4, width: 1080, height: 720 },
  { src: img5, width: 1080, height: 1620 },
  { src: img6, width: 1080, height: 607 },
  { src: img7, width: 1080, height: 608 },
  { src: img8, width: 1080, height: 720 },

  
]

const PhotoAlbum1 = () => {
  return (
    <>
      <NavBar />
      {/* <Masonry columnsCount={3} gutter="10px" className="mt-16">
        {images.map((image, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={image}
              style={{ width: "100%", transition: "transform 0.3s ease", transformOrigin: "center" }}
              alt={`Image ${i + 1}`}
              className="cursor-pointer"
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
              Image {i + 1}
            </div>
          </div>
        ))}
      </Masonry> */}


<PhotoAlbum layout="masonry" photos={photos} />;
      <Footer />
    </>
  );
};

export default PhotoAlbum1;
