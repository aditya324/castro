import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

class ServiceDetailsLeftSidebar4 extends Component {
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
                            Agricultural & Commercial Farming Solutions
                          </h2>
                          <p className="mt-3">
                            At Fiza Engineering Corporation, we excel in
                            delivering integrated solutions for agricultural and
                            commercial farming endeavors. Our focus is on
                            orchestrating holistic projects designed to enhance
                            agricultural productivity and profitability. From
                            initial soil analysis and crop selection to the
                            recruitment of skilled personnel, we offer a
                            seamless and comprehensive approach. Our expertise
                            spans a diverse range of plantations, including
                            rubber and dairy farming. Each project is
                            meticulously customized to align with our clients'
                            specific requirements, ensuring optimal efficiency
                            and profitability.
                          </p>
                          <p className="mt-3">
                            With a keen understanding of the intricacies
                            involved in commercial farming, Fiza Engineering
                            Corporation specializes in tailoring farming
                            initiatives to meet the unique needs of our clients.
                            Our meticulous approach ensures that every aspect of
                            the project, from crop selection to resource
                            allocation, is optimized for success. We leverage
                            our expertise and experience to identify high-yield
                            crops suited to the prevailing land conditions,
                            thereby facilitating sustainable and profitable
                            farming ventures. By collaborating with top-tier
                            agricultural and scientific professionals from
                            renowned universities worldwide, we ensure that our
                            projects operate smoothly and efficiently.
                          </p>
                          <p className="mt-3">
                            we prioritize expertise-driven farm management to
                            ensure the success of our agricultural projects. Our
                            team consists of top-tier agricultural and
                            scientific professionals recruited from prestigious
                            universities globally. Their wealth of knowledge and
                            experience enables us to implement cutting-edge
                            practices and identify optimal crop choices tailored
                            to each client's land conditions. From soil testing
                            to crop cultivation, we employ a meticulous approach
                            to maximize agricultural productivity and
                            profitability. By combining expertise with
                            innovative solutions, we empower our clients to
                            embark on sustainable and lucrative
                            farming ventures.
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

export default ServiceDetailsLeftSidebar4;
