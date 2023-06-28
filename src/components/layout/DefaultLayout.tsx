import React from "react";
import { styled } from "@mui/material";
import Navbar from "../navbar/Navbar";
import NavbarWarning from "../navbar/NavbarWarning";
import NavbarCategories from "../navbar/NavbarCategories";
import Footer from "../footer/Footer";

interface DefaultLayoutProps {
  element: React.ReactNode;
}

const Container = styled("div")({
  flexDirection: "column",
  position: "absolute",
  display: "flex",
  width: "100%",
});

const Nav = styled("nav")(({ theme }) => ({
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
  minHeight: 64,
  padding: "15px 30px",
  background: theme.palette.primary.main,
}));

const Content = styled("div")({
  width: "100%",
  overflow: "auto",
  minHeight: "calc(100vh - 104px)",
  padding: "0px 30px 20px 30px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  "@media print": {
    padding: 0,
  },
});

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ element }) => {
  return (
    <Container>
      <header>
        <NavbarWarning />
        <Nav>
          <Navbar />
        </Nav>
        <NavbarCategories />
      </header>

      <Content>{element}</Content>

      <Footer />
    </Container>
  );
};

export default DefaultLayout;
