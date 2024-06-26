import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import footer from "../assets/images/footer.png"
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import about from "../assets/images/about.png"
import ban from "../assets/images/ban.png"
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
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
            backgroundImage: `url(${about})`
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

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                
                <div className="col-lg-6 col-12 mb-30">
                  
                  <div className="about-image-two ">
               
                    <img className="lg:h-screen lg:ml-10" src={about} alt="" />
                    
                  </div>
                  
                  
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to Fiza Enginerring</h3>
                    <h1>50 Years of Experience in Industry</h1>
                    <h4>
                      We are ready to build your dream home Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Dolorum, beatae.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsam repudiandae odit dolorum quis laudantium impedit
                      beatae perferendis natus, hic libero sed atque quibusdam
                      possimus error, voluptate est molestiae doloremque
                      necessitatibus illum rerum sunt! Ad sunt obcaecati
                      voluptatem sint sequi quos, qui non deleniti a
                      praesentium, sapiente accusantium odit.
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
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
                      <span>50</span>Years of Experience
                    </h1>
                    <p>
                      ligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor ellendus. Temporibus autem quibusdam et
                      aut officiis debitis aut rerum atibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      ligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor ellendus. Temporibus autem quibusdam et
                      aut officiis debitis aut rerum atibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapie
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
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
