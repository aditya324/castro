import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import prime from "../assets/images/products/prime Movers.png";
import chassis from "../assets/images/products/Chassis cab.png";
import cess from "../assets/images/products/cesspit tank.png";
import tractor from "../assets/images/products/Tractor.png";
import fire from "../assets/images/products/Fire fighter.png";
import concrete from "../assets/images/products/Concrete pump.png";
import ambulance from "../assets/images/products/Waste managmet.png";
import cement from "../assets/images/products/cement bunkers.png";
import grain from "../assets/images/products/Grain carrier.png";
import horse from "../assets/images/products/horse carrier.png";
import transit from "../assets/images/products/transit makers.png";
import trailer from "../assets/images/products/trailer.png";
import tankers from "../assets/images/products/tankers.png";
import prban from "../assets/images/products/prban.png";

class Products extends Component {
  render() {
    let data = [
      {
        pageLink: "project-details",
        img: prime,
        projectTitle: "PRIME MOVERS",
        projectSubtitle:
          " These are powerful, heavy-duty trucks primarily used for towing trailers or machinery. In construction, they transport large, heavy loads such as excavators, bulldozers, or prefabricated building components.",
      },
      {
        pageLink: "project-details",
        img: chassis,
        projectTitle: "CHASSIS CAB",
        projectSubtitle:
          " A truck with only a frame and cab, designed for versatility. Construction companies use chassis cabs to customize the vehicle with different bodies such as dump beds, utility boxes, or flatbeds for transporting tools and materials.",
      },

      {
        pageLink: "project-details",
        img: cess,
        projectTitle: "CESSPIT TANK",
        projectSubtitle:
          " Also known as vacuum trucks, they are equipped with a pump and tank to suck up and transport liquid waste. On construction sites, they are used for removing sewage, wastewater, and sludge from temporary sanitation facilities.",
      },
      {
        pageLink: "project-details",
        img: tractor,
        projectTitle: "TRACTORS",
        projectSubtitle:
          "Powerful, versatile vehicles used to pull or push various construction attachments. Tractors are employed for tasks such as grading land, plowing soil, or hauling materials, making them invaluable for site preparation and earthmoving.",
      },
      {
        pageLink: "project-details",
        img: fire,
        projectTitle: "FIRE FIGHTING EQUIPMENT",
        projectSubtitle:
          " Specialized trucks outfitted with water tanks, hoses, and pumps to combat fires. These vehicles are crucial for ensuring safety on large construction sites, especially where there is a high risk of fire due to materials or welding activities.",
      },
      {
        pageLink: "project-details",
        img: concrete,
        projectTitle: "CONCRETE PUMP",
        projectSubtitle:
          "A truck-mounted pump that conveys liquid concrete through a pipeline to specific locations on a construction site. Concrete pumps are essential for placing concrete in hard-to-reach areas, such as tall buildings or over obstacles.",
      },
      {
        pageLink: "project-details",
        img: ambulance,
        projectTitle: "AMBULANCE",
        projectSubtitle:
          " A medically equipped vehicle for emergency care and transport. On construction sites, ambulances provide immediate medical attention and rapid transport to a hospital for workers who sustain injuries or health emergencies.",
      },
      {
        pageLink: "project-details",
        img: cement,
        projectTitle: "CEMENT BUNKERS",
        projectSubtitle:
          "  Large containers, often mounted on trucks, used to store and transport bulk cement. These are vital for supplying concrete batching plants or delivering large quantities of cement directly to construction sites.",
      },
      {
        pageLink: "project-details",
        img: grain,
        projectTitle: "GRAIN CARRIERS",
        projectSubtitle:
          " Trucks designed to transport bulk grain, adapted in construction to carry similar loose, bulk materials like sand, aggregate, or even small prefabricated elements. They offer a convenient way to move bulk materials efficiently.",
      },
      {
        pageLink: "project-details",
        img: horse,
        projectTitle: "HORSE CARRIERS",
        projectSubtitle:
          " While primarily for transporting horses, these trailers can be adapted for moving other animals or even equipment that requires secure, compartmentalized transport. In a construction context, they might be used in scenarios involving live animals or special cargo that needs protection during transport.",
      },
      {
        pageLink: "project-details",
        img: transit,
        projectTitle: "TRANSIT MIXER",
        projectSubtitle:
          "A truck with a rotating drum that mixes concrete during transit. This ensures the concrete remains in a liquid state until it reaches the construction site, providing fresh and ready-to-use concrete for building foundations, roads, and other structures.",
      },
      {
        pageLink: "project-details",
        img: trailer,
        projectTitle: "TRAILERS",
        projectSubtitle:
          " Unpowered vehicles towed by trucks. In construction, trailers are used to move heavy equipment like backhoes, loaders, and bulk materials such as steel beams or lumber to and from job sites.",
      },
      {
        pageLink: "project-details",
        img: tankers,
        projectTitle: "TANKERS",
        projectSubtitle:
          "Trucks with large tanks used to transport liquids. In construction, they might carry water for dust suppression, fuel for machinery, or chemicals for treating materials or soil.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        // <div
        //   className="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
        //   key={i}
        // >
        //   <div className="service-grid-item service-grid-item--style2">
        //     <div className="service-grid-item__image">
        //       <div className="service-grid-item__image-wrapper">
        //         {/* href={`${process.env.PUBLIC_URL}/${val.pageLink}`} */}
        //         <a>
        //           <img src={`${val.img}`} className="img-fluid" alt="" />
        //         </a>
        //       </div>
        //     </div>
        //     <div className="service-grid-item__content">
        //       <h3 className="title">
        //         {/* /${val.pageLink} */}
        //         <a href={`${process.env.PUBLIC_URL}`}>{val.projectTitle}</a>
        //       </h3>
        //       <p className="subtitle">{val.projectSubtitle}</p>
        //       {/* <a
        //         href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
        //         className="see-more-link"
        //       >
        //         SEE MORE
        //       </a> */}
        //     </div>
        //   </div>
        // </div>
        <div
          className="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
          key={i}
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <div
            className="service-grid-item service-grid-item--style2"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a>
                  <img
                    src={`${val.img}`}
                    className="img-fluid"
                    alt=""
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.projectTitle}
                </a>
              </h3>
              <p className="subtitle">{val.projectSubtitle}</p>
              {/* <a
              href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
              className="see-more-link"
            >
              SEE MORE
            </a> */}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(${prban})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Products</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  project page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
              <div className="row section-space--top--60">
                {/* <div className="col">
                  <ul className="page-pagination">
                    <li>
                      <a href="/">
                        <i className="fa fa-angle-left" /> Prev
                      </a>
                    </li>
                    <li className="active">
                      <a href="/">01</a>
                    </li>
                    <li>
                      <a href="/">02</a>
                    </li>
                    <li>
                      <a href="/">03</a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-angle-right" /> Next
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          {/*Projects section end*/}
        </div>

        {/*====================  End of project page content  ====================*/}

        {/* Brand logo */}
        {/* <BrandLogoSlider background="grey-bg" /> */}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Products;
