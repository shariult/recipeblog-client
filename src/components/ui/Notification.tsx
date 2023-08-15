import React from "react";
import styles from "./Notification.module.scss";

type NotificationPropsType = {
  children: React.ReactNode;
  className: string;
};

function Notification(props: NotificationPropsType) {
  const allClasses = props.className
    ? `${styles["notification"]} ${props.className}`
    : `${styles["notification"]}`;
  return <div className={allClasses}>{props.children}</div>;
}

export default Notification;
