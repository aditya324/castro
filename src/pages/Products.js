import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Products extends Component {
  render() {
    let data = [
      {
        pageLink: "project-details",
        img: "project-1.jpg",
        projectTitle: "POWER PLANTS (NEW OR REFURBISHED)",
        projectSubtitle:
          "We specialize in designing and constructing power plants, including thermal, hydro, gas, or oil fields, catering to diverse energy requirements.",
      },
      {
        pageLink: "project-details",
        img: "project-2.jpg",
        projectTitle: "BATCHING PLANT (CONCRETE)",
        projectSubtitle:
          "Offering batching plants ranging from 30 to 160 cubic meters, we provide efficient solutions for concrete production in various capacities.",
      },
      {
        pageLink: "project-details",
        img: "project-3.jpg",
        projectTitle: "CRUSHING PLANT",
        projectSubtitle:
          "Our crushing plants range from 30 to 240 tons per hour, delivering high-quality aggregates for construction projects of all scales.",
      },
      {
        pageLink: "project-details",
        img: "project-4.jpg",
        projectTitle: "ASPHALT PLANT",
        projectSubtitle:
          "Providing both mobile and stationary types, our asphalt plants ensure reliable production of quality asphalt for road construction.",
      },
      {
        pageLink: "project-details",
        img: "project-5.jpg",
        projectTitle: "GLASS PROJECT",
        projectSubtitle:
          "Specializing in floating glass projects, we design and construct glass manufacturing facilities with precision and efficiency.",
      },
      {
        pageLink: "project-details",
        img: "project-6.jpg",
        projectTitle: "CEMENT PLANT",
        projectSubtitle:
          "From 400 to 7000 metric tons per day, our cement plants are tailored to meet the demands of the construction industry with precision and efficiency.",
      },
      {
        pageLink: "project-details",
        img: "project-7.jpg",
        projectTitle: "MINING",
        projectSubtitle:
          "We undertake mining projects for various minerals including ferrous ore, copper, silica, limestone, and coal, ensuring sustainable resource extraction.",
      },
      {
        pageLink: "project-details",
        img: "project-8.jpg",
        projectTitle: "ENVIRONMENTAL PROJECTS",
        projectSubtitle:
          "Our environmental projects include addressing sea corrosion, dredging jobs, and constructing mini ports and fishing harbors to promote eco-friendly practices.",
      },
      {
        pageLink: "project-details",
        img: "project-8.jpg",
        projectTitle: "STEEL MILLS",
        projectSubtitle:
          "Specializing in smelters and billet makers, we provide state-of-the-art solutions for steel production to meet the demands of various industries.",
      },
      {
        pageLink: "project-details",
        img: "project-8.jpg",
        projectTitle: "WASTE MANAGEMENT",
        projectSubtitle:
          "We offer comprehensive waste management solutions, including sorting and recycling, to promote environmental sustainability.",
      },
      {
        pageLink: "project-details",
        img: "project-8.jpg",
        projectTitle: "Solar Power Plants",
        projectSubtitle:
          "Specializing in solar power plants, we design and construct efficient and sustainable renewable energy solutions to meet growing energy demands.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                {/* href={`${process.env.PUBLIC_URL}/${val.pageLink}`} */}
                <a>
                  <img
                    src={`assets/img/projects/${val.img}`}
                    className="img-fluid"
                    alt=""
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
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`,
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
