import { makeStyles } from "@mui/styles";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Product } from "../../types/product";

const useStyles = makeStyles((theme: DefaultTheme) => ({
  content: {
    width: 15,
    height: 15,
    cursor: "pointer",
    background: "#fff",
    borderRadius: "100%",
    border: "1px solid #666",
    boxShadow: "1px 5px 6px 0px #666",
    transition: "all ease 0.7s",
    "&.active": {
      background: theme.primary,
      transform: "scale(1.6)",
      border: "1px solid #fff",
    },
  },
  container: {
    left: 0,
    right: 0,
    zIndex: 19,
    width: 250,
    bottom: 15,
    display: "flex",
    margin: "0 auto",
    position: "absolute",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

interface DividerProps {
  filteredBanners: Product[];
  activeIndex: number;
  handleSetIndex(i: number): void;
}

const Divider: React.FC<DividerProps> = ({
  filteredBanners,
  activeIndex,
  handleSetIndex,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {filteredBanners.map((banner, i) => (
        <div
          key={banner.id}
          onClick={() => handleSetIndex(i)}
          className={`${classes.content} ${
            activeIndex === i ? "active" : undefined
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Divider;
