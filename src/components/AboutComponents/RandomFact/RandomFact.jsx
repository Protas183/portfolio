import React, {Component} from "react";
import { SectionRandomFact, ContainerRandomFact, Title, UnderTitle, Img,  Describe, Button } from './RandomFact.styled'




class RandomFact extends Component {

    clickButton() {
        console.log("Click ob btn");
    }


    render() {
       return (
            <SectionRandomFact>
                <ContainerRandomFact>
                    <Img src="https://klike.net/uploads/posts/2020-01/1579681624_20.jpg" width={550} />
                    <Describe>
                        <Title>
                            Random Fact about Me
                        </Title>
                        <UnderTitle>
                            I like coffe
                        </UnderTitle>
                        <Button onClick={this.clickButton}>Click for Fact</Button>
                    </Describe>
                </ContainerRandomFact>
            </SectionRandomFact>
        ) 
    } 
}

export default RandomFact;