import React from "react";
import { Typography, styled } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
});

const Error404: React.FC = () => {
  return (
    <Container>
      <Typography>Pagina não encontrada</Typography>
    </Container>
  );
};

export default Error404;
