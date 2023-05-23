import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    padding: 5,
  },
  typography: {
    textAlign: "center",
    color: "#fff",
  },
}));

const NavbarWarning: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography fontSize={13} className={classes.typography}>
        PRIMEIRA COMPRA COM FRETE GRÁTIS!
      </Typography>
    </div>
  );
};

export default NavbarWarning;
