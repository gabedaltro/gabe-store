import React from "react";
import { makeStyles } from "@mui/styles";
import { CircularProgress, Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  message: {
    marginTop: 15,
  },
});

const InsideLoading: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <CircularProgress color="primary" />
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.message}
        >
          carregando...
        </Typography>
      </div>
    </>
  );
};

export default InsideLoading;
