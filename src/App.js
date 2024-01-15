import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Features from './component/Features'
import Services from './component/Services'
import Contact from './component/Contact'
import WhyUs from './component/WhyUs'
import Team from './component/Team'
import TeamBuilding from './component/TeamBuilding'
import Global from './component/Global'
import GetApp from './component/GetApp'
import Analytics from './component/Analytics'
import Testimonials from './component/Testimonials'
import Cta from './component/Cta'
import Footer from './component/Footer'


function App() {
  return (
    <div className='flex flex-col gap-5 text-white bg-black md:gap-0'>
      <Header />
      <Home />
      <Features />
      <GetApp />
    <Analytics />

      <Testimonials />
      <Cta />

        <Footer />


    </div>
  )
}

export default App
