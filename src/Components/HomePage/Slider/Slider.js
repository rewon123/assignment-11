import first from '../../../creative-agency/images/carousel-1.png'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  const [sliderImg, setSliderImg] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/examples`)
      .then(response => response.json())
      .then(data => {setSliderImg(data)
        // console.log(data);
      })
  }, [])


  return (
    <div style={{ backgroundColor: '#111430' }} >
      <div className="container">
        <div className="text-center">
          <h1 style={{ color: 'white' }}>Here are some of our works</h1>
        </div>
        <Swiper
          spaceBetween={400}
          slidesPerView={3}

        >
          {
            sliderImg.map(slider => <SwiperSlide key={slider._id}> <img src={slider.img} style={{ width: '465.49px', margin: '50px',height: '334.7px'}} alt="" /><br /> </SwiperSlide>

            )
          }



          {/* 
          <SwiperSlide><img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide> 
          <SwiperSlide><img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />
          <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />
          <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />
          <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />
          <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br />
          <SwiperSlide> <img src={first} style={{ width: '465.49px', margin: '50px' }} alt="" /> </SwiperSlide><br /> */}


        </Swiper>
      </div>
    </div>
  );
}

export default Slider;