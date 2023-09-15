import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import {Title, Span, SocialBlock, SocialUl, SocialLI, LinkToSociable, UnderTitle } from './Social.styled'


const Social = () => {
return (
    <SocialBlock>
      <Title>Contact in <Span>SOCIAL</Span></Title>
      <UnderTitle>Get in touch with me via social media or email.</UnderTitle>
      <SocialUl>
          <SocialLI><LinkToSociable href='https://t.me/protastema'><FaTelegram />Telegram</LinkToSociable></SocialLI>
          <SocialLI><LinkToSociable href='https://instagram.com/protas_tema?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram />Instagram</LinkToSociable></SocialLI>
          <SocialLI><LinkToSociable href='https://www.facebook.com/profile.php?id=100006317499140&eav=Afbw8mEglHm6i2A661K-8dDgsJ6WmWjReqr-KrlPUzsDrlglIc4_pNUjDQyZkxOw370&paipv=0'><FaFacebook />Facebook</LinkToSociable></SocialLI>
          <SocialLI><LinkToSociable href='https://www.linkedin.com/in/artem-protas-a63962271/'><FaLinkedin />Linkedin</LinkToSociable></SocialLI>
      </SocialUl>
    </SocialBlock>
)
}

export default Social;
