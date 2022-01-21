import React from 'react';
import { DiJava,DiPython,DiMongodb, DiCss3Full,DiFirebase, DiReact,DiNodejsSmall,DiDatabase, DiZend } from 'react-icons/di';
import{FaJsSquare} from'react-icons/fa';
import {TiHtml5} from 'react-icons/ti';
import {SiNextDotJs,SiBootstrap,SiMongodb,SiMaterialUi,SiWebrtc} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am working with a range of technologies in the web development world.
      From front-end to back-end, I am comfortable with all of them.
    </SectionText>
    <List>
      <ListItem>
        <span>
          <DiReact size="3rem"/>  <SiNextDotJs size="3rem" /> <SiMaterialUi size="3rem" />
        </span>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experiences with <br/>
            React.js, Next.js, Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
{/* ******************* */}
      <ListItem>
        <span>
        <TiHtml5 size="3rem"/>< DiCss3Full size="3rem"/><FaJsSquare size="3rem"/><SiBootstrap size="3rem" />
        </span>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experiences with <br/>
            Html, CSS, JavaScript, Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
{/* *************** */}
      <ListItem>
        <span>
          <DiNodejsSmall size="3rem"/><SiMongodb size="3rem"/>
        </span>
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Quite Less Experiences with <br/>
            Node.js &amp; Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* *********************** */}
{/* *************** */}
      <ListItem>
        <span>
          <DiPython size="3rem"/>
        </span>
        <ListContainer>
          <ListTitle>
            Other
          </ListTitle>
          <ListParagraph>
            Good Knowledge of<br/>
           Python 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* *********************** */}

    </List>
  </Section>
);

export default Technologies;
