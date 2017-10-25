import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import { Box as b, } from "rebass"; // http://jxnblk.com/rebass/components/

/*------------------------------------------------------
<Box
  bg={"white"}       // will be passed to css bg prop
  p={[1, 4]}         // responsive array looks up padding indices in ${space}
  spaceChildren      // boolean gives children space via labotomized owl
  centerText         // boolean centers text on chilren

>
  ...
</Box>
 ----------------------------------------------------- */

// include in containers to
// vertically space out their children
let vSpaceChildren = is('vSpaceChildren')` & > * + * { margin-top: 1em; } `
let hSpaceChildren = is('hSpaceChildren')` & > * + * { margin-left: 1em; } `


/*------------------------------------------------------
 Unfortunately, need to call with custom style attrs
 as strings. E.g.
 <Box spacechildren={'true'} shadow={'true'}>
 until https://github.com/styled-components/styled-components/issues/439
 is addressed.
 ----------------------------------------------------- */

const Box = styled(b)`
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

`;

Box.defaultProps = {
  rounded: true,
  flexDirection: 'column'
}

export default Box;
