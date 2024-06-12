import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import sban from "../assets/images/fiza/sopbanner.png";
class ServiceDetailsLeftSidebar extends Component {
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
            backgroundImage: `url(${sban})`,
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
                            Ore Minning & quarry industries
                          </h2>
                          <p className="mt-3">
                            Fiza Engineering Corporation delivers comprehensive
                            and cutting-edge solutions for the ore mining and
                            quarry industries. Our services span the entire
                            lifecycle of mining projects, from initial
                            greenfield development through to full-scale
                            production. We offer state-of-the-art beneficiation
                            and ore processing systems, including automated
                            washing, precise grading, strategic stockpiling, and
                            efficient conveyor systems, ensuring the seamless
                            loading and discharge of final products.
                          </p>
                          <p className="mt-3">
                            Our specialized equipment is meticulously designed
                            to meet the unique demands of mining sites,
                            incorporating the latest advancements in automation
                            and cost-effective methodologies. By doing so, we
                            enhance productivity and ensure optimal operational
                            efficiency. Additionally, we provide flexible and
                            tailored financial arrangements for the procurement
                            and supply of plant and machinery, facilitating
                            seamless project execution and uninterrupted
                            operations. At Fiza Engineering Corporation, we are
                            committed to innovation and excellence, offering
                            robust solutions that drive the success of your
                            mining endeavors. Our comprehensive suite of
                            services and equipment ensures that your projects
                            are executed with precision, efficiency, and
                            reliability, positioning you at the forefront of the
                            mining industry.
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

export default ServiceDetailsLeftSidebar;
