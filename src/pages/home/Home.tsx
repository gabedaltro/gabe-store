import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  slider: {
    height: 400,
  },
  products: {
    display: "flex",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.slider}>aqui vai ter uma slider</div>
      <div className={classes.products}>aqui aparecerão 4 produtos</div>
      <div className={classes.slider}>aqui vai ter uma slider</div>
      <div className={classes.slider}>aqui vai ter uma slider</div>
    </div>
  );
};

export default Home;
