import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const images = [
  'https://www.rainbowruiruresort.com/assets/images/offers/Baby shower AD.jpg',
  'https://www.rainbowruiruresort.com/assets/images/offers/Birthday Package AD.jpg',
  'https://www.rainbowruiruresort.com/assets/images/offers/Graduation Package AD.jpg',
  'https://www.rainbowruiruresort.com/assets/images/offers/Party Package AD.jpg',
  'https://www.rainbowruiruresort.com/assets/images/offers/821558520853.jpg',
]

export default function OffersSlider(){
  return (
    <section className="offers">
      <div className="container">
        <h2>Experiences & Offers</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="slide" style={{backgroundImage:`url(${src})`}} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
