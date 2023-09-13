import ProjectBoard from 'components/ProjectComponents/ProjectBoard/ProjectBoard';
import projects from '../../data/projects.json';
import { Container } from "./Projects.styled";
// import ProjectSlider from 'components/ProjectComponents/SliderTest/Slider';



export const Projects = () => {
  return (
    <Container>
      <ProjectBoard events={projects} />
    </Container>
  )
}
