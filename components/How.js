import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { container, fadeInFromLeft, fadeInFromRight} from '../variants'

const How = ({ howData }) => {
  const { title, description, seal } = howData 
  return (
    <section className='mb-[60px] lg:mb-[100px]'>
      <motion.div
        variants={container}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.5 }} 
        className='container mx-auto'
      >
        <div className='flex flex-col lg:flex-row items-center justify-end'>
          <motion.div 
            variants={fadeInFromLeft}
            className='flex-1 flex justify-center '
          >
            <Image src={seal} width={381} height={422} />
          </motion.div>
          <motion.div 
            variants={fadeInFromRight}
            className='flex-1'
          >
            {/* <div className='max-w-[400px]'> */}
              <h3 className='text-primary flex justify-center lg:justify-end'>{title}</h3>
              <p className='lg:mt-[40px] mt-[20px] leading-[35px] text-center lg:text-right'>{description}</p>
            {/* </div> */}

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default How