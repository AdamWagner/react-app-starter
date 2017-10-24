import React from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import {dissoc} from 'ramda'; // http://ramdajs.com/docs/

import { Box } from  '../atoms';
import { Container, } from 'rebass'; // http://jxnblk.com/rebass/components/
import { Section } from '../atoms'


const SectionBg = styled.div`
  top: 0;
  bottom: 0;
  grid: repeat(5,200px)/repeat(10, 1fr);
  transform-origin: 0;
  position: absolute;
  z-index: 0;
  width: 100%;
  display: grid;
  transform: ${props => `skewY(-${props.bgSkew}deg)`};
  background: ${props => props.bg};
  `


const ContainedSection = ( props ) => (
  <Section >
    <SectionBg bg={props.bg} bgSkew={props.bgSkew} />
    <Container maxWidth={props.maxWidth} {...dissoc('bg', props)} style={{zIndex:1, position:'relative'}}>
      {props.children}
    </Container>
  </Section>
);

export default ContainedSection;
