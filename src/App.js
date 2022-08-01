import React, { useState } from 'react';
import Header from '@/page/Header/Header';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import HeaderImage from '@/components/HeaderImage/HeaderImage'
import CardContent from './components/CardContent/CardContent'
import './style.css';

export const UserContext = React.createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={[isOpen, setIsOpen]}>
        <Header />
        <HeaderImage />
        <CardContent />
        <div style={{ height: 2000 }}></div>
        <MobileMenu />
      </UserContext.Provider>
    </div>
  );
}

export default App;
