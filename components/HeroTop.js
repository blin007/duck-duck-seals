import React from 'react'

import Image from 'next/image'
import { motion } from 'framer-motion'

//Import components
import Header from './Header'

import { TbArrowBigRightLines } from "react-icons/tb";

//import framer motion variants
import { container, springFromLeft, springFromRight, fadeInFromUp, overlayTop, overlayBot } from '../variants'

const HeroTop = ({ heroData, headerData, navData }) => {
    const{ title1, title2, overlay1, overlay2, sealImg, diverImg, btnText } = heroData

  return (
    <section className='bg-heroTop bg-no-repeat bg-left-bottom min-h-[500px] lg:min-h-[900px] h-[500px] sm:mb-[40px]'>
      <motion.div 
        variants={container}

        className='container mx-auto max-w-[1600px] relative min-h-[800px] lg:min-h-[950px]'
      >
        <motion.div 
          variants={fadeInFromUp}
          className=""
        >
            <Header headerData={headerData} navData={navData} />
        </motion.div>
        {/* Title for large screens */}
        <motion.h1 
          variants={fadeInFromUp}
          initial="initial"
          // animate="animate"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className='hidden lg:flex justify-center font-bold text-primary text-center pt-[9.5rem] drop-shadow-md'
        >
          {title1}
        </motion.h1>
        {/* Title for small screens */}
        <motion.h1 
          variants={fadeInFromUp}
          initial="initial"
          // animate="animate"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          className='lg:hidden text-primary font-semibold text-center pt-[9.5rem] drop-shadow-md'
        >
          {title2}
        </motion.h1>
        {/* Overlay Images */}
        <motion.div 
          variants={overlayTop}
          initial="initial"
          animate="animate" 
          className='hidden lg:flex -bottom-[12%] absolute -left-[10%] overflow-x-hidden'
        >
          <Image src={overlay1} width={1730} height={900} />
        </motion.div>
        {/* diver image */}
        <motion.div 
          variants={springFromRight}
          initial="initial"
          // animate="animate"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden lg:flex absolute right-[8%] z-mid overflow-x-hidden'
        >
          <Image src={diverImg} width={520} height={520} />
        </motion.div>
        <motion.button 
          variants={fadeInFromUp}
          initial="initial"
          // animate='animate'
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.6 }}
          whileHover={{scale: 1.05}}
          className='lg:hidden btn absolute mx-auto left-0 right-0 max-w-[300px] lg:top-[35%] top-[40%] drop-shadow-2xl z-20'
        >
          {btnText}
          <TbArrowBigRightLines className='text-[30px]'/>
        </motion.button>

        {/* seal image */}
        <motion.div
          variants={springFromLeft} 
          initial="initial"
          // animate="animate"
          whileInView={'animate'}
          viewport={{ once: false, amount: 0.1 }}
          className='hidden lg:flex absolute left-[8%] z-mid overflow-x-hidden'
        >
          <Image src={sealImg} width={520} height={520} />
        </motion.div>
        <motion.div
          variants={overlayBot} 
          initial="initial"
          animate="animate" 
          className='hidden lg:flex -bottom-[28%] absolute -left-[10%] z-20 overflow-x-hidden'
        >
          <Image src={overlay2} width={1730} height={900} />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HeroTop