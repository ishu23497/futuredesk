import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import MobileShowcase from './components/MobileShowcase'
import QuickCommerceSection from './components/QuickCommerceSection'
import UberCloneSection from './components/CloneSection'
import ZomatoSwiggySection from './components/ZomatoSwiggySection'

const App = () => {
  return (
    <div>
      <Hero />
      <Section />
      <MobileShowcase />
      <QuickCommerceSection />
      <UberCloneSection />
      <ZomatoSwiggySection />
    </div>
  )
}

export default App
