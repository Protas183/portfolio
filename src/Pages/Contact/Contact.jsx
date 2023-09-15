import Email from 'components/ContactComponents/EmailContact/Email';
import Social from 'components/ContactComponents/SocialContact/Social';
import { Container } from './Contact.styled';



export const Contact = () => {
  return (
    <Container>
      <Social />
      <Email />
    </Container>
  );
};
