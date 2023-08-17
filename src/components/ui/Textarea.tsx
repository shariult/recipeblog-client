import React from "react";

import styles from "./Input.module.scss";

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
  variant?: string;
  error?: string;
};

function Textarea(props: TextareaPropsType) {
  const allGroupClasses =
    props.variant === "inline"
      ? `${styles["form__group"]} ${styles["form__group--inline"]}`
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
      {props.error && (
        <p className={styles["form__input-error"]}>{props.error}</p>
      )}
    </div>
  );
}

export default Textarea;
