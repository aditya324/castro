import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import footer from "../assets/images/footer.png";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import about from "../assets/images/about.png";
import banner from "../assets/images/star.png";
import about2 from "../assets/images/about2.jpg";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

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
            backgroundPosition: "center",
            objectFit: "cover",
            backgroundImage: `url(${about2})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120 lg:mt-20 lg:p-0 p-3">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                
                <div className="col-lg-6 col-12 mb-30">
                  
                  <div className="about-image-two ">
                    <img className="lg:h-screen lg:ml-10 " src={about} alt="" />
                  </div>
                  {/* <div>
                    <img
                      className="absolute lg:top-80 md:top-32 md:mt-36 md:w-44   lg:mt-10  lg:w-40 top-8 mt-32  lg:left-10 left-0 w-28 rotate"
                      src={banner}
                      alt=""
                    />
                    <h1 className="absolute lg:top-80 md:top-32 md:mt-44 md:left-12 md:text-5xl lg:mt-20 mt-36  top-10 lg:left-20 left-8 font-bold  text-3xl text-white lg:text-5xl">
                      20+
                    </h1>
                    <p className="absolute lg:top-80 lg:ml-1  md:top-36 md:mt-56 md:left-8 md:text-2xl lg:mt-32 mt-44 top-12 lg:left-20 left-5 font-bold  text-base lg:text-xl text-white">
                      Years Exp
                    </p>
                  </div> */}
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to Fiza Enginerring</h3>
                    <h1 className="mt-3">20 Years of Experience in Industry</h1>
                    <h4>
                      Fiza Engineering Corporation is African based,
                      Engineering, project development, and Construction &
                      Mining Equipment trading company, which owned by an
                      Indian; Engineering graduate with post qualification in
                      finance from most reputed institute of India, with over 20
                      years of experience in above fields.
                    </h4>
                    <p>
                      Started with Construction Equipment Trading & Procurement
                      Service providing activities for Mining and Construction
                      companies, today, ourselves are into Mining, Project
                      Development and Commer- cial Farming & Agricultural
                      Business in Africa, Asia, CIS and Middle East countries.
                      We are holder of main Agency Agreement of SAIC- IVECO
                      -Hongyan heavy duty commercial vehicle for Middle East and
                      North Africa and few Asian Countries, with our own
                      distribution network in those territories with
                      satisfied customers
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20 rounded-lg"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>
                      <span>20</span>Years of Experience
                    </h1>
                    <p>
                      For over 20 years, Fiza Engineering Corporation has
                      immersed itself in the realms of engineering, project
                      development, and the trading of construction and mining
                      equipment. This extensive tenure in the industry has
                      endowed us with a wealth of experience, allowing us to
                      adeptly maneuver through various challenges while
                      consistently delivering exceptional solutions. Across
                      Africa, Asia, CIS, and the Middle East, we have left our
                      mark through the successful execution of numerous projects
                      and the cultivation of enduring partnerships. Our journey
                      has been defined by continuous learning, adaptation to
                      evolving market dynamics, and a steadfast commitment to
                      excellence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      Throughout our 20-year journey, Fiza Engineering
                      Corporation has evolved into a beacon of expertise and
                      reliability in the fields of engineering and project
                      development. Our extensive tenure in the industry has
                      equipped us with invaluable insights, enabling us to
                      navigate complexities with precision and ingenuity. From
                      the bustling markets of Africa to the dynamic landscapes
                      of Asia, CIS, and the Middle East, we have forged enduring
                      relationships and earned the trust of clients through our
                      unwavering dedication to quality and innovation. Our
                      legacy of excellence is a testament to our unwavering
                      commitment to delivering impactful solutions that propel
                      the success of our clients' ventures.
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20 rounded-lg"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          <Funfact />

          {/* Team member */}
          {/* <TeamMemberGrid /> */}

          {/* Testimonial Slider */}
          {/* <TestimonialSlider /> */}

          {/* Brand logo */}
          {/* <BrandLogoSlider background="" /> */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
