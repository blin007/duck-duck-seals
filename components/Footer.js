import React from 'react'

import Image from 'next/image'

import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import { motion } from 'framer-motion'

import { fadeInFromUp } from '../variants'

const Footer = ({ footerData }) => {
    const { logo } = footerData

  return (
    <motion.footer 
      variants={fadeInFromUp}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.5 }}
      className='h-[100px]'
    >
      <div className='container mx-auto'>
        <div className='ml-[10px] flex items-center justify-between'>
          <div className='flex items-center gap-x-[10px]'>
            <Image src={logo} width={179.5} height={41.5} />
            <p>Copyright &copy;</p>
          </div>
          {/* socials */}
          <div className='flex gap-x-[20px]'>
            <a href='https://github.com/blin007' target="_blank" rel="noopener noreferrer">
              <div classname=''>
                <BsGithub className='text-[30px]' />
              </div>
            </a>
            {/* <a href='/' target="_blank" rel="noopener noreferrer">
              <div classname=''>
                <BsLinkedin />
              </div>
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div classname=''>
                <BsFacebook />
              </div>
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div classname=''>
                <BsInstagram />
              </div>
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div classname=''>
                <BsTwitter />
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer