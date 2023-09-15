import React, {Component} from "react";
import { SectionRandomFact, ContainerRandomFact, Title, FactsUl, FactLi, Img, Describe } from './RandomFact.styled';
import { animationImgFacts, animationListFacts } from "../animation"
import photo_facts from '../../../Photo/photo_facts.jpg';


const facts = ['I like coffee', 'I like cats','I am fond of extreme sports','My dream is walking in a mountain', 'My favourite car it`s toyota','My favourite TV show is Vikings','My favourite book is Withcer', 'Now I have a beard']

class RandomFact extends Component {

  render() {
  return (
    <SectionRandomFact
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.5, once: true}}>
          <ContainerRandomFact>
              <Img variants={animationImgFacts} src={photo_facts} width={550} alt="Foto"/>
              <Describe variants={animationListFacts}>
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
