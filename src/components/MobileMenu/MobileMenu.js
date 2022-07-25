import { useContext } from "react";
import { UserContext } from "@/App";
import LogoImage from "@/components/TopHeader/images/logo.svg";
import IconPhone from "@/components/TopHeader/images/phone_icon.svg";
import { MENU } from "@/consts/mobileMenu";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import {
  MobileMenuWrapper,
  Block,
  Logo,
  MobileButton,
  Phone,
  Icon,
  Number,
  WrapperMenu,
  MenuItem,
  Separate,
  WrapperIcons,
} from "./MobileMenu.styled";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useContext(UserContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    isOpen && (
      <MobileMenuWrapper onClick={handleClick}>
        <Block>
          <Logo src={LogoImage} />
          <MobileButton />
        </Block>
        <Block>
          <Phone href="tel:+1-847-555-5555">
            <Icon src={IconPhone} />
            <Number>+375 29 65 92 367</Number>
          </Phone>
        </Block>
        <Block>
          <WrapperMenu>
            {MENU.map(({ id, title }) => (
              <MenuItem key={id}>{title}</MenuItem>
            ))}
          </WrapperMenu>
        </Block>
        <Separate />
        <WrapperIcons>
          <SocialIcons />
        </WrapperIcons>
      </MobileMenuWrapper>
    )
  );
};

export default MobileMenu;
