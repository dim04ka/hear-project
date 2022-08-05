import SocialIcons from '@/components/SocialIcons/SocialIcons'
import Phone from '@/components/Phone/Phone'
import { useIsMobile } from '@/hooks'
import {
  FooterStyled,
  MenuStyled,
  MenuItemStyled,
  FooterContinerStyled,
  ContactStyled,
  FooterMobileStyled,
  FooterMobileMenuStyled,
  SocialIconsStyle,
} from './Footer.style'
import LogoSvg from './images/logo.svg'

const text = [
  { id: 1, text: 'Цены' },
  { id: 2, text: 'Косметика' },
  { id: 3, text: 'Галерея работ' },
]

const Footer = () => {
  const isMobile = useIsMobile();

  console.log('isMobile', isMobile)
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
      <FooterMobileStyled>
        <img src={LogoSvg} alt="logo" />
        <FooterMobileMenuStyled>
          <ul>
            <li>Обо мне</li>
            <li>Что я могу вам предложить </li>
            <li>Услуги и цены</li>
          </ul>
          <ul>
            <li>Косметика </li>
            <li>Галерея</li>
            <li>Контакты</li>
          </ul>
        </FooterMobileMenuStyled>
        <SocialIconsStyle>
          <SocialIcons />
        </SocialIconsStyle>

        <Phone />
      </FooterMobileStyled>
    </FooterStyled>
  )
}

export default Footer
