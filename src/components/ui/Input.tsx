import React from "react";

import styles from "./Input.module.scss";

type InputPropsType = {
  children?: React.ReactNode;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  className?: string;
  id?: string;
  placeholder?: string;
  min?: string;
  max?: string;
  step?: string;
  required?: string;
  label?: string;
  variant?: "inline" | "notFull";
  error?: string;
};

function Input(props: InputPropsType) {
  const allGroupClasses =
    props.variant === "inline"
      ? `${styles["form__group-inline"]}`
      : props.variant === "notFull"
      ? `${styles["form__not-full"]}`
      : `${styles["form__group"]}`;
  const allInputClasses = props.className
    ? `${styles["form__input"]} ${props.className}`
    : `${styles["form__input"]}`;
  return (
    <div className={allGroupClasses}>
      {props.label && (
        <label htmlFor={props.id} className={styles["form__label"]}>
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={allInputClasses}
        id={props.id}
        placeholder={props.placeholder || props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        required={props.required === "true" ? true : false}
      />
      {props.error && <p className={styles["form__error"]}>{props.error}</p>}
    </div>
  );
}

export default Input;
