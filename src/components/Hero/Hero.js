import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Profile
      </SectionTitle>
      <SectionText>
        I am a Front End Web Developer with a passion for creating beautiful and intuitive user experiences.

      </SectionText>
      <Button onClick={()=> window.location = "https://drive.google.com/file/d/1DD6JVT0a0SYXaEU-sjip1II41VLRuTop/view?usp=sharing" }>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;