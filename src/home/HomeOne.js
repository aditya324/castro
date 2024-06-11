import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import Funfact from '../components/Funfact';
import Corousel from "../landing/Corousel"
import ProjectSlider from '../components/ProjectSlider';
import TeamJob from '../components/TeamJob';
import TestimonialSlider from '../components/TestimonialSlider';
import BlogGrid from '../components/BlogGrid';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import About from '../landing/About';
import Service from '../landing/Service';
import CardSlider from '../landing/CardSlider';
import ContactUs from '../landing/ContactUs';
import Latest from '../landing/Latest';
import Slider from '../landing/Slider';


class HomeOne extends Component{
    render(){
        
        return(
            <div>
                
               <Corousel/>
               <About/>
               <CardSlider />
               <ContactUs/>
               <Latest/>
               <Slider/>
               <Footer/>


            </div>
        )
    }
}


export default HomeOne;