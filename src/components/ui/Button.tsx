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
  let allClasses = `${styles["btn"]} ${
    props.className ? props.className : ""
  } ${props.variant === "primary" ? styles["btn--primary"] : ""}`;
  if (props.variant === "link") {
    allClasses = allClasses + styles["btn--link"];
  }
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
