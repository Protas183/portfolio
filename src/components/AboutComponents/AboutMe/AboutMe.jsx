import { ContAboutMe, Title, UnderTitle, Paragraph, Img, SectionAboutMe, Describe, Span } from './AboutMe.styled';
import Photo_Profile from '../../../Photo/Photo_Profile.jpg'

export const AboutMe = () => {

    return (
        <SectionAboutMe>
            <ContAboutMe>
                <Describe>
                    <Title>It`s me</Title>
                    <UnderTitle>
                        Welcome to my portfolio
                    </UnderTitle>
                    <Paragraph>
                        Mi name is <Span>Artem</Span>,
                    </Paragraph>
                    <Paragraph>
                        I`m <Span>Frontend Developer</Span>
                    </Paragraph>
                </Describe>
                <Img src={Photo_Profile} width={550} alt="Foto"/>
            </ContAboutMe>
        </SectionAboutMe>

    )
}
