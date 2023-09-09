import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: rgb(240, 240, 240);
`;

export const EmailBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: 50px;
  font-family: "Bitter", serif;
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameEmailBlock = styled.div`
  font-size: 20px;


`;

export const FormInput = styled.div`


&:not(:last-child) {
    margin-bottom: 30px;
    }
`;

export const MessageBlock = styled.div`
    font-size: 20px;

`;

export const Textarea = styled.textarea`
  width: 550px;
  padding: 10px;
  height: 150px;
  border-radius: 3px;
  font-size: 20px;
  resize: none;
  box-sizing: border-box;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
  position: fixed;
`;

export const Button = styled.button`
  display: block;
  margin-top: 50px;
  padding: 5px;
  font-size: 20px;
  font-family: "Barriecito", cursive;
  background-color: black;
  color: white;
  cursor: pointer;
`;
