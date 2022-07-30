import styled from 'styled-components'
import { colors } from '@/consts/colors'

export const FooterStyled = styled.div`
  background: ${colors.green};
  padding: 50px 0;
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
