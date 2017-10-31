import React, { Component } from "react";
import PropTypes from 'prop-types';

import {all, equals} from 'ramda';


import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts

function hasError(value) {
  return value.length < 2 ? true : false;
}


class FormBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData:{},
      errors: {},
    };
  }

  validate(name, value) {
    let error = hasError(value);
    this.setState({errors: {...this.state.errors, [name]: error}})
  }

  allValid = () => {
    // get array of booleans indicating each value's error status
    let formValueErrors = Object.values(this.state.formData).map(hasError);
    // return true if all form value error statuses are false
    return all(equals(false))(formValueErrors);
  }

  handleInputChange = (evt) => {
    let { name, value } = evt.target;
    let formData = Object.assign(this.state.formData, { [name]: value });

    // if the input is invalid,
    // validate in realtime as user types
    if (this.state.errors[name]) {
      this.validate(name, value)
    }

    this.setState({formData});
  }

  handleBlur = (evt) => {
    let { name, value } = evt.target;
    this.validate(name, value);
  }

  renderChildren() {
    // wraps children with handlers to
    // bind data to formData and validate on blur
    return React.Children.map(this.props.children, child => {
      console.log('is all valid?',this.allValid());
      return React.cloneElement(child, {
        onChange: this.handleInputChange,
        onBlur: this.handleBlur,
        error: this.state.errors[child.props.name],
        canContinue: this.allValid()
      })
    })
  }

  render () {
    return (
      <form>
        {this.renderChildren()}
      </form>
      )
  }
}

const Form = styled(FormBase)`
  display: block;
`

export default Form;
