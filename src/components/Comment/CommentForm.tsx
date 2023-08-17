import React from "react";

import styles from "./CommentForm.module.scss";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

function CommentForm() {
  return (
    <Form className={styles["comment-form"]}>
      <Textarea name="comment" required="true"></Textarea>
      <div className="form__group">
        <Button variant="primary">Comment</Button>
      </div>
    </Form>
  );
}

export default CommentForm;
