import Head from 'next/head'
import Image from 'next/image'

//import components
import HeroBottom from '../components/HeroBottom'
import HeroTop from '../components/HeroTop'
import About from '../components/About'
import Facts from '../components/Facts'
import How from '../components/How'
import Resources from '../components/Resources'
import Footer from '../components/Footer'

//import data
// import heroTopData from '../data.json'
// import heroBotData from '../data.json'
// import headerData from '../data.json'
// import navData from '../data.json'
import { heroTopData, heroBotData, headerData, navData } from '../data.json'

export default function Home() {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-background'>
      <HeroTop heroData={heroTopData} headerData={headerData} navData={navData}/>
      <HeroBottom heroData={heroBotData}/>
      <About />
      <Facts />
      <How />
      <Resources />
      <Footer />
    </div>
  )
}

// fetch data.json
export const getStaticProps = async () => {
  return {
    props: {
      heroTopData,
      heroBotData,
      headerData,  
      navData,
    }
  }
}