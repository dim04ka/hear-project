import styled from "styled-components";
import bg from "../../helper/bg.png";

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
  padding: 0 15px;
  height: 100%;
`;
export const WrapperBg = styled.div`
  background: ${({ colorBG }) =>
    colorBG ? " rgba(0, 172, 172)" : "transparent"};
  background-image: url(${({ colorBG }) => (colorBG ? bg : "")});
  background-repeat: repeat;
  height: ${({ colorBG }) => (colorBG ? "100px" : "140px")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: height 0.5s, background-color 0.9s;
  z-index: 5;
`;
