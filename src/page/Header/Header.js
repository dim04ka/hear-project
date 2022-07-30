import { useEffect, useState } from 'react'
import TopHeader from '@/components/TopHeader/TopHeader'
import { Wrapper, WrapperBg } from './Header.style'

const Header = () => {
  const [colorBG, setColorBG] = useState()

  const changeBgColor = (e) => {
    setColorBG(window.pageYOffset > 145)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBgColor)
    return () => {
      window.removeEventListener('scroll', changeBgColor)
    }
  }, [])
  return (
    <WrapperBg colorBG={colorBG}>
      <Wrapper>
        <TopHeader />
      </Wrapper>
    </WrapperBg>
  )
}

export default Header
