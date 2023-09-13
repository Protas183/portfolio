import styled from "@emotion/styled";

export const Container = styled.div`

`;

export const SocialBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0px 40px 0px;

`;

export const Title = styled.h2`
margin: 0;
`;

export const Span = styled.span`
color: rgb(71, 71, 71);
font-weight: bolder;
font-family: "Barriecito", cursive;
`;

export const UnderTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

export const SocialUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 150px 150px;
  gap: 70px;
`;


export const SocialLI = styled.li`

`;

export const LinkToSociable = styled.a`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: 250ms;
  color: black;

  display: flex;
  align-items: center;

  &:hover {
    color: rgb(160, 160, 160);
  }

  svg {
    width: 40px;
    height: 40px;
    margin-right: 15px;

      &:hover {
      color: rgb(160, 160, 160);
      }
  }

`;



