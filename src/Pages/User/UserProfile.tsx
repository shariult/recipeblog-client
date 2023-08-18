import React from "react";

import styles from "./UserProfile.module.scss";
import RecipeList from "../../components/Recipe/RecipeList";

function UserProfile() {
  return (
    <section className={styles["profile"]}>
      <div className={styles["profile__header"]}>
        <div className={styles["profile__img-box"]}>
          <img
            src="/users/user-2.jpg"
            alt="oval shaped object inside colored rectangle"
            className={styles["profile__img"]}
          />
        </div>
        <div className={styles["profile__info"]}>
          <h2 className="heading-2">Muhammed Admed</h2>
          <ul className={styles["profile__list"]}>
            <li className={styles["profile__item"]}>
              <span className={styles["profile__label"]}>Username</span>
              <p className={styles["profile__text"]}>Muhammed</p>
            </li>
            <li className={styles["profile__item"]}>
              <span className={styles["profile__label"]}>Email</span>
              <p className={styles["profile__text"]}>sdsds@dfdfd.com</p>
            </li>
            <li className={styles["profile__item"]}>
              <span className={styles["profile__label"]}>Gender</span>
              <p className={styles["profile__text"]}>Male</p>
            </li>
            <li className={styles["profile__item"]}>
              <span className={styles["profile__label"]}>Occupation</span>
              <p className={styles["profile__text"]}>Teacher</p>
            </li>
          </ul>
          <p className={styles["profile__about"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ipsam dolor, magni amet ipsa, deleniti dignissimos
            laboriosam laudantium necessitatibus illum quam nam! Nesciunt vitae
            ipsum minima earum aut, maxime repellendus laudantium rerum id
            accusamus ipsam, sunt deleniti aliquid, corporis ab.
          </p>
        </div>
      </div>
      <div className={styles["recipes"]}>
        <div className={styles["recipes__nav"]}>
          <ul className={styles["recipes__nav-list"]}>
            <li className={styles["recipes__nav-item"]}>Owned Recipes</li>
            <li className={styles["recipes__nav-item"]}>Saved Recipes</li>
          </ul>
        </div>
        <RecipeList />
      </div>
    </section>
  );
}

export default UserProfile;
