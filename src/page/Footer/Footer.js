import SocialIcons from '@/components/SocialIcons/SocialIcons'
import Phone from '@/components/Phone/Phone'
import {
  FooterStyled,
  MenuStyled,
  MenuItemStyled,
  FooterContinerStyled,
  ContactStyled,
} from './Footer.style'
import LogoSvg from './images/logo.svg'

const text = [
  { id: 1, text: 'Цены' },
  { id: 2, text: 'Косметика' },
  { id: 3, text: 'Галерея работ' },
]

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContinerStyled>
        <MenuStyled>
          {text.map(({ id, text }) => (
            <MenuItemStyled key={id} href={text}>
              {text}
            </MenuItemStyled>
          ))}
        </MenuStyled>
        <img src={LogoSvg} alt="logo" />
        <ContactStyled>
          <Phone />
          <SocialIcons />
        </ContactStyled>
      </FooterContinerStyled>
    </FooterStyled>
  )
}

export default Footer
