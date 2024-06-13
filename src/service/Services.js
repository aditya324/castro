import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
// import sbanner from "../assets/images/fiza/SOP banner.jpg";
import ore from "../assets/images/services/Rectangle 41995.png";
import com from "../assets/images/services/Rectangle 41998.png";
import adv from "../assets/images/services/Rectangle 41996.png";
import metal from "../assets/images/services/Rectangle 41999.png";
import agr from "../assets/images/services/Rectangle 41997.png";
import meti from "../assets/images/fiza/metal trading.png";
import agriculture from "../assets/images/fiza/agriculture.png";
import waste from "../assets/images/fiza/waste.png";
import plant from "../assets/images/fiza/plant.png";
import mine from "../assets/images/fiza/mine.png";
import sop from "../assets/images/fiza/sopbanner.png";

class Services extends Component {
  render() {
    let data = [
      {
        pageLink: "service-details-left-sidebar",
        img: ore,
        iconClass: mine,
        serviceTitle: "Ore Minning & quarry industries",
        serviceSubtitle:
          "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor",
      },
      {
        pageLink: "service-details-left-sidebar1",
        img: com,
        iconClass: plant,
        serviceTitle:
          "Comprehensive engineering solutions for plant & machinery",
        serviceSubtitle:
          "Design, Development, Manufacturing, Supply, Erection, and Commissioning of Plant & Machineries",
      },
      {
        pageLink: "service-details-left-sidebar2",
        img: adv,
        iconClass: waste,
        serviceTitle: "Advanced Vehicle Solutions & Waste Management Equipment",
        serviceSubtitle:
          "Supply of Off-Road Vehicles & Automobiles, and Waste Management Equipment",
      },
      {
        pageLink: "service-details-left-sidebar3",
        img: metal,
        iconClass: meti,
        serviceTitle: "Comprehensive Metal & Mineral Trading and Export",
        serviceSubtitle:
          "We trade and export various mined ores and minerals, including coal, iron ore, chromite, copper concentrates, and more",
      },
      {
        pageLink: "service-details-left-sidebar4",
        img: agr,
        iconClass: agriculture,
        serviceTitle: "Agricultural & Commercial Farming Solutions",
        serviceSubtitle:
          "We undertake comprehensive commercial farming projects, leveraging global expertise to ensure optimal crop selection, mechanized plantation, and high profitability.",
      },
      // {
      //   pageLink: "service-details-left-sidebar",
      //   img: "service-1.jpg",
      //   iconClass: "flaticon-002-welding",
      //   serviceTitle: "Work Management",
      //   serviceSubtitle:
      //     "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor",
      // },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`${val.img}`}
                    className="img-fluid rounded-lg "
                    alt="Service Grid"
                  />
                </a>
              </div>
              <div className="icon">
                <img src={val.iconClass} />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceSubtitle}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
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
            backgroundImage: `url(${sop})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Scope Of Activities </h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/*====================  End of service page content  ====================*/}

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

export default Services;
