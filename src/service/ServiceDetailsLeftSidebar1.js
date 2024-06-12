import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class ServiceDetailsLeftSidebar1 extends Component {
  render() {
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
                  <h1>Service Details</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Service Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery />

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="font-bold">
                            Comprehensive engineering solutions for plant &
                            machinery
                          </h2>
                          <p className="mt-3">
                            At Fiza Engineering Corporation, we offer
                            comprehensive and tailored solutions for the mining
                            industries, covering every phase from initial setup
                            to full-scale production stages. Our services
                            encompass advanced beneficiation and ore processing
                            systems, along with automated washing, precise
                            grading, strategic stockpiling, and efficient
                            conveyor systems to ensure smooth and efficient
                            mining operations.
                          </p>
                          <p className="mt-3">
                            We design and supply special-purpose equipment
                            meticulously crafted to meet specific site
                            requirements, incorporating cutting-edge automation
                            and streamlined downstream operations. Our goal is
                            to enhance productivity and operational efficiency
                            through innovative and cost-effective solutions.
                            Furthermore, we provide flexible financial terms for
                            the supply of plant and machinery, offering leasing,
                            deferred payment options, and customized financing
                            arrangements.Our commitment to excellence and
                            innovation positions Fiza Engineering Corporation as
                            a trusted partner in delivering high-quality,
                            reliable, and efficient engineering solutions for
                            the mining industry.
                          </p>
                        </div>
                        {/* <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Analysis</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, animi? Vel quas in minima qui totam,
                            aliquid dolores quaerat voluptatum?
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Costing</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, animi? Vel quas in minima qui totam,
                            aliquid dolores quaerat voluptatum?
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Planning</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, animi? Vel quas in minima qui totam,
                            aliquid dolores quaerat voluptatum?
                          </p>
                        </div> */}
                        {/* <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Strategy</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fugiat, animi? Vel quas in minima qui totam,
                            aliquid dolores quaerat voluptatum?
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-2 order-lg-1">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

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

export default ServiceDetailsLeftSidebar1;
