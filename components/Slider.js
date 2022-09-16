import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const Slider = ({ facts }) => {
  return (
    <Swiper slidesPerView={1} grabCursor={true} spaceBetween={20} pagination={true} modules={[Pagination]} className="slider">
      {facts.map((f, i) => {
        const { fact } = f
        return (
          <SwiperSlide key={i}>
            <div className='bg-white rounded-lg p-10 py-20 '>
              <p className='font-light hover:drop-shadow-sm'>{fact}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider