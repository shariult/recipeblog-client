import React from "react";
import { Outlet } from "react-router";
import Container from "../components/ui/Container";
import NavBar from "../components/layout/NavBar";

import styles from "./LayoutRoot.module.scss";

function LayoutRoot() {
  return (
    <>
      <NavBar />
      <Container className={styles["main"]}>
        <Outlet />
      </Container>
    </>
  );
}

export default LayoutRoot;
