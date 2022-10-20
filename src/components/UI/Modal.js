import React from 'react';
import ReactDOM from 'react-dom'

import styles from "./Modal.module.css";

const Backdrop = ()=>{
  return <div className={styles.backdrop} />
}

const ModalOverlay = props => {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
}

const element = document.getElementById("overlays");

const Modal = props => {
  return <>
    {ReactDOM.createPortal(<Backdrop /> ,element)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , element)}
  </>
} ;

export default Modal;
