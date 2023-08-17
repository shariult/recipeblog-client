import React from "react";

import styles from "./Textarea.module.scss";

type TextareaPropsType = {
  children?: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  className?: string;
  id?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  required?: string;
  label?: string;
  variant?: "inline";
  error?: string;
};

function Textarea(props: TextareaPropsType) {
  const allGroupClasses =
    props.variant === "inline"
      ? `${styles["form__group-inline"]}`
      : `${styles["form__group"]}`;
  const allInputClasses = props.className
    ? `${styles["form__textarea"]} ${props.className}`
    : `${styles["form__textarea"]}`;
  return (
    <div className={allGroupClasses}>
      {props.label && (
        <label htmlFor={props.id} className={styles["form__label"]}>
          {props.label}
        </label>
      )}
      <textarea
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={allInputClasses}
        id={props.id}
        placeholder={props.placeholder || props.name}
        required={props.required === "true" ? true : false}
      >
        {props.value}
      </textarea>
      {props.error && <p className={styles["form__error"]}>{props.error}</p>}
    </div>
  );
}

export default Textarea;
