import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
  margin: 0 auto;
  width: 1110px;
  height: 500px;
  margin-bottom: 45px;
  display: flex;

`;

export const Photo = styled.img`
  width: 475px;
  height: 500px;
  z-index: 2;
  margin-right:96px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
`;

export const TextAbout = styled.h3`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  text-transform: capitalize;
  color: #1B4669;
  margin: 0px;
  margin-right: 15px;
  margin-bottom: 25px;
`;

export const PointImg = styled.img`
  width:287px;
`;

export const ScabbardImg = styled.img`
  width: 80px;
  height: 40px;
`;

export const Text = styled.p`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  text-transform: capitalize;
  color: #51647C;
  margin: 0px;
  margin-bottom: 10px;
`;

export const SeaImage = styled.img`
  width: 1110px;
  height: 400px;
  display: block;
  margin: 0 auto;
`;
export const PoinContainer = styled.div`
display: flex;

`;
export const Line = styled.div`
width: 75px;
height:1px;
border-top: 1px solid rgba(27, 70, 105, 0.45);
`
export const Point = styled.div`
width: 210px;
height:1px;
border-top: 2px dashed rgba(27, 70, 105, 0.45);
`
export const LinePointContainer = styled.div`
    position: absolute;
    width: 474px;
    left: -167px;
    top: 152px;
`
export const LinePoint = styled.div`
border-top: 3px dotted rgba(29, 153, 153, 0.25);
margin-bottom: 20px;
height: 0px;
`