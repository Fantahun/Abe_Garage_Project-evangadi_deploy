import React from 'react';
import PageHeader from '../components/General/PageHeader/PageHeader';
import Banner from '../components/General/Banner/Banner';
import Experience from '../components/General/Experience/Experience';
import FeaturedServices from '../components/General/FeaturedServices/FeaturedServices';
import WhyChooseUs from '../components/General/WhyChooseUs/WhyChooseUs';
import VideoBanner from '../components/General/VideoBanner/VideoBanner';
import CTA from '../components/General/CTA/CTA';

function Home(props) {
  return (
    <div>
      <Banner  />
      <Experience />
      <FeaturedServices />
      <WhyChooseUs /> 
      <VideoBanner />
      <CTA />
      
    </div>
  );
}

export default Home;