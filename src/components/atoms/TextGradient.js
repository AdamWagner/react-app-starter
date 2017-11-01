import React from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts

/*------------------------------------------------------
<TextGradient
  color1={"blue"}         // color on the left
  color2={"purple"}       // color on the right
/>
 ----------------------------------------------------- */

const TextGradient = styled.span`
  background: ${({color1, color2}) => ` -webkit-linear-gradient(left, ${color1}, ${color2});`};
  display: inline-block;
  -webkit-background-clip: text;
  text-fill-color: transparent;
`;

export default TextGradient;
