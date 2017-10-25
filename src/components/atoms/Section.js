import React from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts

import {borderHelper} from '../../styleConfig/mixins'

import Box from  './Box';

const Section = styled(Box)`
  background: ${props => props.bg};
  position: relative;
  ${props => borderHelper};
`;

export default Section
