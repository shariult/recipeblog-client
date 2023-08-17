import React from "react";
import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import styles from "./RecipeManage.module.scss";

function RecipeManage() {
  return (
    <div>
      <div>new recipe</div>
      <div>
        <h2 className="heading-2">New Recipe</h2>
        <Form>
          <Input type="text" name="title" />
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
