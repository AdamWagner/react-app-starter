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
  background: linear-gradient(#507eb1,#709dc7 10%,#dde9f5 38%,#eaf2f9 48%,#f6f9fc 62%);
  position: absolute;
  z-index: 0;
  width: 100%;
  display: grid;
  transform: skewY(-12deg) scaleY(1.5);
  `


const ContainedSection = ( props ) => (
  <Section bg={props.bg}>
    <SectionBg />
    <Container maxWidth={props.maxWidth} {...dissoc('bg', props)} style={{zIndex:1, position:'relative'}}>
      {props.children}
    </Container>
  </Section>
);

export default ContainedSection;
