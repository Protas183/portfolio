import React from 'react';
import PropTypes from 'prop-types';
import { Project, Title, MakePositionsUL, MakePositionsLI, Img, TechnologiesUL , TechnologiesLI, Describe, LinksGitSite, LinkGit, LinkSite } from './ProjectCard.styled';

export default function ProjectCard({ title, make, position, img, technologies, describe, linkGit, linkSite }) {


  return (
      <Project>
      <Title>{title}</Title>
      <MakePositionsUL>
        <MakePositionsLI>{make}</MakePositionsLI>
        <MakePositionsLI>{ position }</MakePositionsLI>
      </MakePositionsUL>
        <Img src={img} alt="Images"></Img>
        <TechnologiesUL>{technologies.map((tech, id) => (
          <TechnologiesLI key={id}>{ tech }</TechnologiesLI>
        ))}
        </TechnologiesUL>
        <Describe>{describe}</Describe>
        <LinksGitSite>
          <li><LinkGit href={linkGit}>Git</LinkGit></li>
          <li><LinkSite href={linkSite}>Site</LinkSite></li>
        </LinksGitSite>
    </Project>

  )
};


ProjectCard.propTypes = {
  title: PropTypes.string,
  make: PropTypes.string,
  img: PropTypes.object,
  technologies: PropTypes.array,
  describe: PropTypes.string,
  linkGit: PropTypes.string,
  linkSite: PropTypes.string
}
