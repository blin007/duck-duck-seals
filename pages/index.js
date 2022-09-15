//import components
import HeroBottom from '../components/HeroBottom'
import HeroTop from '../components/HeroTop'
import About from '../components/About'
import Facts from '../components/Facts'
import How from '../components/How'
import Resources from '../components/Resources'
import Footer from '../components/Footer'

//import data
import data from '../data.json'

export default function Home() {
  //destructure data json
  const { heroTopData, heroBotData, headerData, navData } = data

  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-background'>
      <HeroTop heroData={heroTopData} headerData={headerData} navData={navData}/>
      {/* Show bottom hero on large screens */}
      <div className='lg:flex hidden'>
        <HeroBottom heroData={heroBotData}/>
      </div>
      
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
      data
    }
  }
}