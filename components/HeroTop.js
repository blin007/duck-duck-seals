import React from 'react'

import Image from 'next/image'
import { motion } from 'framer-motion'

//Import components
import Header from './Header'

//import framer motion variants
import { container, sealHero, diverHero, fadeInFromDown, overlayTop, overlayBot } from '../variants'

const HeroTop = ({ heroData, headerData, navData }) => {
    const{ title1, title2, overlay1, overlay2, overlayTest, sealImg, diverImg } = heroData
    console.log("herodata: ", navData)

  return (
    <section className='bg-heroTop bg-no-repeat bg-left-bottom min-h-[600px] lg:min-h-[900px] lg:mb-40 overflow-x-hidden'>
      <motion.div 
        variants={container}
        initial="initial"
        animate="animate"
        className='container mx-auto min-h-[800px] lg:min-h-[950px] '
      >
        <motion.div 
          variants={fadeInFromDown}
          className=""
        >
            <Header headerData={headerData} navData={navData} />
        </motion.div>
        {/* Title for large screens */}
        <motion.h1 
          variants={fadeInFromDown}
          className='hidden lg:flex justify-center text-primary max-w-[1280px] text-center pt-[9.5rem]'
        >
          {title1}
        </motion.h1>
        {/* Title for small screens */}
        <motion.h1 
          variants={fadeInFromDown}
          className='lg:hidden text-primary max-w-[1280px] text-center pt-[9.5rem]'
        >
          {title2}
        </motion.h1>
        {/* Overlay Images */}
        <motion.div 
          variants={overlayTop}
          className='hidden lg:flex -bottom-[30%] absolute -left-[10%] overflow-x-hidden'
        >
          <Image src={overlay1} width={1730} height={900} />
        </motion.div>
        <motion.div 
          variants={diverHero}
          className='hidden lg:flex absolute right-[8%] z-mid overflow-x-hidden'
        >
          <Image src={diverImg} width={520} height={520} />
        </motion.div>
        <motion.div
          variants={sealHero} 
          className='hidden lg:flex absolute left-[8%] z-mid overflow-x-hidden'
        >
          <Image src={sealImg} width={520} height={520} />
        </motion.div>
        <motion.div
          variants={overlayBot} 
          className='hidden lg:flex -bottom-[45%] absolute -left-[10%] z-20 overflow-x-hidden'
        >
          <Image src={overlay2} width={1730} height={900} />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HeroTop