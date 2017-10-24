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
let spacechildren = is('spacechildren')` & > * + * { margin-top: 1em; } `


/*------------------------------------------------------
 Unfortunately, need to call with custom style attrs
 as strings. E.g.
 <Box spacechildren={'true'} shadow={'true'}>
 until https://github.com/styled-components/styled-components/issues/439
 is addressed.
 ----------------------------------------------------- */

const Box = styled(b)`
  ${spacechildren}

  ${is('centerText')`
    text-align:center
  `};

  ${is('shadow')`
    ${props => props.theme.shadows.four};
  `};

`;

export default Box;
