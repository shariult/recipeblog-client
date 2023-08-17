import React from "react";
import UserBox from "../User/UserBox";

import styles from "./CommentItem.module.scss";

function CommentItem() {
  return (
    <div className={styles["comment"]}>
      <UserBox />
      <p className={styles["comment__text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia
        voluptatem possimus odio sit corporis vel tenetur, adipisci veritatis
        suscipit dolorum amet dolorem, eaque reiciendis nobis error
        necessitatibus. Delectus fugit distinctio quod, ipsam eligendi enim
        molestias veniam cupiditate quis nostrum.
      </p>
    </div>
  );
}

export default CommentItem;
