import { AboutMe } from "components/AboutComponents/AboutMe/AboutMe";
import  RandomFact  from "components/AboutComponents/RandomFact/RandomFact";
import { Container } from "./About.styled";
import { HardSkills } from "components/AboutComponents/HardSkills/HardSkills";

export const About = () => {
  return (
    <Container>
      <AboutMe />
      <RandomFact />
      <HardSkills />
    </Container>
  );
};
