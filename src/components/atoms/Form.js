import React, { Component } from "react";
import PropTypes from 'prop-types';
import {all, equals} from 'ramda';

import validation from '../../utils/validation';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts


class FormBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formData:{},
      errors: {},
    };
  }

  validate({type, name, value}) {
    let error = validation[type](value);
    this.setState({errors: {...this.state.errors, [name]: error}})
  }

  allValid = () => {
    // get array of booleans indicating each value's error status
    // let formValueErrors = Object.values(this.state.formData).map(() => {});
    // return true if all form value error statuses are false
    // return all(equals(false))(formValueErrors);
    return true
  }

  handleInputChange = (evt) => {
    let { name, value, type } = evt.target;
    let formData = Object.assign(this.state.formData, { [name]: {value, type} });

    // if the input is invalid,
    // validate in realtime as user types
    if (this.state.errors[name]) {
      let formData = evt.target;
      this.validate(formData)
    }

    this.setState({formData});
  }

  handleBlur = (evt) => {
    let formData = evt.target;
    this.validate(formData);
  }

  // the provided handler must be a vanilla JS function, not an arrow function. Oddly.
  onSubmit = () => {
    let handleSubmit = this.props.handleSubmit.bind(this);
    handleSubmit();
  }

  renderChildren() {
    // wraps children with handlers to
    // bind data to formData and validate on blur
    return React.Children.map(this.props.children, child => {
      let type = child.type.displayName
      if (type==='InputText') {
        return React.cloneElement(child, {
          onChange: this.handleInputChange,
          onBlur: this.handleBlur,
          error: this.state.errors[child.props.name],
        })
      } else if (type==='withRouter(Button)') {
          return React.cloneElement(child, {
          canContinue: this.allValid(),
          onSubmit: this.onSubmit
        })
      }
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
