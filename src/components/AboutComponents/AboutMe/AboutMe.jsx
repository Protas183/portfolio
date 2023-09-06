import { ContAboutMe, Title, UnderTitle, Paragraph, Img, SectionAboutMe, Describe } from './AboutMe.styled';

export const AboutMe = () => {

    return (
        <SectionAboutMe>
            <ContAboutMe>
                <Describe>
                    <Title>It`s me</Title>
                    <UnderTitle>
                        I`m a web developer from Kremenchug
                    </UnderTitle>
                    <Paragraph>
                        From 2022 dived into the sea It with his head
                    </Paragraph>
                </Describe>                
                <Img src="https://klike.net/uploads/posts/2020-01/1579681624_20.jpg" width={550} />
            </ContAboutMe>
        </SectionAboutMe>
        
    )
}