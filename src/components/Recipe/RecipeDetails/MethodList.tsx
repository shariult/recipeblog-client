import React from "react";

import styles from "./MethodList.module.scss";

function MethodList() {
  return (
    <div className={styles["methods"]}>
      <h3 className="heading-3">Process</h3>
      <ol className={styles["methods__list"]}>
        <li className={styles["methods__item"]}>
          <span className={styles["methods__sub"]}>Step</span>
          <p className={styles["methods__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum tempore quis veniam. Ad placeat dolore autem sint aperiam
            ducimus eum libero nesciunt perferendis facere magni aspernatur,
            quidem voluptatibus accusantium!
          </p>
        </li>
        <li className={styles["methods__item"]}>
          <span className={styles["methods__sub"]}>Step</span>
          <p className={styles["methods__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum tempore quis veniam. Ad placeat dolore autem sint aperiam
            ducimus eum libero nesciunt perferendis facere magni aspernatur,
            quidem voluptatibus accusantium!
          </p>
        </li>
        <li className={styles["methods__item"]}>
          <span className={styles["methods__sub"]}>Step</span>
          <p className={styles["methods__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum tempore quis veniam. Ad placeat dolore autem sint aperiam
            ducimus eum libero nesciunt perferendis facere magni aspernatur,
            quidem voluptatibus accusantium!
          </p>
        </li>
        <li className={styles["methods__item"]}>
          <span className={styles["methods__sub"]}>Step</span>
          <p className={styles["methods__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum tempore quis veniam. Ad placeat dolore autem sint aperiam
            ducimus eum libero nesciunt perferendis facere magni aspernatur,
            quidem voluptatibus accusantium!
          </p>
        </li>
        <li className={styles["methods__item"]}>
          <span className={styles["methods__sub"]}>Step</span>
          <p className={styles["methods__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum tempore quis veniam. Ad placeat dolore autem sint aperiam
            ducimus eum libero nesciunt perferendis facere magni aspernatur,
            quidem voluptatibus accusantium!
          </p>
        </li>
      </ol>
    </div>
  );
}

export default MethodList;
