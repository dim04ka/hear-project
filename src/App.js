import React, { useState } from 'react'
import Header from '@/page/Header/Header'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import HeaderImage from '@/components/HeaderImage/HeaderImage'
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
        <div style={{ height: 2000 }}></div>
      </UserContext.Provider>
    </div>
  )
}

export default App
