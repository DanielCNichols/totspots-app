import React from 'react';
import s from './Modal.module.css';

const Modal = props => {
  return <div className={s.modal}>{props.children}</div>;
};

export default Modal;
