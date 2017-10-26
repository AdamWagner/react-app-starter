import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";

/*------------------------------------------------------
<TextGradient
  bg={"white"}       // will be passed to css bg prop


>
  ...
</TextGradient>
 ----------------------------------------------------- */



/*------------------------------------------------------
 Styles
 ----------------------------------------------------- */
const TextGradient = styled.span`
  background: ${({color1, color2}) => ` -webkit-linear-gradient(left, ${color1}, ${color2});`};
  display: inline-block;
  -webkit-background-clip: text;
  text-fill-color: transparent;
`;

export default TextGradient;
