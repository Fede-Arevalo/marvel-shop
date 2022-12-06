import React from 'react';
import { Carousel } from 'antd';
import './Carousel.scss'



const CarouselHome = () => (
  <Carousel autoplay>
    <div className='ft1'>
    <img src="/assets/1.jpg"  />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </div>
    <div className='ft1'>
      <img src="/assets/2.jpg"  /> 
    </div>
    <div className='ft1'>     
      <img src="/assets/3.jpg"  /> 
    </div>
    <div className='ft1'>    
      <img src="/assets/4.jpg"  /> 
    </div>
    
  </Carousel>
);
export default CarouselHome;