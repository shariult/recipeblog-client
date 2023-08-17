import React from "react";
import CommentItem from "./CommentItem";

import styles from "./CommentList.module.scss";

function CommentList() {
  return (
    <div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}

export default CommentList;
