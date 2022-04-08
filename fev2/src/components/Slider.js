import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slider.css";
import img from "../assets/satu.png";   
import img2 from "../assets/dua.png";
import img3 from "../assets/tiga.png";


class Slidenya extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplayspeed: 2500,
        };
        return (
            <div className="container">
                    <div className="container-slide">
                        <Slider {...settings}>
                            <div><img src={img} alt="slide1" /></div>
                            <div><img src={img2}alt="slide2" /></div>
                            <div><img src={img3} alt="slide3" /></div>
                        </Slider>
                    </div>
                </div>
        );
    }
}

export default Slidenya;