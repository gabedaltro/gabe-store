import { makeStyles } from "@mui/styles";
import React from "react";
import { Product } from "../../types/product";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: 15,
    height: 15,
    cursor: "pointer",
    background: "#eee",
    transform: "scale(0.8)",
    borderRadius: "100%",
    boxShadow: "1px 5px 6px 0px #666",
    transition: "all ease 0.7s",
    "&.active": {
      background: theme.palette.primary.main,
      transform: "scale(1.3)",
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
