import styled from "styled-components";
import bgImage from "@/components/HeaderImage/images/bgImage.png";

export const Wrapper = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 110px;
  margin-bottom: 7%;
`;

export const Title = styled.div`
  font-family: "Viaoda Libre";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 15px;

  @media (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  width: 900px;
  margin: 0 auto;
  text-align: center;
  transform: translateY(300px);
  color: white;
`;

export const Description = styled.div`
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;

  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
  margin-bottom: 35px;
`;

export const Button = styled.button`
  background: #f196b7;
  border-radius: 2px;
  width: 250px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: none;
  color: white;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
