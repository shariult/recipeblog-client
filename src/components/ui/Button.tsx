import React from "react";

import styles from "./Button.module.scss";

type ButtonPropsType = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
  variant?: string;
};

function Button(props: ButtonPropsType) {
  const allClasses = `${styles["btn"]} ${
    props.className ? props.className : ""
  } ${props.variant === "primary" ? styles["btn--primary"] : ""}`;
  return (
    <button
      className={allClasses}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
