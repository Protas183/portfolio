import React, {Component} from "react";
import { SectionRandomFact, ContainerRandomFact, Title, FactsUl, FactLi, Img, Describe } from './RandomFact.styled';
import photo_facts from '../../../Photo/photo_facts.jpg';


const facts = ['I like coffe', 'I like cats','I am fond of extreme sports','My dream is walking in a mountain', 'My favourite car it`s toyota','My favourite TV show is Vikings','My favorite book is Withcer', 'Now I have a beard']

class RandomFact extends Component {

  render() {
  return (
      <SectionRandomFact>
          <ContainerRandomFact>
              <Img src={photo_facts} width={550} alt="Foto"/>
              <Describe>
                  <Title>
                    Facts about Me
                  </Title>
          <FactsUl>
              {facts.map((fact, id) =>
                <FactLi value={fact} id={id}>{ fact }</FactLi>
              )}
          </FactsUl>
              </Describe>
          </ContainerRandomFact>
      </SectionRandomFact>
  )
}
}

export default RandomFact;
