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
            <div className='bg-white rounded-2xl p-12 min-h-[100px] h-[175px]'>
              <p className='font-light hover:drop-shadow-sm text-center'>{fact}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider