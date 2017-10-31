import React, { Component } from "react";
import PropTypes from 'prop-types';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import theme from '../../styleConfig/theme'


class InputBase extends Component {

  validate() {
    let {error} = this.props;
    if (error === undefined) {
      return ''
    } else if (error === false) {
      return 'valid'
    } else {
      return 'invalid'
    }
  }

  componentDidMount = () => {
    // registers input with form, populating formData state.
    let fakeEvent = { target: {name: this.props.name, value: ''}}
    this.props.onChange(fakeEvent);
  }

  render () {
    let {type, label, name, placeholder, onBlur, onChange} = this.props;
    let classes = [this.props.className, this.validate()].join(' ');

    return (
      <div className={classes}>
          <input type={type || 'text'} name={name} placeholder={placeholder || label} onBlur={onBlur} onChange={onChange} />
          <div className="help-text">*Required</div>
          <label>{label}</label>
      </div>
      )
  }
}

// variables
let validColor = theme.colors.teal;
let invalidColor = theme.colors.red5;

let inputNormalize = `
  margin:0;
  border:0;
  padding:0;
  display:inline-block;
  vertical-align:middle;
  white-space:normal;
  background:none;
  line-height:1;

  &:focus {
  	outline:0;
  }
`

const InputText = styled(InputBase)`

  position: relative;
  padding-top: 1.75em;
  margin-bottom: 1em;
  transition: height .3s ease-in-out;

  input {
    ${inputNormalize}

    border-radius: ${theme.radius}px;
    border-width: ${theme.borderWidth}px;
    border-color: ${theme.colors.gray3};
    border-style: solid;

    width: 100%;
    padding: 0.75em 1em;
    font-size: 100%;
    color: ${theme.colors.gray9};

    &::placeholder {
      color: ${theme.colors.gray7};
    }

    &:focus {
      border-color: ${theme.primary};
    }

  }

  .help-text {
    margin-top: 0.5em;
    font-size: 90%;
    color: ${theme.colors.gray6};
    display:none;
  }

  &.invalid {
    input {
      border-color: ${invalidColor};
      background-image: url("data:image/svg+xml,%3Csvg width='30px' height='30px' viewBox='0 0 30 30' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%28-128.000000, -59.000000%29' fill='${invalidColor}'%3E%3Cpolygon points='157.848404 61.9920213 145.980053 73.8603723 157.848404 85.7287234 154.856383 88.7207447 142.988032 76.8523936 131.119681 88.7207447 128.12766 85.7287234 139.996011 73.8603723 128.12766 61.9920213 131.119681 59 142.988032 70.8683511 154.856383 59'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-size: 1em;
      background-position-x: calc(100% - 0.5em);
      background-position-y: center;
    }
    .help-text {
      color: ${invalidColor};
      display: block;
    }
  }

  &.valid input {
    border-color: ${validColor};
    background-image: url("data:image/svg+xml,%3Csvg width='45px' height='34px' viewBox='0 0 45 34' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate%28-56.000000, -59.000000%29' fill='${validColor}'%3E%3Cpolygon points='70.1468531 85.8671329 97.013986 59 100.58042 62.5664336 70.1468531 93 56 78.8531469 59.5664336 75.2867133'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");

    background-repeat: no-repeat;
    background-size: 1.25em;
    background-position-x: calc(100% - 0.5em);
    background-position-y: center;
  }




  label {
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease-out;
  }

  input:placeholder-shown + div + label {
    ${'' /* opacity: 0; */}
    ${'' /* transform: translateY(1rem); */}
  }

`

export default InputText;
