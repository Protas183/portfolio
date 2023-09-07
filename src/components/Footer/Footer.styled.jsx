import styled from "@emotion/styled";

export const FooterBlock = styled.footer`
  background-color: rgb(219, 219, 219);
  border-top: 1px solid black;
`;

export const FooterContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between
`;

export const SpanCopyRight = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.02em;
`;

export const SocialList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

`;

export const SocialLink = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
    }
`;

export const LinkToSociable = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 36px;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: 250ms;

  svg {
    color: black;

    &:hover {
      color: rgb(162, 162, 162);
    }
  }
`;
