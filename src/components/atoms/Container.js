import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import { Container as c, } from "rebass"; // http://jxnblk.com/rebass/components/

import {maxWidth} from '../../styleConfig/mixins'
import filterCustomProps from '../../utils/filterCustomProps';


let customProps = ['maxWidth'];
let Base = filterCustomProps(c, customProps)

let Container = styled(Base)`
  ${maxWidth}
`

export default Container
