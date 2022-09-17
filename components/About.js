import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { container, fadeInFromUp, springFromRight } from '../variants'

const About = ({ aboutData }) => {
  const { title, description1, description2, description3, boxDescription, duck} = aboutData

  return (
    <section className='lg:mb-[180px] mb-[60px]' id="ecology">
      <motion.div
        variants={container}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.4 }} 
        className='container mx-auto'
      >
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px] gap-y-[10px] justify-center items-center'>
          <motion.div variants={fadeInFromUp} className='flex-1 font-bold'>
            <h3 className='text-primary'>{title}</h3>
            <p className='font-light leading-[30px] max-w-[600px] lg:mt-[40px] mt-[20px] mb-[20px]'>
              {description1}
            </p>
            <p className='font-light leading-[30px] max-w-[600px] mb-[20px]'>
              {description2}
            </p>
            <p className='font-light leading-[30px] max-w-[600px] lg:mb-[50px] mb-[20px]'>
              {description3}
            </p>
            {/* text box */}
            <div
              className='bg-accent max-w-[600px] h-[150px] flex items-center 
              justify-center pl-12 border-l-[10px] drop-shadow-sm hover:drop-shadow-2xl hover:scale-105 
              transition-all duration-500 lg:mb-0 mb-10'>
              <p className='font-medium leading-normal lg:leading-[32px] text-white'>
                {boxDescription}
              </p>
            </div>
          </motion.div>
          <motion.div 
            variants={springFromRight}
            className='flex-1 flex justify-center'
          > 
            <Image src={duck} width={381} height={422} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About