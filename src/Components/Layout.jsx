import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturedProperties from './FeaturedProperties';
import PopularProperties from './PopularProperties';
import bgImage from "../assets/Frame 9325.png";
import Footer from './Footer';


const Layout = () => {
  return (
    <div className='bg-cover bg-center' style={{backgroundImage: `url(${bgImage})`}}>
        <Header />
        <HeroSection />
        <FeaturedProperties />
        <PopularProperties />
        <Footer />
    </div>
  )
}

export default Layout