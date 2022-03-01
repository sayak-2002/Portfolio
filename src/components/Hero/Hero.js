import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello. <br />
        I am Sayak
      </SectionTitle>
      <SectionText>
      A beginner in web development field.
      </SectionText>
      <Button onClick={() => window.location = 'https//google.com'}>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;