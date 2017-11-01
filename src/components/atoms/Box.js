import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import { Box as b, } from "rebass"; // http://jxnblk.com/rebass/components/
import filterCustomProps from '../../utils/filterCustomProps';
import {vSpaceChildren, hSpaceChildren} from '../../styleConfig/mixins'

/*------------------------------------------------------
<Box
  bg={"white"}       // will be passed to css bg prop
  p={[1, 4]}         // responsive array looks up padding indices in ${space}
  vSpaceChildren     // gives children vertical space via labotomized owl
  hSpaceChildren     // gives children horizontal space via labotomized owl
  centerText         // boolean centers text on chilren
  vCenterChildren    // vertically centers children regardless of flex-direction
  flexDirection      // defaults to 'column'.
  rounded            // rounds corners to theme radius. Default true.
/>
 ----------------------------------------------------- */



/*------------------------------------------------------
 Unfortunately, need to filter out non-standard props
 until https://github.com/styled-components/styled-components/issues/439
 is addressed. Otherwise they get passed to dom as attrs and React throws errors.
 ----------------------------------------------------- */
let customProps = ['spreadChildren','vSpaceChildren', 'rounded', 'vCenterChildren', 'flexDirection'];
let Base = filterCustomProps(b, customProps)


/*------------------------------------------------------
 Styles
 ----------------------------------------------------- */
const Box = styled(Base)`
  ${vSpaceChildren}
  ${hSpaceChildren}
  display: flex;
  flex-direction: ${props => props.flexDirection};
  background: ${props => props.bg};

  ${is('rounded')`
    border-radius: ${props => props.theme.radius}px;
  `};

  ${is('centerText')`
    text-align:center
  `};

  ${is('shadow')`
    ${props => props.theme.shadows.four};
  `};

  ${is('alignRight')`
    margin-left: auto;
  `};

  ${is('spreadChildren')`
    ${props => props.flexDirection == 'column' ? 'align-content: space-between' : 'justify-content:space-between'};
  `};

  ${is('vCenterChildren')`
    ${props => props.flexDirection == 'column' ? 'justify-content: center' : 'align-items:center'};
  `};

`;

Box.defaultProps = {
  rounded: true,
  flexDirection: 'column'
}

export default Box;
