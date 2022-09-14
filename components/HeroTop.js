import React from 'react'
import Header from './Header'

const HeroTop = ({ heroData, headerData, navData }) => {
    const{ title, overlay1, overlay2, sealImg, diverImg } = heroData
    console.log("herodata: ", navData)

  return (
    <section className='bg-heroTop bg-no-repeat bg-left-bottom min-h-[500px] lg:min-h-[900px] lg:mb-50'>
      <div className='container mx-auto'>
        <div className="">
            <Header headerData={headerData} navData={navData} />
        </div>
        <div className='border-solid border-2 border-green-500 pt-[8rem]'>
            {title}
        </div>
      </div>

    </section>
  )
}

export default HeroTop