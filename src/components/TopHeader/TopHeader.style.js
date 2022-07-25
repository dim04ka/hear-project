import styled from "styled-components";
import MobileButtonIcon from "@/components/TopHeader/images/MobileButton.svg";
import MobileButtonIconOpen from "@/components/TopHeader/images/MobileButtonIconOpen.svg";

export const Logo = styled.img`
  width: 231px;
  height: 105px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-self: stretch;
  font-size: 30px;
  color: #1b4669;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 15px;
`;

export const Phone = styled.a`
  transition: all 0.3s;
  display: flex;
  margin-right: 35px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  padding: 15px;

  &:hover {
    background: white;
    box-shadow: 10px 10px 30px 10px rgb(161 161 161 / 28%);
  }
`;
export const Icon = styled.img`
  margin-right: 5px;
`;
export const Number = styled.span`
  font-family: "IBM Plex Serif";
  color: #1b4669;
`;
export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Link = styled.a``;

export const MenuItem = styled.div`
  position: relative;
  padding: 0 18px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: #ff6ca2;
    color: white;
    cursor: pointer;
  }
`;

export const Item = styled.span`
  position: relative;
  z-index: 5;
`;

export const MobileButton = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  background-image: url("${MobileButtonIcon}");
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    background-image: url("${MobileButtonIconOpen}");
  }

  @media (max-width: 990px) {
    display: block;
  }
`;
