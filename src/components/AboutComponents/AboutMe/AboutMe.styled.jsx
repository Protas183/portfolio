import styled from "@emotion/styled";
import { motion } from 'framer-motion';

export const SectionAboutMe = styled(motion.div)`
    background-color: white;
`;

export const ContAboutMe = styled.div`
margin: 0 auto;
padding-top: 150px;
padding-bottom: 150px;
width: 1200px;
display: flex;
justify-content: space-between;
`;

export const Describe = styled(motion.div)`
    width: 550px;
    max-height: 450px;
    font-family: "Bitter", serif;
`;

export const Title = styled(motion.h1)`
margin: 0;
margin-bottom: 15px;
font-size: 55px;
`;

export const UnderTitle = styled(motion.h3)`
margin: 0;
margin-bottom: 15px;
font-size: 40px;
`;

export const Paragraph = styled(motion.p)`
margin: 0;
font-size: 35px;
`;


export const Img = styled(motion.img)`
margin: 0;
`;

export const Span = styled.span`
color: rgb(71, 71, 71);
font-weight: bolder;
font-family: "Barriecito", cursive;
`;
