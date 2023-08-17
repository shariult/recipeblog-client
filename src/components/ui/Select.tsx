import React from "react";

import styles from "./Select.module.scss";

type SelectPropsType = {
  children: React.ReactNode;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  id?: string;
  required?: boolean;
  label?: string;
  variant?: "inline";
  error?: string;
};

function Select(props: SelectPropsType) {
  const allGroupClasses =
    props.variant === "inline"
      ? `${styles["form__group-inline"]}`
      : `${styles["form__group"]}`;
  const allSelectClasses = props.className
    ? `${styles["form__select"]} ${props.className}`
    : `${styles["form__select"]}`;
  return (
    <div className={allGroupClasses}>
      {props.label && (
        <label className={styles["form__label"]} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div className={allSelectClasses}>
        <select
          name={props.name}
          id={props.id}
          className={styles["form__select-menu"]}
          required={props.required}
        >
          {props.children}
        </select>
        <span className={styles["form__select-icon"]}></span>
      </div>
      {props.error && <p className={styles["form__error"]}>{props.error}</p>}
    </div>
  );
}

export default Select;
