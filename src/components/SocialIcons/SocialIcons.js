import { Wrapper, IconInstagram, IconViber, WrapperIcon } from './SocialIcons.style';
import InstagramIcon from './images/instagram.svg';
import ViberIcon from './images/viber.svg';

const SocialIcons = () => {
  return (
    <Wrapper>
      <WrapperIcon>
        <IconInstagram src={InstagramIcon} />
      </WrapperIcon>
      <WrapperIcon>
        <IconViber src={ViberIcon} />
      </WrapperIcon>
    </Wrapper>
  );
};

export default SocialIcons;
