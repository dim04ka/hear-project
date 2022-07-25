import {
  Wrapper,
  Title,
  Description,
  Button,
  Content,
} from "@/components/HeaderImage/HeaderImage.style";

const HeaderImage = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Создаю хорошее настроение новым образом</Title>
        <Description>
          Невероятный дизайн ногтей & Великолепные прически{" "}
        </Description>
        <Button>Позвонить мне</Button>
      </Content>
    </Wrapper>
  );
};

export default HeaderImage;
