import React from "react";

import styles from "./Container.module.scss";

type ContainerPropsType = {
  children: React.ReactNode;
  className?: string;
};

function Container(props: ContainerPropsType) {
  const allClasses = props.className
    ? `${styles["container"]} ${props.className}`
    : `${styles["container"]}`;
  return <main className={allClasses}>{props.children}</main>;
}

export default Container;
