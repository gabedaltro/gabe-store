import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../navbar/Navbar";

interface DefaultLayoutProps {
  element: React.ReactNode;
}

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    flexDirection: "column",
    position: "absolute",
    display: "flex",
    width: "100%",
  },
  nav: {
    top: 0,
    zIndex: 22,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
    minHeight: 64,
    position: "sticky",
    padding: "15px 30px",
    background: theme.palette.primary.main,
  },
  content: {
    width: "100%",
    overflow: "auto",
    minHeight: "calc(100vh - 104px)",
    padding: "20px 30px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // [theme.breakpoints.down("md")]: {
    //   padding: 15,
    // },
    "@media print": {
      padding: 0,
    },
  },
}));

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ element }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <Navbar />
      </nav>

      <div className={classes.content}>{element}</div>
    </div>
  );
};

export default DefaultLayout;
