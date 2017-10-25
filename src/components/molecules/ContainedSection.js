import React from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import { responsiveStyle, space } from "styled-system";
import {dissoc} from 'ramda'; // http://ramdajs.com/docs/

import {borderHelper} from '../../styleConfig/mixins'

import { Box } from  '../atoms';
import { Container as c } from 'rebass'; // http://jxnblk.com/rebass/components/
import { Section } from '../atoms'

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

const maxWidth = responsiveStyle({
  prop: "maxWidth",
  cssProperty: "max-width"
});



let SectionEx = Section.extend`
  ${props => borderHelper};
`


let Container = styled(c)`
  ${maxWidth}
`

const ContainedSection = ( props ) => (
  <SectionEx border={props.border}>
    <SectionBg bg={props.bg} bgSkew={props.bgSkew} />
    <Container maxWidth={props.maxWidth} {...dissoc(['bg', 'border'], props)} style={{zIndex:1, position:'relative'}}>
      {props.children}
    </Container>
  </SectionEx>
);

export default ContainedSection;
