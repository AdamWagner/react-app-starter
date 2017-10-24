import React, { Component } from "react";
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import { lighten, darken } from "polished";
import { adjacent, convert, brightness } from "chromatism";
import {absPseudo, clickableReset} from "../../styleConfig/mixins";
import { makeGradient } from "../../styleConfig/styleVars";
import { space } from "styled-system";
import Icon from "../Icon";

/*------------------------------------------------------
<Button
  bg={"white"}       // will be passed to css bg prop
>
  ...
</Box>
 ----------------------------------------------------- */

class ButtonBase extends Component {
  render() {
    let { iconLeft, iconRight } = this.props;
    return (
      <div className={this.props.className}>
        {iconLeft && <Icon name={iconLeft} size={"1em"} thickness={3} />}

        <div
          style={{
            marginLeft: iconLeft && "0.25em",
            marginRight: iconRight && "0.5em"
          }}
        >
          {this.props.children}
        </div>

        {iconRight && <Icon name={iconRight} size={"1em"} thickness={3} />}
      </div>
    );
  }
}

// variables
let speed = 0.2;

// component
const Button = styled(ButtonBase)`
 ${space};
 display: inline-flex;
 align-items: center;
 position: relative;
 padding: 0.75em 1.5em;
 margin-top: 0.75em;
 margin-bottom: 0.75em;

${""/* hack required to align baseline of  buttons with icons */}
 bottom: ${props => props.iconLeft && "-0.1em"};

 background: ${props =>
 props.primary ? props.theme.primary : props.theme.secondary};

  div  {
   text-align: center;
  }

 ${is("gradient")`
   background: ${props => makeGradient(props.theme.primary)};
 `};

 transition: all ${speed}s;
 color: white;
 text-align:center;


 ${props => props.theme.shadows.two};


 svg  {
   transition: transform ${speed}s;
   position: relative;
   bottom: -0.0625em;
 }

 &:before {
   ${absPseudo}
   border-radius:${props => props.theme.radius}px;
   background: linear-gradient(to bottom, white, black);
   mix-blend-mode overlay;
   opacity: 0.05;
   transition: opacity ${speed}s;
 }


 &:hover {
   ${props => props.theme.shadows.four};
   transform: translateY(-0.5px);

   &:before { opacity: 0.10; }

   div + svg {
     transform: translateX(4px);
   }

  }

  &:active  {
    ${props => props.theme.shadows.zero};
    transform: translateY(0.5px);
    &:before {
      opacity:0.0;
    }
  }

 ${is("rounded")`
   border-radius: ${props => props.theme.radius}px;
 `};

 ${is("caps")`
   text-transform: uppercase;
   bottom: 0.05em;
   div {
     font-size: 0.85em;
     margin:0.075em 0;
   }
   font-weight: 500;
 `};

 ${is("outline")`
   box-shadow: ${props =>
     `inset 0px 0px 0px ${props.theme.borderWidth}px ${props.theme.primary}`};
   color: ${props => props.theme.primary};
   background: transparent;

   &:before {display:none!important;}

   &:hover {
     box-shadow: ${props =>
       `inset 0px 0px 0px ${props.theme.borderWidth}px ${lighten(
         0.1,
         props.theme.primary
       )}`}!important;
     color: ${props => lighten(0.1, props.theme.primary)};
   }
   &:active {
     box-shadow: ${props =>
       `inset 0px 0px 0px ${props.theme.borderWidth}px ${darken(
         0.03,
         props.theme.primary
       )}`}!important;
     color: ${props => darken(0.05, props.theme.primary)};
   }
 `};

 ${is("secondary")`
   color: ${props => props.theme.primary};
   background: white;

   &:hover {
     color: ${props => lighten(0.1, props.theme.primary)};
   }
   &:active {
     color: ${props => darken(0.05, props.theme.primary)};
   }
 `};




`;

export default Button;
