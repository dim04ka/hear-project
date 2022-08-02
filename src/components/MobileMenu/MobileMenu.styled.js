import styled from 'styled-components'
import bg from '@/helper/bg.png'
import MobileButtonIconOpen from '@/components/TopHeader/images/MobileButtonIconOpen.svg'

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  background-image: url('${bg}');
  z-index: 10;
`

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`

export const Logo = styled.img`
  width: 155px;
  height: 70px;
`

export const MobileButton = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('${MobileButtonIconOpen}');
`

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MenuItem = styled.a`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #51647c;
  padding: 15px 5px;
  padding-left: 20px;

  &:hover {
    cursor: pointer;
    background: #ff6ca2;
    color: white;
  }
`

export const Separate = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(81, 100, 124, 0.5);
  padding: 0 5px;
`

export const WrapperIcons = styled.div`
  display: flex;

  padding: 20px 0 0 20px;

  & div div {
    width: 40px;
    height: 40px;

    & img {
      width: 25px;
      height: 25px;
    }
  }
`
