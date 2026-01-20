import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Event from './Event'
import News from './News'
import Contact from './Contact'
import WhyChooseUs from './WhyCooseUs'

function Home() {
  return (
    <div>
      <Hero />
      <Event />
      <WhyChooseUs />
      <News />
      <Contact />
      
    </div>
  )
}

export default Home
