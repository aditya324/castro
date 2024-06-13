import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import sban from "../assets/images/fiza/sopbanner.png";
import metal from "../assets/images/services/Rectangle 41999.png";
class ServiceDetailsLeftSidebar3 extends Component {
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
                    {/* <ServiceGallery /> */}
                    <div className="flex justify-center">
                      <img
                        src={metal}
                        alt="ore"
                        className="w-11/12 max-w-screen-lg h-auto"
                      />
                    </div>

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="font-bold">
                            Comprehensive Metal & Mineral Trading and Export
                          </h2>
                          <p className="mt-3">
                            Fiza Engineering Corporation specializes in the
                            comprehensive trading and global export of a diverse
                            array of mined ores and minerals, meeting the
                            intricate needs of industries worldwide. Our
                            extensive portfolio encompasses a rich selection of
                            high-demand resources, ranging from coal and iron
                            ore to chromite and copper concentrates, ensuring a
                            consistent and reliable supply of essential
                            materials for various industrial applications.
                          </p>
                          <p className="mt-3">
                            In addition to these primary commodities, we also
                            provide an expansive range of industrial materials,
                            including premium-grade copper, titanium dioxide,
                            steel, fertilizers, and chemical composites. These
                            vital materials play indispensable roles in numerous
                            manufacturing processes and construction projects,
                            offering unparalleled performance and reliability to
                            our clients. With a steadfast commitment to
                            excellence and reliability, Fiza Engineering
                            Corporation stands as a trusted partner in
                            facilitating seamless trade and export operations,
                            delivering top-notch quality and service to
                            industries worldwide. Our dedication to meeting the
                            diverse needs of our clients drives us to
                            continually expand and diversify our product
                            offerings, ensuring that we remain at the forefront
                            of the global metal and mineral trading landscape.
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

export default ServiceDetailsLeftSidebar3;
