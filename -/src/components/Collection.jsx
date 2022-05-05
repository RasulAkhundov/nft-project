import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Collection() {
  return (
    <section className='collection'>
         <div className='container'>
              <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="section-header__content">
                   <h2>THE COLLECTION</h2>
                   <p>6,666 Unique Digital Bored Apes Trying to Blend With The Norites On The Plygon Blockchain.</p>
              </div>
               <Swiper style={{marginLeft: '5%'}} className="swiper"
                    slidesPerGroup={1}
                    slidesPerView={6}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                         delay: 2000,
                         disableOnInteraction: false
                    }}
                    breakpoints={{
                         1200: {
                              slidesPerView: 6
                         },
                         991: {
                              slidesPerView: 5
                         },
                         768: {
                              slidesPerView: 4
                         },
                         576: {
                              slidesPerView: 3
                         },
                         0: {
                              slidesPerView: 2
                         }
                    }}
                    modules={[Autoplay]}
                    >
                    <SwiperSlide className="swiper-slide"><img style={{borderRadius: '5px'}} src={require('../assets/collection-img/01.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/02.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/03.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/04.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/05.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/06.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
               </Swiper>
               <Swiper style={{margin: '20px 5% 60px 0'}} className="swiper"
                    slidesPerGroup={1}
                    slidesPerView={6}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                         delay: 2000,
                         disableOnInteraction: false
                    }}
                    breakpoints={{
                         1200: {
                              slidesPerView: 6
                         },
                         991: {
                              slidesPerView: 5
                         },
                         768: {
                              slidesPerView: 4
                         },
                         576: {
                              slidesPerView: 3
                         },
                         0: {
                              slidesPerView: 2
                         }
                    }}
                    modules={[Autoplay]}
                    >
                    <SwiperSlide style={{borderRadius: '5px'}} className="swiper-slide"><img src={require('../assets/collection-img/07.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/08.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/09.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/10.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/11.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={require('../assets/collection-img/12.jpg')} className='img-fluid' alt="monkeys"/></SwiperSlide>
               </Swiper>
              <div className="btn-box">
                   <button type='button'>View On Opensea</button>
              </div>
         </div>
    </section>
  )
}

export default Collection;