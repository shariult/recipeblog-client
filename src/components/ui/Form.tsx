import React from "react";
import styles from "./Form.module.scss";

type FormPropsType = {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent) => void;
};

function Form(props: FormPropsType) {
  const allClasses = props.className
    ? `${styles["form"]} ${props.className}`
    : `${styles["form"]}`;
  return (
    <form className={allClasses} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;
