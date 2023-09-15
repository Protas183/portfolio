import { ContAboutMe, Title, UnderTitle, Paragraph, Img, SectionAboutMe, Describe, Span } from './AboutMe.styled';
import { animationTextAbout, animationImgAbout } from '../animation';
import Photo_Profile from '../../../Photo/Photo_Profile.jpg'

export const AboutMe = () => {



return (
  <SectionAboutMe
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}>
    <ContAboutMe>
        <Describe>
            <Title custom={1} variants={animationTextAbout}>It`s me</Title>
            <UnderTitle custom={2} variants={animationTextAbout}>
                Welcome to my portfolio
            </UnderTitle>
            <Paragraph custom={3} variants={animationTextAbout}>
                Mi name is <Span>Artem</Span>,
            </Paragraph>
            <Paragraph custom={4} variants={animationTextAbout}>
                I`m <Span>Frontend Developer</Span>
            </Paragraph>
        </Describe>
        <Img variants={animationImgAbout} src={Photo_Profile} width={550} alt="Foto"/>
    </ContAboutMe>
  </SectionAboutMe>
)
}
