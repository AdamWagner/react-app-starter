import React, { Component } from "react";
import PropTypes from 'prop-types';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import {inputNormalize, borderTheme} from '../../styleConfig/mixins'
import is from "styled-is";
import theme from '../../styleConfig/theme'


class SelectboxBase extends Component {
  componentDidMount = () => {
    // registers input with form, populating formData state.
    let fakeEvent = { target: {name: this.props.name, value: '', type:'select-one'}}
    this.props.onChange(fakeEvent);
  }

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

  render() {
    let {name, label, options, className, onBlur, onChange, helpText="*Required"} = this.props

    let classes = [className, this.validate()].join(' ');

    return (

      <div className={classes}>
          <select name={name} onChange={onChange} onBlur={onBlur}>
            <option key="select..." value="select...">select...</option>
            {options.map((o)=><option key={o} value={o}>{o}</option>)}
          </select>
          <div className="help-text">{helpText}</div>
          <label>{label}</label>
      </div>




    )

  }
}

let invalidColor = theme.colors.red5;

const Selectbox = styled(SelectboxBase)`

  position: relative;
  padding-top: 1.75em;

  label {
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease-out;
  }

  .help-text {
    margin-top: 0.5em;
    font-size: 90%;
    color: ${theme.colors.gray6};
    display:none;
  }


  select {
    ${inputNormalize};
    ${borderTheme};

    padding: 0.85em 1em;
    appearance: none;
    color: ${theme.colors.gray9};
    background: #fff url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='1.3em' height='1.3em' fill='none' stroke='${theme.colors.gray6}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'> <path d='M30 12 L16 24 2 12' /> </svg>") no-repeat right 16px center;
    width: 100%;
    display:inline-block;


    &:hover { cursor: pointer; }

    &:focus { border-color: ${theme.primary}; }

    option { color: ${theme.colors.gray9}; }
  }

  &.invalid select {
    border-color: ${invalidColor};

  }

  &.invalid .help-text {
    color: ${invalidColor};
    display: block;
  }


`

export default Selectbox;
