import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Theme, Typography } from "@mui/material";
import Input from "../input/Input";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 20,
    backgroundColor: theme.palette.primary.dark,
  },
  content: {
    gap: 15,
    display: "flex",
    maxWidth: 1260,
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    "& > div": {
      flex: 1,
    },
  },
  button: {
    maxWidth: 100,
  },
}));

const FooterNewsletter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography color="#fff" fontSize={14} fontWeight={600}>
          Receba novidades e promoções exclusivas
        </Typography>
        <Input
          name="name"
          placeholder="Insira seu nome"
          required
          type="name"
          autoComplete="name"
        />
        <Input
          name="email"
          placeholder="Insira seu e-mail"
          required
          type="email"
          autoComplete="email"
        />
        <Input
          name="number"
          placeholder="Insira seu whatsapp"
          inputMode="numeric"
          required
          autoComplete="number"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          assinar
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
