import React, { useState, useEffect } from "react";
import { useApp } from "../../hooks/app";
import {
  IconButton,
  LinearProgress,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { More } from "@mui/icons-material";
import NavbarCategory from "./NavbarCategory";
import { useWindowSize } from "../../hooks/windowSize";
import { Link } from "react-router-dom";

const Container = styled("div")({
  display: "flex",
  padding: "10px 30px",
  position: "relative",
  minHeight: 64,
  alignItems: "center",
});

const Content = styled("div")(({ theme }) => ({
  flex: 0.6,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flex: 1,
    justifyContent: "end",
  },
}));

const Menu = styled("div")(({ theme }) => ({
  display: "grid",
  alignItems: "center",
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
}));

let timer: NodeJS.Timeout;

const NavbarCategories: React.FC = () => {
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
    setShownMenu((state) => !state);
    setViewMoreCategories((state) => !state);
  }

  function handleOnMouseOverMenu() {
    clearTimeout(timer);
  }

  return (
    <Container id="categories-link" onMouseLeave={handleOnMouseLeave}>
      {loading ? (
        <LinearProgress style={{ width: "100%" }} />
      ) : (
        <>
          <Typography flex={0.4} fontWeight="bold">
            SECTIONS
          </Typography>
          <Content>
            {width >= 900 &&
              categories.slice(0, 5).map((item, index) => (
                <Link key={index} to={`/produtos?categoria=${item}`}>
                  {item}
                </Link>
              ))}
            <Tooltip title="+ categories">
              <IconButton
                onClick={handleOnMouseEnter}
                onMouseEnter={handleOnMouseEnter}
              >
                <More />
              </IconButton>
            </Tooltip>
          </Content>
          <Menu
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
              textAlign: "center",
            }}
            className={shownMenu ? "active" : ""}
          >
            {categories
              .slice(width >= 900 ? 5 : 0, categories.length)
              .map((category, index) => (
                <NavbarCategory key={index} category={category} />
              ))}
          </Menu>
        </>
      )}
    </Container>
  );
};

export default NavbarCategories;
