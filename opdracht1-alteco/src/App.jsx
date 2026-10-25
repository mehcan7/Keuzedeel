import { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Services from './components/Services'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // Luistert naar het resizen van het venster, geen input, zet isMobile op basis van de schermbreedte
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Op mobiel staat Header boven TopBar; dit via JS in plaats van CSS, anders beperkt een wrapper-div de hoogte waarbinnen de sticky header kan blijven plakken */}
      {isMobile ? (
        <>
          <Header />
          <TopBar />
        </>
      ) : (
        <>
          <TopBar />
          <Header />
        </>
      )}

      <Hero />
      <Offers />
      <Services />
    </>
  )
}

export default App
