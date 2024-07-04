import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import WetherForcast from '../components/WetherForcast'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <WetherForcast/>
      {/* <HomeCards/> */}
      <Footer/>
    </div>
  )
}
