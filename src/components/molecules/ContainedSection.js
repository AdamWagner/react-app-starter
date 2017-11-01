import React from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import { responsiveStyle, space } from "styled-system";
import {dissoc} from 'ramda'; // http://ramdajs.com/docs/

import {borderHelper} from '../../styleConfig/mixins'
import filterCustomProps from '../../utils/filterCustomProps';

import { Box } from  '../atoms';
import { Container } from '../atoms';
import { Section } from '../atoms'

/*------------------------------------------------------
<SectionBg
  bg={theme.colors.blue2}        // sets bg color
  bgSkew={5}                     // skews the bg by degrees
  maxWidth={'90vw'}              // max width of inner container
  border={['left top', 'top']}   // see borderHelper in styleConfig/mixins
/>
 ----------------------------------------------------- */

const SectionBg = styled.div`
  top: 0;
  bottom: 0;
  grid: repeat(5,200px)/repeat(10, 1fr);
  transform-origin: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  display: grid;
  transform: ${props => `skewY(-${props.bgSkew}deg)`};
  background: ${props => props.bg};
`

// debugger
const ContainedSection = ( {border, bg, bgSkew, maxWidth, children, ...props} ) => (
  <Section border={border}>

    {/* if props.bg, render SectionBg */}
    {bg && <SectionBg bg={bg} bgSkew={bgSkew} /> }

    <Container maxWidth={maxWidth} {...dissoc(['bg', 'border'], props)} style={{zIndex:1, position:'relative'}}>
      {children}
    </Container>
  </Section>
);

export default ContainedSection;
