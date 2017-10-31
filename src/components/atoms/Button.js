import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import { lighten, darken } from "polished";
import { adjacent, convert, brightness } from "chromatism";
import { absPseudo, clickableReset, show } from "../../styleConfig/mixins";
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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  onClick = () => {
    let {to, history, onClick, onSubmit, loadingText} = this.props

    // if provided, run onSubmit handler
    if (onSubmit) {
      onSubmit();
    }

    // if provided, run onClick handler
    if (onClick) {
      // if loadingText provide, show it befor running on click
      // TODO: this is just a shell of a loading state. Need a real use case to flesh it out.
      if (loadingText) { this.setState({isLoading: true}) }
      onClick()
    }

    // Function like Link if to="/example-route" exists
    if (to) {
      history.push(to)
    }
  }

  render() {
    let { iconLeft, iconRight, loadingText, children, canContinue } = this.props;
    let buttonText = this.state.isLoading ? loadingText : children;

    // if child of <Form>, will recieve canContinue prop
    // which will keep button disabled until form is valid.
    let disabled = canContinue===false ? 'disabled' : '';
    let classNames = [this.props.className, disabled].join(' ');

    return (
      <div className={classNames} onClick={this.onClick}
        role="button"
        tabIndex="0" // allows button to be focusable with tab key. "0" defers to document order.
        onKeyPress={this.onClick} // enables hitting enter to click button
        >
        <span>
          {iconLeft && <Icon name={iconLeft} size={"1em"} thickness={3} />}

          <span
            style={{
              marginLeft:  iconLeft && "0.25em",
              marginRight: iconRight && "0.5em"
            }}
          >
            {buttonText}
          </span>

          {iconRight && <Icon name={iconRight} size={"1em"} thickness={3} />}
        </span>
      </div>
    );
  }
}

// variables
let speed          = 0.2; // global animation speed
let lift           = 1;   // pixels button should move vertically on hover
let iconRightDrift = 0;   // pixels  the right icon should move right on hover

// component
const Button = styled(ButtonBase)`
 ${space};
 ${clickableReset}
 ${props => props.theme.shadows.two};
 background: ${props =>
   props.primary ? props.theme.primary : props.theme.secondary};

 display: inline-flex;
 ${show};
 align-items: center;
 position: relative;
 padding: 0.75em 1.5em;

 transition: all ${speed}s;
 color: white;
 text-align:center;
 white-space: nowrap;
 -webkit-font-smoothing: antialiased;

 bottom: ${props => props.iconLeft && "-0.1em"};


span {
  display: inline;
  width: auto;
  margin: auto;
}

svg  {
 transition: transform ${speed}s;
 vertical-align: middle;
}

${'' /* creates a slight gradient overlayed on the base color  */}
&:before {
 ${absPseudo}
 border-radius:${props => props.theme.radius}px;
 background: linear-gradient(to bottom, white, black);
 mix-blend-mode overlay;
 opacity: 0.05;
 transition: opacity ${speed}s;
}


&:hover, &:focus {
 ${props => props.theme.shadows.four};
 transform: translateY(-${lift}px);

 &:before { opacity: 0.10; }

 span + svg {
   transform: translateX(${iconRightDrift}px);
 }

}

&:active  {
  ${props => props.theme.shadows.zero};
  transform: translateY(${lift}px);
  &:before {
    opacity:0.0;
  }
}

&.disabled {
  opacity: 0.8!important;
  pointer-events: none;
  box-shadow: none;
  &:before  { opacity: 0; }
}

${is('alignRight')`
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: auto;
`};

${is('alignLeft')`
  align-self: flex-start;
  justify-self: flex-start;
  margin-right:auto;
`};

${is('full')`width:100%;`};

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
     margin:0.075em auto;
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

 ${is('accent')`
   background: ${props => props.theme.colors.accent};
 `};
`;

Button.defaultProps = {
  primary: true,
  rounded: true
};


export default withRouter(Button);
