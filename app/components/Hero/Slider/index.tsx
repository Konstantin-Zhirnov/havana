'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css'

import styles from './Slider.module.css'

const Slider = () => (
  <Swiper
    modules={[Autoplay, EffectFade]}
    slidesPerView={1}
    effect="fade"
    autoplay={{
      delay: 10000,
      disableOnInteraction: false,
    }}
  >
    <SwiperSlide>
      <img src="/assets/1.webp" alt="Havana classic car" className={styles.image} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/2.webp" alt="Havana classic car" className={styles.image} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/3.webp" alt="Havana classic car" className={styles.image} />
    </SwiperSlide>
  </Swiper>
)

export { Slider }
