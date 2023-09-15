import styled from "@emotion/styled";

export const SocialBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0px 40px 0px;
  display: flex;
  flex-direction: column;

`;

export const Title = styled.h2`
margin: 0;
margin-bottom: 20px;
font-size: 50px;
font-family: "Bitter", serif;
`;

export const Span = styled.span`
color: rgb(71, 71, 71);
font-weight: bolder;
font-family: "Barriecito", cursive;
`;

export const UnderTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
  font-size: 35px;
  font-family: "Bitter", serif;
`;

export const SocialUl = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;


export const SocialLI = styled.li`
  margin: 0;
`;

export const LinkToSociable = styled.a`
  font-weight: 500;
  font-size: 30px;
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
    width: 45px;
    height: 45px;
    margin-right: 15px;

      &:hover {
      color: rgb(160, 160, 160);
      }
  }

`;



