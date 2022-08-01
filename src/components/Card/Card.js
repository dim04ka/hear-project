import React from 'react'
import {
    Wrapper, Image, Title, Text
} from "./Card.style";
const Card = ({ image, title, text }) => {
    return (
        <Wrapper>
            <Image src={image} />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Wrapper>
    )
}
export default Card;