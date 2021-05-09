import {useEffect,useState} from 'react';

import axios from 'axios';
import {Header,Hero , Services,Portfolio,About,Footer,Contact,Testimonials} from '../Components'

import AOS from 'aos';

const Home =() => {
 
 useEffect(() => {
   AOS.init()
   if(localStorage.getItem('auth')){
     
   }
 }, [])

  return (
    <div className="relative">  
      <Header />
      <Hero data="home" />
      <Services data="services"/>
      <Portfolio data="portfolio"/>
      <About data='about' />
      <Testimonials data='testimonials' />
      <Contact data='contact' />
      <Footer />
    </div>
  );
}

export default Home;
