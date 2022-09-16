import React from 'react'
import Slider from './Slider'

import { motion } from 'framer-motion'

import { container, fadeInFromLeft, fadeInFromRight } from '../variants'

const Facts = ({ factData }) => {
  const { title, facts } = factData
  return (
    <section className='min-h-[200px] mt-[20px] mb-[60px] lg:mb-[120px]'>
      <div className='container mx-auto'>
        <motion.div 
          variants={container}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.5 }}
          className='flex flex-col lg:flex-row items-center justify-center'
        >
          <motion.div
            variants={fadeInFromLeft} 
            className='lg:w-[20%] sm:mb-[20px]'
          >
            <h3 className='text-primary font-bold'>{title}</h3>
          </motion.div>
          <motion.div variants={fadeInFromRight} className='lg:w-[80%] w-[95%]'>
            <Slider facts={facts}/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Facts