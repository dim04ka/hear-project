import React, { useState } from 'react'
import Header from '@/page/Header/Header'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import HeaderImage from '@/components/HeaderImage/HeaderImage'
import Footer from '@/page/Footer/Footer'
import './style.css'

export const UserContext = React.createContext()

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <UserContext.Provider value={[isOpen, setIsOpen]}>
        <MobileMenu />
        <Header />
        <HeaderImage />
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App
