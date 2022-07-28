import {
    Wrapper,
    Photo,
    ContentText,
    Label,
    Text,
    TextAbout,
    PointImg,
    ScabbardImg,
    SeaImage,
} from "./index.style";
import PhotoImg from './images/AutorPhoto.png'
import Point from './images/point.svg'
import Scabbard from './images/scabbard.svg'
import ImageSea from './images/ImageSea.png'

const AboutMe = () => {
    return (<>
        <Wrapper>

            <Photo src={PhotoImg} />

            <ContentText>
                <Label>
                    <TextAbout>Обо мне</TextAbout>
                    <PointImg src={Point} />
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
