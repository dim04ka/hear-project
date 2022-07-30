import { useContext } from 'react'
import { UserContext } from '@/App'
import SocialIcons from '@/components/SocialIcons/SocialIcons'
import LogoImage from '@/components/TopHeader/images/logo.svg'
import Phone from '@/components/Phone/Phone'
import {
  Logo,
  Wrapper,
  WrapperMenu,
  WrapperContent,
  Link,
  MenuItem,
  Item,
  MobileButton,
} from './TopHeader.style'

const TopHeader = () => {
  const menuList = [
    { id: 1, name: 'цены' },
    { id: 2, name: 'косметика ' },
    { id: 3, name: 'контакты' },
    { id: 4, name: 'Галерея' },
  ]

  const [isOpen, setIsOpen] = useContext(UserContext)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {!isOpen && (
        <Wrapper>
          <Link href="/">
            <Logo src={LogoImage} />
          </Link>
          <WrapperContent>
            <WrapperMenu>
              {menuList.map(({ id, name }) => (
                <MenuItem key={id}>
                  <Item>{name}</Item>
                </MenuItem>
              ))}
            </WrapperMenu>
            <Phone />
            <SocialIcons />
          </WrapperContent>
          <MobileButton onClick={handleClick} />
        </Wrapper>
      )}
    </>
  )
}
export default TopHeader
