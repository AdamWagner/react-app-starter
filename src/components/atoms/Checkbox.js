import React, { Component } from "react";
import PropTypes from 'prop-types';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is from "styled-is";
import theme from '../../styleConfig/theme'


class CheckboxBase extends Component {
  componentDidMount = () => {
    // registers input with form, populating formData state.
    let fakeEvent = { target: {name: this.props.name, value: '', type:'checkbox'}}
    this.props.onChange(fakeEvent);
  }

  render() {
    let {name, label, className, onBlur, onChange} = this.props

    return (
      <div className={className}>
        <input name={name} id={label} type="checkbox" onBlur={onBlur} onChange={onChange} />
        <label htmlFor={label}>{label}</label>
      </div>
    )

  }
}

const Checkbox = styled(CheckboxBase)`
  display: block;
  position: relative;

  label {
    cursor: pointer;
    padding: 0.1em 2em;
    position: relative;
    user-select:none;

    ${'' /* Checkbox background */}
    &:before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background-color: ${theme.colors.gray2};
      border-radius: ${theme.radius}px;
      transition: background-color .1s ease-out;
      content: "";
    }

  ${'' /* Checmark itself */}
    &:after {
      display: block;
      position: absolute;
      top: 2px;
      left: 8px;
      width: 7px;
      height: 14px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(30deg) scale(0);
      content: "";
      transition: transform .2s ease-in-out;
    }



  }

  input[type=checkbox] {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  input:checked + label::before {
      background-color: ${theme.primary}
  }

  input:checked + label::after {
      display: block;
      position: absolute;
      content: '';
      transform: rotate(45deg) scale(1);
  }
`

export default Checkbox;
