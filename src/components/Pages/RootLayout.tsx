import React from "react";
import { Outlet } from "react-router";
import Container from "../ui/Container";
import NavBar from "../layout/NavBar";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default RootLayout;
