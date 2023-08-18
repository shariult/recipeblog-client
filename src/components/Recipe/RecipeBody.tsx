import React from "react";
import TagList from "../ui/TagList";

import styles from "./RecipeBody.module.scss";

function RecipeBody() {
  return (
    <div className={styles["recipe-body"]}>
      <div className={styles["recipe-body__process"]}>
        <h3 className="heading-3">Process</h3>
        <ol className={styles["recipe-body__ol"]}>
          <li className={styles["recipe-body__li"]}>
            <span className={styles["recipe-body__sub"]}>Step</span>
            <p className={styles["recipe-body__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum tempore quis veniam. Ad placeat dolore autem
              sint aperiam ducimus eum libero nesciunt perferendis facere magni
              aspernatur, quidem voluptatibus accusantium!
            </p>
          </li>
          <li className={styles["recipe-body__li"]}>
            <span className={styles["recipe-body__sub"]}>Step</span>
            <p className={styles["recipe-body__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum tempore quis veniam. Ad placeat dolore autem
              sint aperiam ducimus eum libero nesciunt perferendis facere magni
              aspernatur, quidem voluptatibus accusantium!
            </p>
          </li>
          <li className={styles["recipe-body__li"]}>
            <span className={styles["recipe-body__sub"]}>Step</span>
            <p className={styles["recipe-body__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum tempore quis veniam. Ad placeat dolore autem
              sint aperiam ducimus eum libero nesciunt perferendis facere magni
              aspernatur, quidem voluptatibus accusantium!
            </p>
          </li>
          <li className={styles["recipe-body__li"]}>
            <span className={styles["recipe-body__sub"]}>Step</span>
            <p className={styles["recipe-body__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum tempore quis veniam. Ad placeat dolore autem
              sint aperiam ducimus eum libero nesciunt perferendis facere magni
              aspernatur, quidem voluptatibus accusantium!
            </p>
          </li>
          <li className={styles["recipe-body__li"]}>
            <span className={styles["recipe-body__sub"]}>Step</span>
            <p className={styles["recipe-body__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum tempore quis veniam. Ad placeat dolore autem
              sint aperiam ducimus eum libero nesciunt perferendis facere magni
              aspernatur, quidem voluptatibus accusantium!
            </p>
          </li>
        </ol>
      </div>
      <div className={styles["recipe-body__ingredients"]}>
        <h3 className="heading-3">Ingredients</h3>
        <ul className={styles["recipe-body__list"]}>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
          <li className={styles["recipe-body__item"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aut!
          </li>
        </ul>
        <h3 className="heading-3">Tags</h3>
        <TagList />
      </div>
    </div>
  );
}

export default RecipeBody;
