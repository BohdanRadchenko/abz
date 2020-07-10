import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'
import {successModalClose} from '../../redux/controller/controllerActions'
import {modal} from '../../redux/controller/controllerSelectors'

import css from './Modal.module.scss'

const Modal = ({children ,isOpen, onClose}) => {

  const backdropRef = useRef();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  })

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    onClose();
  };

  const handleBackdropClick = e => {
    const {current} = backdropRef;
    if (current && e.target !== current) {
      return;
    }
    onClose();
  };

  if(!isOpen) {
    return null
  }

  return (
      <div
          className={css.backdrop}
          ref={backdropRef}
          onClick={handleBackdropClick}
      >
        <div className={css.modal}>
          {children}
        </div>
      </div>
  )
}

const mSTP = state => ({
  isOpen : modal(state)
})

const mDTP = {
  onClose : successModalClose
}

export default connect (mSTP, mDTP)(Modal)
