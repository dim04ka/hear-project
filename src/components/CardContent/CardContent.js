import React from 'react'
import Card from '../Card/Card';
import Image1 from './images/Rectangle 110-1.png'
import Image2 from './images/Rectangle 110-2.png'
import Image3 from './images/Rectangle 110-3.png'
import {
    Title,
    PoinContainer,
    Line,
    Point,
    Container,
    Text,
    Scissors,
    CardWrapper,
} from "./CardContent.style";
import IconScissors from './images/scissors.svg'

const CardContent = () => {
    return (
        <Container>
            <Title>
                <PoinContainer>
                    <Scissors src={IconScissors} />
                    <Line />
                    <Point />
                    <Text>Что я могу вам предложить </Text>
                </PoinContainer>
            </Title>
            <CardWrapper>
                <Card
                    image={Image1}
                    title='Парикмахерские услуги'
                    text='В своей работе я использую только высококачественные профессиональные средства для волос, которые помогут закрасить седину, сделать природный оттенок волос ярче или кардинально сменить образо' />
                <Card
                    image={Image2}
                    title='Парикмахерские услуги'
                    text='В своей работе я использую только высококачественные профессиональные средства для волос, которые помогут закрасить седину, сделать природный оттенок волос ярче или кардинально сменить образо' />
                <Card
                    image={Image3}
                    title='Парикмахерские услуги'
                    text='В своей работе я использую только высококачественные профессиональные средства для волос, которые помогут закрасить седину, сделать природный оттенок волос ярче или кардинально сменить образо' />
            </CardWrapper>
        </Container>
    )
}
export default CardContent;