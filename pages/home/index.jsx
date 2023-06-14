import React from 'react'
import Campaigns from '../components/ui/Campaigns';
import Carousel from '../components/ui/Carousel';
import MenuWrapper from '../components/product/MenuWrapper';
import About from '../components/ui/About';

 const Index = () => {
  return (
    <div >
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About></About>
      
    </div>
  )
}

export default Index;
