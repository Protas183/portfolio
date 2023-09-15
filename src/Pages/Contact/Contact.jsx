import { Container } from 'Pages/About/About.styled';
import Email from 'components/ContactComponents/EmailContact/Email';
import Social from 'components/ContactComponents/SocialContact/Social';



export const Contact = () => {
  return (
    <Container>
      <Social />
      <Email />
    </Container>
  );
};
