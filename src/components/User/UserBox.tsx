import React from "react";

import styles from "./UserBox.module.scss";

function UserBox() {
  return (
    <div className={styles["user"]}>
      <div className={styles["user__img-box"]}>
        <img
          src="/users/user-1.jpg"
          alt="Oval shapped object in a rectangle"
          className={styles["user__img"]}
        />
      </div>
      <div className={styles["user__author-box"]}>
        <p className={styles["user__author"]}>Muhammed Ahmed</p>
        <p className={styles["user__time"]}>12 days ago</p>
      </div>
    </div>
  );
}

export default UserBox;
