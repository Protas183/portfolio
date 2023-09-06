import { AboutMe } from "components/AboutComponents/AboutMe/AboutMe";
import  RandomFact  from "components/AboutComponents/RandomFact/RandomFact";
import { Container } from "./About.styled";

export const About = () => {
  return (
    <Container>
      <AboutMe />
      <RandomFact />
    </Container>
  );
};