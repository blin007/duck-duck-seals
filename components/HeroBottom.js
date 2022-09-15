import React from 'react'

import Image from 'next/image'

const HeroBottom = ({ heroData }) => {
  const { title, overlay1, overlay2, cattail, duck, tree, alert } = heroData

  return (
    <section className='bg-heroBot bg-no-repeat bg-left-bottom min-h-[600px] lg:min-h-[800px] lg:mb-40'>
      <div className='container mx-auto max-w-[1600px] relative min-h-[800px] lg:min-h-[850px]'>
        <h1 className='absolute text-light font-bold text-center pt-[6.5rem] z-50 w-full'>
          {title}
        </h1>
        <div className="-top-[10%] absolute z-20">
          <Image src={overlay1} width={1728} height={694} />
        </div>
        <div className="top-0 absolute z-0">
          <Image src={overlay2} width={1728} height={694} />
        </div>
        <div className="bottom-[20%] left-[35%] absolute z-10">
          <Image src={alert} width={19} height={116} />
        </div>
        <div className="bottom-[10%] left-0 right-0 mx-auto max-w-[531px] absolute">
          <Image src={duck} width={531} height={385} />
        </div>
        <div className="bottom-[30%] left-[20%] absolute">
          <Image src={cattail} width={150} height={127} />
        </div>
        <div className="bottom-[5%] right-[20%] absolute">
          <Image src={cattail} width={150} height={127} />
        </div>
        <div className="bottom-[5%] left-[15%] absolute">
          <Image src={cattail} width={150} height={127} />
        </div>
        <div className="bottom-[20%] right-[15%] absolute">
          <Image src={tree} width={220} height={247} />
        </div>
      </div>
    </section>
  )
}

export default HeroBottom