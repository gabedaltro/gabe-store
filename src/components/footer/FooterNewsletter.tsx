import React from "react";
import { Button, Typography, styled } from "@mui/material";
import Input from "../input/Input";

const Container = styled("div")(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.palette.primary.dark,
}));

const Content = styled("div")({
  gap: 15,
  display: "flex",
  maxWidth: 1260,
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "space-between",
  "& > div": {
    flex: 1,
  },
});

const CustomButton = styled(Button)({
  maxWidth: 150,
  fontSize: 15,
  color: "#fff",
  textTransform: "none",
});

const CustomInput = styled(Input)(({ theme }) => ({
  "&:hover": {
    borderColor: theme.palette.secondary.main,
  },
  "&:focus": {
    borderColor: theme.palette.secondary.main,
  },
}));

const FooterNewsletter: React.FC = () => {
  return (
    <Container>
      <Content>
        <Typography color="#fff" fontSize={13} fontWeight={600}>
          Receba novidades e promoções exclusivas
        </Typography>
        <CustomInput
          name="name"
          placeholder="insira seu nome"
          required
          type="name"
          autoComplete="name"
        />
        <CustomInput
          name="email"
          placeholder="insira seu e-mail"
          required
          type="email"
          autoComplete="email"
        />
        <CustomInput
          name="number"
          placeholder="insira seu whatsapp"
          inputMode="numeric"
          required
          autoComplete="number"
        />
        <CustomButton variant="contained" color="secondary">
          assinar
        </CustomButton>
      </Content>
    </Container>
  );
};

export default FooterNewsletter;
