import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    margin: 0 ,auto;
    margin-top: 200px;
`;

export const PoinContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

`;
export const Line = styled.div`
    width: 100px;
    height:1px;
    border-top: 1px solid rgba(27, 70, 105, 0.45);
`
export const Point = styled.div`
    width: 310px;
    height:1px;
    border-top: 2px dashed rgba(27, 70, 105, 0.45);
`
export const Text = styled.span`
    margin-left:26px ;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    color: #1B4669;
`
export const Title = styled.span`
    margin-bottom: 70px;
`
export const Scissors = styled.img`
    width: 80px;
    height: 40px;
`
export const CardWrapper = styled.div`
    display: flex;
    gap: 30px
`