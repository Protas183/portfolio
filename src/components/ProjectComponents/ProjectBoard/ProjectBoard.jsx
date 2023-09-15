import ProjectCard from "../ProjectCard/ProjectCard";
import PropTypes from "prop-types";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {animationBottom} from "../animation"
import { Board } from './ProjectBoard.styled';


export default function ProjectBoard({ events }) {
  const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '-58px',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  autoplaySpeed: 2000,
};


  return (
    <Board
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationBottom}
    >
      <Slider {...settings}>
        {events.map(event => (
        <ProjectCard
          key={event.title}
          title={event.title}
          make={event.make}
          position={event.position}
          img={event.img}
          technologies={event.technologies}
          describe={event.describe}
          linkGit={event.linkGit}
          linkSite={event.linkSite}
        />
      ))}
      </Slider>
    </Board>
  );
};

ProjectBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      technologies: PropTypes.array.isRequired,
      describe: PropTypes.string.isRequired,
      linkGit: PropTypes.string.isRequired,
      linkSite: PropTypes.string.isRequired
    })
  )
};
