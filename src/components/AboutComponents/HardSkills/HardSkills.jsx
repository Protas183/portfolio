import {Describe, HardSkillsBlock, Paragraph, SkillsContainer, ListHardSkills, TitleHardSkills, SkillsUl, SkillsLi, Title } from "./HardSkills.styled"


export const HardSkills = () => {

    return (
      <HardSkillsBlock>
        <SkillsContainer>
          <Describe>
            <Title>About me</Title>
            <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro sequi quo consectetur? Quaerat magni sit cum et officiis libero explicabo unde pariatur necessitatibus autem vero voluptas fugit ipsam ullam neque quos veritatis harum, in nisi! Quibusdam atque nam voluptates excepturi expedita amet laborum accusantium consequuntur tempora. Consequuntur, iste voluptatem provident ea libero vitae dolorem ullam debitis quis totam soluta unde, cupiditate tenetur ipsum repellendus recusandae molestiae quas ipsa expedita earum! Commodi ipsum cupiditate voluptas maxime ad qui quibusdam unde sapiente animi similique dolor minus, soluta assumenda nihil consequatur facilis quod ex velit facere magnam quam autem magni veniam non.</Paragraph>
          </Describe>
          <ListHardSkills>
            <TitleHardSkills>My Hard skills</TitleHardSkills>
            <SkillsUl>
              <SkillsLi>HTML</SkillsLi>
              <SkillsLi>CSS</SkillsLi>
              <SkillsLi>SASS</SkillsLi>
              <SkillsLi>GIT</SkillsLi>
              <SkillsLi>BEM</SkillsLi>
              <SkillsLi>JavaScript</SkillsLi>
              <SkillsLi>React</SkillsLi>
              <SkillsLi>MongoDB</SkillsLi>
              <SkillsLi>RestAPI</SkillsLi>
              <SkillsLi>Node.js</SkillsLi>
            </SkillsUl>
          </ListHardSkills>
        </SkillsContainer>
      </HardSkillsBlock>

    )
}

