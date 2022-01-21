import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 7028073007">+91 7028073007</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yashkapure06@gmail.com">yashkapure06@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innonvating 1 project at a Time</Slogan>
          <SocialContainer>
          <SocialIcons href="https://github.com/Yashkapure06">
        <AiFillGithub size="3rem" />

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/yash-kapure-9090a01a9/">
        <AiFillLinkedin size="3rem" />

      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_yashkapure_/">
        <AiFillInstagram size="3rem" />

      </SocialIcons>
          </SocialContainer>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
