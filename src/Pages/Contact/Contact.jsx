import { Container } from 'Pages/About/About.styled';
// import SocialContact from 'components/ContactComponents/socialContact/socialContact';
import EmailContact from 'components/ContactComponents/emailContact/emailContact';

export const Contact = () => {
  return (
    <Container>
      {/* <SocialContact /> */}
      <EmailContact />
    </Container>
  );
};
