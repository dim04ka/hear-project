import styled from 'styled-components'
import { colors } from '@/consts/colors'

export const FooterStyled = styled.div`
  background: ${colors.green};
  padding: 50px 0;

  & > div:nth-child(2) {
    display: none;
  }

  @media (max-width: 960px) {
    padding: 20px 15px;

    & > div:nth-child(1) {
      display: none;
    }
    & > div:nth-child(2) {
      display: flex;
    }
  }
`
export const FooterContinerStyled = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
    justify-content: space-between;
}

  @media (max-width: 1180px) {
    width: 100%;
  }
`

export const MenuStyled = styled.div`
  display: flex;
  & a:not(:last-child) {
    margin-right: 45px;
  }
`
export const MenuItemStyled = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${colors.white};
`

export const ContactStyled = styled.div`
  display: flex;
  align-items: center;
`
export const FooterMobileStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 103px;
    height: 50px;
  }

  & ul {
    width: 50%;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      color: ${colors.white};
      font-size: 14px;
      padding: 10px 0;
      font-weight: 300;
    }
  }
`

export const FooterMobileMenuStyled = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 35px;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(81, 100, 124, 0.38);
    position: absolute;
    bottom: -15px;
  }
`

export const SocialIconsStyle = styled.div`
  margin-bottom: 20px;
`
