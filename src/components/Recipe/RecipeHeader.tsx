import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPlusCircle, FaUserAlt } from "react-icons/fa";
import { PiGaugeFill } from "react-icons/pi";
import Button from "../../components/ui/Button";

import styles from "./RecipeHeader.module.scss";

function RecipeHeader() {
  return (
    <section className={styles["recipe-header"]}>
      <div className={styles["recipe-header__header"]}>
        <div className={styles["recipe-header__img-box"]}>
          <img
            src="/recipes/recipe-1.jpg"
            alt="recipe book on table"
            className={styles["recipe-header__img"]}
          />
        </div>
        <div className={styles["recipe-header__text-box"]}>
          <h2 className="heading-2">
            Recipe Lorem ipsum dolor sit, amet consectetur adipisicing{" "}
          </h2>
          <p className={styles["recipe-header__text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem
            totam ut, voluptatem nulla veritatis cum temporibus tempore, odio
            fugit, nihil aperiam! Odit dignissimos quae eligendi molestias vero
            tempore incidunt.
          </p>
          <div className={styles["recipe-header__info-box"]}>
            <div className={styles["recipe-header__info"]}>
              <span
                className={styles["recipe-header__info-icon"]}
                style={{ fontSize: "40px" }}
              >
                <PiGaugeFill />
              </span>
              <h5 className={styles["recipe-header__info-title"]}>
                Difficulty
              </h5>
              <p className={styles["recipe-header__info-text"]}>2 hours</p>
            </div>
            <div className={styles["recipe-header__info"]}>
              <span className={styles["recipe-header__info-icon"]}>
                <FaClock />
              </span>
              <h5 className={styles["recipe-header__info-title"]}>
                Time Needed
              </h5>
              <p className={styles["recipe-header__info-text"]}>2 hours</p>
            </div>
            <div className={styles["recipe-header__info"]}>
              <span className={styles["recipe-header__info-icon"]}>
                <FaUserAlt />
              </span>
              <h5 className={styles["recipe-header__info-title"]}>Servings</h5>
              <p className={styles["recipe-header__info-text"]}>5 Persons</p>
            </div>
          </div>
          <div className={styles["recipe-header__user-box"]}>
            <div className={styles["recipe-header__author-box"]}>
              <Button
                variant="link"
                className={styles["recipe-header__author"]}
              >
                Created by <Link to="/">Ahmed</Link>
              </Button>
              <p className={styles["recipe-header__author-total"]}>
                21 recipes
              </p>
            </div>
            <Button
              variant="link"
              className={styles["recipe-header__user-save"]}
            >
              <FaPlusCircle />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeHeader;
