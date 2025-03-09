import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturedProperties from './FeaturedProperties';
import PopularProperties from './PopularProperties';
import bgImage from "../assets/Frame 9325.png";
import Footer from './Footer';
import { useState } from 'react';


const Layout = () => {

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [searchParams, setSearchParams] = useState(null);


  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <HeroSection
        location={location}
        setLocation={setLocation}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        onSearch={setSearchParams}
      />
      <FeaturedProperties
        location={location}
        propertyType={propertyType}
        bedrooms={bedrooms}
        searchParams={searchParams}
      />
      <PopularProperties />
      <Footer />
    </div>
  );
}

export default Layout