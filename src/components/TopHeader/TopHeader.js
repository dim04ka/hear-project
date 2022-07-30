import { useContext } from 'react'
import { UserContext } from '@/App'
import SocialIcons from '@/components/SocialIcons/SocialIcons'
import LogoImage from '@/components/TopHeader/images/logo.svg'
import IconPhone from '@/components/TopHeader/images/phone_icon.svg'
import {
  Logo,
  Wrapper,
  WrapperMenu,
  WrapperContent,
  Phone,
  Icon,
  Number,
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
            <Phone href="tel:+1-847-555-5555">
              <Icon src={IconPhone} />
              <Number>+375 29 65 92 367</Number>
            </Phone>
            <SocialIcons />
          </WrapperContent>
          <MobileButton onClick={handleClick} />
        </Wrapper>
      )}
    </>
  )
}
export default TopHeader
