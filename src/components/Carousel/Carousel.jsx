import React from "react";
import { Carousel } from "antd";
import "./Carousel.scss";
import Slider1 from "../../assets/1.jpg";
import Slider2 from "../../assets/2.jpg";
import Slider3 from "../../assets/3.jpg";
import Slider4 from "../../assets/4.jpg";

const CarouselHome = () => (
  <Carousel autoplay>
    <div className="ft1">
      <img src={Slider1} alt="Marvel Carousel 1" />
    </div>
    <div className="ft1">
      <img src={Slider2} alt="Marvel Carousel 2" />
    </div>
    <div className="ft1">
      <img src={Slider3} alt="Marvel Carousel 3" />
    </div>
    <div className="ft1">
      <img src={Slider4} alt="Marvel Carousel 4" />
    </div>
  </Carousel>
);
export default CarouselHome;
