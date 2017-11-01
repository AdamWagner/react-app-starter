import React, { Component } from "react";
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styled from "styled-components"; // https://github.com/donavon/styled-shortcuts
import { injectGlobal } from "styled-components";

import {vSpaceChildren, hSpaceChildren} from '../../styleConfig/mixins'
import theme from "../../styleConfig/theme";

import Icon from '../Icon'
import {Box} from '../atoms'


Modal.defaultStyles = {}

class ModalBase extends Component {
  render() {
    let {title, children, isOpen, closeModal, className} = this.props;
    return (
     <Modal
       isOpen={isOpen}
       onRequestClose={closeModal}
       closeTimeoutMS={200}
       className={className}
       customStyles={''}
     >
         <Box flexDirection="row" spreadChildren>
           <div className="title">{title}</div>
           <span className="closeButton" onClick={closeModal}>
             <Icon name="close" size={24}/>
           </span>
         </Box>
         {children}
     </Modal>
    )
  }
}


const ModalComponent = styled(ModalBase)`
  .title {
    font-size: 1.875em;
    font-weight: bold;
  }

  .closeButton {
    cursor: pointer;
  }
`


/*
To prevent scrolling when modal is open,
add the following to global styles.

  .ReactModal__Body--open {
      overflow: hidden;
  }

*/

injectGlobal`
.ReactModalPortal {
  position: relative;
  z-index: 100;
}

.ReactModal__Overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  background-color: rgba(0, 0, 0, 0.65);
  transition: opacity 0.2s ease-in-out;
  opacity: 0;

  &--after-open {
    opacity: 1;
  }

  &--before-close {
    opacity: 0;
  }
}

.ReactModal__Content {
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  z-index: 90;
  border: none;
  max-width: 70%;
  transition: all 0.2s ease-in-out;
  background: white;
  padding: 1.5em;
  border-radius: ${theme.radius}px;
  ${theme.shadows.six}

  &:focus {outline: none;}

  &, &--before-close {
    transform: translateY(-40%) translateX(-50%);
    opacity: 0;
  }

  &--after-open {
    opacity: 1;
    transform: translateY(-50%) translateX(-50%);
  }

}

`

export default ModalComponent
