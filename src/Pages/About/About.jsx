import { AboutMe } from "components/AboutComponents/AboutMe/AboutMe";
import RandomFact from "components/AboutComponents/RandomFact/RandomFact";
import  HardSkills  from "components/AboutComponents/HardSkills/HardSkills";
import { Container } from "./About.styled";


export const About = () => {
  return (
    <Container>
      <AboutMe />
      <RandomFact />
      <HardSkills />
    </Container>
  );
};
