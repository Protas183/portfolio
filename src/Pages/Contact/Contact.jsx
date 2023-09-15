import { Container } from 'Pages/About/About.styled';
import Email from 'components/ContactComponents/EmailContact/Email';
import SocialContact from 'components/ContactComponents/SocialContact/SocialContact';


export const Contact = () => {
  return (
    <Container>
      <SocialContact />
      <Email />
    </Container>
  );
};
