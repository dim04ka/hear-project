import {
    Wrapper,
    Photo,
    ContentText,
    Label,
    Text,
    TextAbout,
    PoinContainer,
    ScabbardImg,
    SeaImage,
    Line,
    Point,
    LinePoint,
    LinePointContainer
} from "./AboutMe.style";
import PhotoImg from './images/AutorPhoto.png'
import Scabbard from './images/scabbard.svg'
import ImageSea from './images/ImageSea.png'

const AboutMe = () => {
    return (<>
        <Wrapper>
            <LinePointContainer>
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
                <LinePoint />
            </LinePointContainer>

            <Photo src={PhotoImg} />
            <ContentText>
                <Label>
                    <TextAbout>Обо мне</TextAbout>
                    <PoinContainer>
                        <Line />
                        <Point />
                    </PoinContainer>
                    <ScabbardImg src={Scabbard} />
                </Label>
                <Text>Привет, меня завут инна и я мастер парикмахерского искусства, а также мастер маникюра и педекюра. я занимаюсь своим любимым делом более 15 лет, стараюсь никогда не останавливаться на достигнутом, повышая свою профессиональную квалификацию и мастерство.
                </Text>
                <Text> На сегодняшний момент я принимаю своих любимых клиентов в своей уютной квартире, в шаговой доступности от метро, куда и приглашаю вас.
                </Text>
            </ContentText>
        </Wrapper>
        <SeaImage src={ImageSea} />
    </>
    );
};

export default AboutMe;
