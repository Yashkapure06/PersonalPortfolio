import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck,DiDebian,DiYii,DiYahooSmall } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/">
      <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom:"15px"}}>
        <DiYahooSmall size="4rem" /><Span>ash Kapure</Span>
      </a>
    </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Yashkapure06">
        <AiFillGithub size="3rem" />

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/yash-kapure-9090a01a9/">
        <AiFillLinkedin size="3rem" />

      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_yashkapure_/">
        <AiFillInstagram size="3rem" />

      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
