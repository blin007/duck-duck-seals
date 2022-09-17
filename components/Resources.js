import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {container, fadeInFromDown, fadeInFromUp} from '../variants'

const Resources = ({ resourceData }) => {
  const { title, description, resources } = resourceData

  return (
    <section className='mb-[60px] min-h-[600px]'>
      <motion.div
        variants={container}
        initial="initial"
        whileInView={"animate"} 
        viweport={{once: false, amount: 0.3}}
        className='container mx-auto max-w-[1200px]'
      >
        <div className=''>
          <motion.div variants={fadeInFromUp}>
            <h3 className='text-primary drop-shadow-sm text-center'>{title}</h3>
            <div 
              className='mx-auto bg-white max-w-[550px] max-h-[120px] flex items-center 
                justify-center p-3 border-l-[20px] drop-shadow-sm hover:drop-shadow-2xl hover:scale-105 
                transition-all duration-500 lg:mb-0 mb-10 mt-[60px]'
            >
              <p className=''>{description} </p>
            </div>           
          </motion.div>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:mt-[80px]'>
            {resources.map((resource, i) => {
              return (
                <motion.div
                  variants={fadeInFromDown} 
                  className='flex-1 flex flex-col items-center justify-center sm:mb-[30px]' 
                  key={i}
                >
                  <p className='lg:mb-[20px] mb-[5px]'>{resource.name}</p>
                  <a href={resource.site} target="_blank" rel="noopener noreferrer">
                    <motion.div 
                      initial={{scale: 1}}
                      whileHover={{ scale: 1.05, cursor: 'pointer' }}
                      classname=''>
                      <Image src={resource.logo} width={180} height={180} />
                    </motion.div>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resources