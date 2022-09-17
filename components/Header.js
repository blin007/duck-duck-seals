import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

//import icons
import { AiOutlineMenu } from "react-icons/ai";

//import components
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = ({ headerData, navData }) => {
    //header at top state
    const [headerTop, setHeaderTop] = useState(false);

    //open the nav mobile menu 
    const [navMobile, setNavMobile] = useState(false)

    //header data
    const { duckIcon, sealIcon, logo} = headerData

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setHeaderTop(true) : setHeaderTop(false)
        })
    })

  return (
    <header 
        className={`${headerTop ? 'bg-white p-2 drop-shadow-xl opacity-40' : 'bg-header p-[30px]'}
        fixed rounded-b-lg w-full left-0 right-0 mx-auto max-w-[70vw]
        lg:max-w-[1100px] z-top flex hover:shadow-2xl hover:scale-105 hover:opacity-100
        lg:justify-around justify-between items-center transition-all duration-500`}
    >
        <div className='flex gap-x-[10px]'>
            <Image src={duckIcon} width={32} height={32} />
            <Image src={logo} width={179.5} height={41.5} />
        </div>
        <div className='hidden lg:flex'>
            <Nav navData={navData} header={headerTop}/>
        </div>
        <div 
            onClick={() => setNavMobile(!navMobile)}
            className='lg:hidden cursor-pointer'
        >
            <AiOutlineMenu className="text-2xl hover:text-white transition-all duration-300"/>
        </div>
        {/* nav mobile - hide on large screens */}
        <div className={`${navMobile ? 'max-h-[154px]' : 'max-h-0'}
        lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden 
        hover:shadow-2xl transition-all duration-300`}>
            <NavMobile navData={navData} />
        </div>
        <div className='hidden lg:flex'>
            <Image src={sealIcon} width={32} height={32} />
        </div>
    </header>
  )
}

export default Header