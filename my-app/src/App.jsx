import React from 'react'
import Header from "./components/Header";
import Slider from './components/Slider';

function App() {
  const sliderImages = [
    '/images/brand1.png',
    '/images/brand2.png',
];
  return (
    <div>
      <Header></Header>
      <Slider images={sliderImages}></Slider>
    </div>
  )
}

export default App
