import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const Error404: React.FC = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography>Pagina não encontrada</Typography>
    </div>
  );
};

export default Error404;
