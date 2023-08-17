import React from "react";
import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";

import styles from "./RecipeManage.module.scss";

function RecipeManage() {
  return (
    <div className={styles["recipe-manage"]}>
      <div className={styles["recipe-manage__img-box"]}></div>
      <div className={styles["recipe-manage__content"]}>
        <h2 className="heading-2">New Recipe</h2>
        <Form>
          <Input type="text" name="title" />
          <Input type="text" name="image" />
          <Input
            type="number"
            name="servings"
            min="0"
            step="1"
            variant="inline"
          />
          <Input
            type="number"
            name="total-time"
            min="0"
            step="1"
            variant="inline"
          />
          <Select name="category" variant="inline">
            <option value="" disabled>
              Select Categories
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="desert">Desert</option>
          </Select>
          <Input type="text" name="tags" variant="inline" />
          <Input type="text" name="ingredients" />
          <Input type="text" name="methods" variant="notFull" />
          <Button>+</Button>
          <Button>-</Button>
          <div className="form__group">
            <Button type="submit" variant="primary">
              Add Recipe
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RecipeManage;
