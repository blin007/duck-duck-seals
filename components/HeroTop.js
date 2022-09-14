import React from 'react'
import Header from './Header'

const HeroTop = ({ heroData, headerData, navData }) => {
    const{ title, overlay1, overlay2, sealImg, diverImg } = heroData
    console.log("herodata: ", heroData)

  return (
    <section className='bg-heroTop bg-no-repeat bg-left-bottom min-h-[500px] lg:min-h-[900px] lg:mb-50'>
        HeroTop
        <div>
            <Header headerData={headerData} navData={navData} />
        </div>
        <div>
            {title}
        </div>
    </section>
  )
}

export default HeroTop