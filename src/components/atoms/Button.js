import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import { lighten, darken } from "polished";
import { adjacent, convert, brightness } from "chromatism";
import { absPseudo, clickableReset } from "../../styleConfig/mixins";
import { makeGradient } from "../../styleConfig/styleVars";
import { space } from "styled-system";
import Icon from "../Icon";

import theme from '../../styleConfig/theme'

/*------------------------------------------------------
<Button
  bg={"white"}       // will be passed to css bg prop
  big                // increase font size to 1.25em
  small              // decreases font size to 0.75em
  rounded            // defaults to true. Inherits theme.radius.
  alignRight         // Requires parent to be flexbox column
  alignLeft          // Requires parent to be flexbox column
  caps               // Sets text in uppercase
  secondary          // sets background to white
  outline            // white background, primary color border
 >
  ...
</Box>
 ----------------------------------------------------- */

class ButtonBase extends Component {
  render() {
    let { iconLeft, iconRight } = this.props;
    return (
      <div className={this.props.className}>
        <span>
          {iconLeft && <Icon name={iconLeft} size={"1em"} thickness={3} />}

          <span
            style={{
              marginLeft:  iconLeft && "0.25em",
              marginRight: iconRight && "0.5em"
            }}
          >
            {this.props.children}
          </span>

          {iconRight && <Icon name={iconRight} size={"1em"} thickness={3} />}
        </span>
      </div>
    );
  }
}

// variables
let speed = 0.2;

// component
const Button = styled(ButtonBase)`
 ${space};
 ${clickableReset}
 ${props => props.theme.shadows.two};
 background: ${props =>
   props.primary ? props.theme.primary : props.theme.secondary};

 display: inline-flex;
 align-items: center;
 position: relative;
 padding: 0.75em 1.5em;

 transition: all ${speed}s;
 color: white;
 text-align:center;
 -webkit-font-smoothing: antialiased;

 bottom: ${props => props.iconLeft && "-0.1em"};


span {
  display: inline;
  width: auto;
  margin: auto;
}

svg  {
 transition: transform ${speed}s;
 vertical-align: top;
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

 span + svg {
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

${is('alignRight')`
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: auto;
`};

${is('alignLeft')`
  align-self: flex-start;
  justify-self: flex-start;
`};



${is('big')`
  font-size:1.25em;
`};

${is('small')`
  font-size: 0.75em;
`};

 ${is("rounded")`
   border-radius: ${props => props.theme.radius}px;
 `};

 ${is("caps")`
   text-transform: uppercase;
   span {
     font-size: 0.92em;
     letter-spacing: 0.25px;
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
       `inset 0px 0px 0px ${props.theme.borderWidth}px ${lighten( 0.1, props.theme.primary )}`}!important;
     color: ${props => lighten(0.1, props.theme.primary)};
   }
   &:active {
     box-shadow: ${props =>
       `inset 0px 0px 0px ${props.theme.borderWidth}px ${darken( 0.03, props.theme.primary )}`}!important;
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

Button.defaultProps = {
  primary: true,
  rounded: true
};


export default Button;
