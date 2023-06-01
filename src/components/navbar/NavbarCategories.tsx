import React, { useState, useEffect } from "react";
import { useApp } from "../../hooks/app";
import { makeStyles } from "@mui/styles";
import {
  IconButton,
  LinearProgress,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import { More } from "@mui/icons-material";
import NavbarCategory from "./NavbarCategory";
import { useWindowSize } from "../../hooks/windowSize";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    padding: "10px 30px",
    position: "relative",
    minHeight: 64,
    alignItems: "center",
  },
  content: {
    flex: 0.6,
    display: "flex",
    justifyContent: "space-between",
  },
  categoryItem: {
    textTransform: "uppercase",
    color: "#666",
    fontWeight: 600,
  },
  menu: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    flexDirection: "column",
    position: "absolute",
    padding: "12px 15px",
    width: "100%",
    minHeight: 350,
    backgroundColor: "#fff",
    zIndex: 40,
    border: "1px solid #eee",
    fontSize: 14,
    transition: "all 0.1s linear",
    opacity: 0,
    justifyItems: "center",
    transform: "translateY(-20px)",
    "&.active": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "& > a": {
      display: "inline-flex",
      marginRight: 0,
      padding: 7,
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

let timer: NodeJS.Timeout;

const NavbarCategories: React.FC = () => {
  const classes = useStyles();
  const { categories, loading } = useApp();
  const { width } = useWindowSize();
  const [shownMenu, setShownMenu] = useState(false);
  const [viewMoreCategories, setViewMoreCategories] = useState(false);
  const [rects, setRects] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [shownMenu, width]);

  function handleResize() {
    const element = document.getElementById("categories-link");

    if (!element) return;

    const rects = element.getBoundingClientRect();

    const left = rects.y - rects.width;

    setRects({
      top: rects.height,
      left: left < 0 ? 0 : 0,
    });
  }

  function handleOnMouseLeave() {
    timer = setTimeout(() => setShownMenu(false), 100);
  }

  function handleOnMouseEnter() {
    setShownMenu(true);
    setViewMoreCategories(true);
  }

  function handleOnMouseOverMenu() {
    clearTimeout(timer);
  }

  return (
    <div
      className={classes.container}
      id="categories-link"
      onMouseLeave={handleOnMouseLeave}
    >
      {loading ? (
        <LinearProgress style={{ width: "100%" }} />
      ) : (
        <>
          <Typography flex={0.4} fontWeight="bold">
            SEÇÕES
          </Typography>
          <div className={classes.content}>
            {categories.slice(0, 5).map((item) => (
              <Link to={`/produtos?categoria=${item}`}>
                <a className={classes.categoryItem}>{item}</a>
              </Link>
            ))}
            <Tooltip title="+ categorias">
              <IconButton onMouseEnter={handleOnMouseEnter}>
                <More />
              </IconButton>
            </Tooltip>
          </div>
          <div
            onClick={() => setShownMenu(false)}
            onMouseOver={handleOnMouseOverMenu}
            onTransitionEnd={
              viewMoreCategories && !shownMenu
                ? () => setViewMoreCategories(false)
                : undefined
            }
            style={{
              top: rects.top,
              left: rects.left,
              visibility: viewMoreCategories ? "visible" : "hidden",
            }}
            className={shownMenu ? `${classes.menu} active` : classes.menu}
          >
            {categories.slice(5, categories.length).map((category) => (
              <NavbarCategory category={category} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarCategories;
