import React, { useState } from 'react'
import Header from '@/page/Header/Header'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import HeaderImage from '@/components/HeaderImage/HeaderImage'
import AboutMe from '@/components/AboutMe/AboutMe'
import './style.css';
import Footer from '@/page/Footer/Footer'

export const UserContext = React.createContext()

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <UserContext.Provider value={[isOpen, setIsOpen]}>
        <MobileMenu />
        <Header />
        <HeaderImage />
        <AboutMe />
        <div style={{ height: 2000 }}></div>
        <MobileMenu />

        <Footer />

      </UserContext.Provider>
    </div>
  )
}

export default App
