import React  from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import {lighten, darken} from 'polished';
import { adjacent, convert, brightness } from 'chromatism';
import absPseudo from '../../styleConfig/absPseudo';
import {makeGradient} from '../../styleConfig/styleVars';

/*------------------------------------------------------
<Button
  bg={"white"}       // will be passed to css bg prop
>
  ...
</Box>
 ----------------------------------------------------- */

// variables
let speed = 0.2;

// component
const Button = styled.div`
 display: inline-block;
 position: relative;
 padding: 1em 2.4em;

 background: ${props => props.theme.color.sky};
 ${is('gradient')`
   background: ${props => makeGradient(props.theme.color.sky)};
 `};
 transition: background ${speed}s, opacity ${speed}s, box-shadow ${speed}s, transform ${speed}s;
 color: white;
 text-align:center;

 cursor: pointer;
 user-select: none;
 -webkit-appearance: none;
 -webkit-tap-highlight-color: transparent;

 ${props => props.theme.shadows.two};

 &:before {
   ${absPseudo}
   background: linear-gradient(to bottom, white, black);
   mix-blend-mode: overlay;
   opacity: 0.05;
   transition: opacity ${speed}s;
 }


 &:hover {
   ${props => props.theme.shadows.four};
   &:before { opacity: 0.10; }
   transform: translateY(-0.5px);
  }

  &:active  {
    ${props => props.theme.shadows.zero};
    transform: translateY(0.5px);
    &:before {
      opacity:0.0;
    }
  }

 ${is('round')`
   border-radius: ${props => props.theme.radius}px;
 `};

 ${is('caps')`
   text-transform: uppercase;
 `};



`



export default Button;
