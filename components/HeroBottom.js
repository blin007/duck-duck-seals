import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

//import variants
import { containerBot, springFromLeft, springFromRight, fadeInFromUp} from '../variants'

import { TbArrowBigRightLines } from "react-icons/tb";

const HeroBottom = ({ heroData }) => {
  const { title, overlay1, overlay2, cattail, duck, tree, alert, btnText } = heroData

  return (
    <motion.section 
      variants={containerBot}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: false, amount: 0.6 }}
      className='bg-heroBot bg-no-repeat bg-left-bottom min-h-[600px] lg:min-h-[900px] lg:mb-40'
    >
      <motion.div
        className='container mx-auto max-w-[1600px] relative min-h-[800px] lg:min-h-[900px]'
      >
        {/* title */}
        <motion.h1 
          variants={fadeInFromUp}
          className='absolute text-primary font-bold text-center pt-[6.5rem] z-50 w-full'
        >
          {title}
        </motion.h1>
        {/* overlays */}
        <motion.div 
          variants={fadeInFromUp}
          className="-top-[10%] absolute z-20"
        >
          <Image src={overlay1} width={1728} height={694} />
        </motion.div>
        <motion.div 
          variants={fadeInFromUp}
          className="top-0 absolute z-0"
        >
          <Image src={overlay2} width={1728} height={694} />
        </motion.div>

        {/* Environment */}
        <motion.div 
          variants={springFromLeft}
          className="bottom-[30%] left-[20%] absolute"
        >
          <Image src={cattail} width={150} height={127} />
        </motion.div>
        <motion.div 
          variants={springFromRight}
          className="bottom-[5%] right-[20%] absolute"
        >
          <Image src={cattail} width={150} height={127} />
        </motion.div>
        <motion.div 
          variants={springFromLeft}
          className="bottom-[5%] left-[15%] absolute"
        >
          <Image src={cattail} width={150} height={127} />
        </motion.div>
        <motion.div 
          variants={springFromRight}
          className="bottom-[20%] right-[15%] absolute"
        >
          <Image src={tree} width={220} height={247} />
        </motion.div>
        {/* Duck */}
        <motion.div 
          variants={springFromRight}
          className="bottom-[10%] left-0 right-0 mx-auto max-w-[531px] absolute"
        >
          <Image src={duck} width={531} height={385} />
        </motion.div>
        <motion.div 
          variants={springFromLeft}
          className="bottom-[20%] left-[35%] absolute z-10"
        >
          <Image src={alert} width={19} height={116} />
        </motion.div>
        <motion.button 
          variants={fadeInFromUp}
          // initial="initial"
          // animate='animate'
          // whileInView={'animate'}
          // viewport={{ once: false, amount: 0.6 }}
          whileHover={{scale: 1.05}}
          className='btn absolute mx-auto left-0 right-0 max-w-[300px] lg:top-[35%] top-[40%] drop-shadow-2xl z-20'
        >
          {btnText}
          <TbArrowBigRightLines className='text-[30px]'/>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default HeroBottom