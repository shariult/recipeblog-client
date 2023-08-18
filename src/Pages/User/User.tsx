import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Textarea from "../../components/ui/Textarea";

import styles from "./User.module.scss";
import Select from "../../components/ui/Select";

const animationClasses = {
  enter: "",
  enterActive: styles["animateIn"],
  exit: "",
  exitActive: styles["animateOut"],
  appear: "", // Not Needed
  appearActive: "", // Not Needed
};
const animationTimeout = {
  enter: 500,
  exit: 300,
};

function User() {
  const [searchParams] = useSearchParams();
  const isModeSignUp = searchParams.get("mode") === "signup";

  return (
    <section className={styles["section-user"]}>
      <div className={styles["user"]}>
        <h2 className="heading-2">Sign {isModeSignUp ? "Up" : "In"}</h2>
        <Form>
          <Input type="text" name="username" />
          <Input type="password" name="password" />
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Input type="text" name="fullname" />
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Input type="email" name="email" />
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Input type="text" name="image" />
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Input type="text" name="country" />
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Input type="text" name="occupation" variant="inline" />
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Select name="gender" variant="inline">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </CSSTransition>
          <CSSTransition
            in={isModeSignUp}
            classNames={animationClasses}
            timeout={animationTimeout}
            mountOnEnter
            unmountOnExit
          >
            <Textarea name="about"></Textarea>
          </CSSTransition>
          <div className="form__group">
            <Button type="submit" variant="primary">
              Sign {isModeSignUp ? "Up" : "In"}
            </Button>
            <Link
              to={`/user?mode=${isModeSignUp ? "signin" : "signup"}`}
              className={styles["user__link"]}
            >
              Sign {isModeSignUp ? "In" : "Up"}
            </Link>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default User;
