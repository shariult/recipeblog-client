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
          <h2 className="heading-2">Profile</h2>
          <div className={styles["profile__info-box"]}>
            <span className={styles["profile__label"]}>Username</span>
            <p className={styles["profile__text"]}>@Muhammed</p>
          </div>
          <div className={styles["profile__info-box"]}>
            <span className={styles["profile__label"]}>Full Name</span>
            <p className={styles["profile__text"]}>Muhammed Admed</p>
          </div>
          <div className={styles["profile__info-box"]}>
            <span className={styles["profile__label"]}>Email</span>
            <p className={styles["profile__text"]}>sdsds@dfdfd.com</p>
          </div>
          <div className={styles["profile__info-box"]}>
            <span className={styles["profile__label"]}>Bio</span>
            <p className={styles["profile__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ipsam dolor, magni amet ipsa, deleniti dignissimos
              laboriosam laudantium necessitatibus illum quam nam! Nesciunt
              vitae ipsum minima earum aut, maxime repellendus laudantium rerum
              id accusamus ipsam, sunt deleniti aliquid, corporis ab.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["profile__recipes"]}>
        <h3 className={`heading-3 ${styles["profile__recipes-title"]}`}>
          Recipes
        </h3>
        <RecipeList />
      </div>
    </section>
  );
}

export default UserProfile;
