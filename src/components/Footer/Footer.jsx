import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FooterBlock, FooterContainer, SpanCopyRight, SocialList, SocialLink, LinkToSociable } from './Footer.styled'



export default function Footer() {
    return (
      <FooterBlock>
        <FooterContainer>
          <SpanCopyRight>Copyright © 2023 by Protas</SpanCopyRight>
        <SocialList>
          <SocialLink><LinkToSociable href='https://t.me/protastema'><FaTelegram /></LinkToSociable></SocialLink>
          <SocialLink><LinkToSociable href='https://instagram.com/protas_tema?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram /></LinkToSociable> </SocialLink>
          <SocialLink><LinkToSociable href='https://www.facebook.com/profile.php?id=100006317499140&eav=Afbw8mEglHm6i2A661K-8dDgsJ6WmWjReqr-KrlPUzsDrlglIc4_pNUjDQyZkxOw370&paipv=0'><FaFacebook /></LinkToSociable></SocialLink>
          <SocialLink><LinkToSociable href='https://www.linkedin.com/in/artem-protas-a63962271/'><FaLinkedin /></LinkToSociable></SocialLink>
        </SocialList>
        </FooterContainer>
      </FooterBlock>
    )
};

