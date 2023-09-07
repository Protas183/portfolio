import React, {Component} from "react";
import { SectionRandomFact, ContainerRandomFact, Title, UnderTitle, Img, Describe } from './RandomFact.styled';
import photo_facts from '../../../Photo/photo_facts.jpg';




class RandomFact extends Component {

    clickButton() {
        console.log("Click ob btn");
    }


    render() {
       return (
            <SectionRandomFact>
                <ContainerRandomFact>
                    <Img src={photo_facts} width={550} alt="Foto"/>
                    <Describe>
                        <Title>
                            Facts about Me
                        </Title>
                        <UnderTitle>
                            I like coffe
                        </UnderTitle>
                        <UnderTitle>
                            I like cats
                        </UnderTitle>
                        <UnderTitle>
                            I am fond of extreme sports
                        </UnderTitle>
                        <UnderTitle>
                            My dream is walking in a mountain
                        </UnderTitle>
                        <UnderTitle>
                            My favourite car it`s toyota
                        </UnderTitle>
                        <UnderTitle>
                            My favorite series is Vikings.
                        </UnderTitle>
                        <UnderTitle>
                            My favorite book is Withcer.
                        </UnderTitle>
                        {/* <Button onClick={this.clickButton}>Click for Fact</Button> */}
                    </Describe>
                </ContainerRandomFact>
            </SectionRandomFact>
        )
    }
}

export default RandomFact;
