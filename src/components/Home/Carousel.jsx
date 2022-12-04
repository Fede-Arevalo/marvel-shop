import React from 'react';
import { Carousel } from 'antd';
import '../Home/Carousel.scss'



const CarouselHome = () => (
  <Carousel autoplay>
    <div className='ft1'>
    <img src="https://free4kwallpapers.com/uploads/originals/2020/04/29/marvel-avengers-wallpaper.jpg" width='1550px' height='610' alt="" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </div>
    <div className='ft1'>
      <img src="https://images.hdqwalls.com/wallpapers/marvel-super-war-4k-2020-lh.jpg" width='1550px' height='610' alt="" /> 
    </div>
    <div className='ft1'>     
      <img src="https://images.hdqwalls.com/wallpapers/marvel-super-war-5w.jpg" width='1550px' height='610' alt="" /> 
    </div>
    <div className='ft1'>    
      <img src="https://images.hdqwalls.com/wallpapers/4k-marvel-super-war-qd.jpg" width='1550px' height='610' alt="" /> 
    </div>
  </Carousel>
);
export default CarouselHome;