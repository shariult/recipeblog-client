import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

type BackdropPropsType = {
  onClick: () => void;
};
type ModalCardPropsType = {
  children: React.ReactNode;
};
type ModalPropsType = {
  children: React.ReactNode;
  onConfirm: () => void;
};

const overlaysEl = document.getElementById("overlays");

function Backdrop(props: BackdropPropsType) {
  return (
    <div className={styles["modal__backdrop"]} onClick={props.onClick}></div>
  );
}

function ModalCard(props: ModalCardPropsType) {
  return <div className={styles["modal__card"]}>{props.children}</div>;
}

function Modal(props: ModalPropsType) {
  return (
    <>
      {overlaysEl &&
        ReactDOM.createPortal(
          <Backdrop onClick={props.onConfirm} />,
          overlaysEl
        )}
      {overlaysEl &&
        ReactDOM.createPortal(
          <ModalCard>{props.children}</ModalCard>,
          overlaysEl
        )}
    </>
  );
}

export default Modal;
