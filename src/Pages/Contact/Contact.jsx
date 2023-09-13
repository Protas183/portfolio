import { Container } from 'Pages/About/About.styled';
import EmailContact from 'components/ContactComponents/EmailContact/EmailContact';
import SocialContact from 'components/ContactComponents/SocialContact/SocialContact';

export const Contact = () => {
  return (
    <Container>
      <SocialContact />
      <EmailContact />
    </Container>
  );
};
