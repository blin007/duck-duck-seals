import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'
import {container, fadeInFromUp, fadeInFromLeft, fadeInFromRight} from '../variants'

import { TbArrowBigRightLines } from "react-icons/tb";

const Contact = ({ contactData }) => {
  const { duckies, title, form } = contactData

  return (
    <section id="contact" className='bg-accent lg:bg-transparent lg:bg-contact lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[750px] pt-12 max:pb-10 lg:pt-0 relative mb-[10px]'>
      <motion.div 
        variants={container}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.5}}
        className='container mx-auto lg:min-h-[750px] flex flex-col justify-between'
      >
        <motion.h3 
          variants={fadeInFromUp}
          className='lg:absolute lg:top-16 lg:left-40 font-medium text-header text-center'
        >
          {title}
        </motion.h3>
        {/* form container */}
        <div className='lg:mt-40 mt-[20px] flex flex-col lg:flex-row items-center lg:gap-x-10 gap-y-10 lg:gap-y-0 '>
          {/* duckies */}
          <motion.div
            variants={fadeInFromLeft} 
            className= 'hidden lg:flex flex-1 justify-center lg:mt-16'
          >
            <Image src={duckies} width={600} height={350} />
          </motion.div>
          <motion.form 
            variants={fadeInFromRight}
            className='w-full max-w-[550px] bg-white flex-1 rounded-2xl lg:order-2 flex flex-col
            px-[35px] lg:px-[45px] py-[25px] lg:py-[48px] space-y-[40px] drop-shadow-2xl'
          >
            {/* name input */}
            <div className='flex flex-col'>
              <label htmlFor='name' className='font-light mb-[10px]'>{form.name}</label>
              <input
                className='input' 
                type='text' 
                id='name'
                placeholder={form.placeHolderName}
              />
            </div>
            {/* email input */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-light mb-[10px]'>{form.email}</label>
              <input
                className='input' 
                type='text' 
                id='email'
                placeholder={form.placeHolderEmail}
              />
            </div>
            {/* button */}
            <button className='btn self-start hover:bg-accent-hover transition-all duration-300'>
              {form.btnText}
              <TbArrowBigRightLines className='text-[30px]' />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact