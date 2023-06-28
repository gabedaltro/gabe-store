import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import { Typography, styled } from "@mui/material";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { useWindowSize } from "../../hooks/windowSize";

const Container = styled("div")(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.palette.primary.main,
}));

const ContainerTop = styled("div")(({ theme }) => ({
  gap: 15,
  padding: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.dark,
}));

const ImageMobile = styled("img")({
  width: 50,
  padding: 5,
  borderRadius: 6,
  boxShadow: "0 2px 5px 0 rgba(0,0,0,.18)",
});

const ImageDesktop = styled("img")(({ theme }) => ({
  width: 150,
  padding: 5,
  borderRadius: 6,
  boxShadow: "0 2px 5px 0 rgba(0,0,0,.18)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Content = styled("div")(({ theme }) => ({
  gap: 15,
  display: "flex",
  maxWidth: 1260,
  margin: "0 auto",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const SocialMediaList = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: 5,
  "& svg": {
    fontSize: 25,
    color: "#fff",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#ddd",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
}));

const Icon = styled("li")(({ theme }) => ({
  padding: 5,
  borderRadius: "50%",
  height: 50,
  width: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: 40,
    height: 40,
  },
  "& > a": {
    height: 25,
    width: 25,

    [theme.breakpoints.down("md")]: {
      width: 20,
      height: 20,
    },
  },
  "&.youtube": {
    background: "#ff0000",
  },
  "&.facebook": {
    background: "#1771e6",
  },
  "&.whatsapp": {
    background: "#1dc13e",
  },
  "&.instagram": {
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
}));

const Store = styled("div")({
  textAlign: "center",
});

const Footer: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <footer>
      {width < 900 ? (
        <ContainerTop>
          <ImageMobile src="/logo/logo-mobile-nobg.png" />

          <Typography color="#fff">Compre aqui na Gabe Shop</Typography>
        </ContainerTop>
      ) : (
        <FooterNewsletter />
      )}
      <Container>
        <Content>
          <SocialMediaList>
            <a target="blank">
              <Icon className="youtube">
                <YouTube />
              </Icon>
            </a>
            <a target="blank">
              <Icon className="instagram">
                <Instagram />
              </Icon>
            </a>
            <a target="blank">
              <Icon className="facebook">
                <Facebook />
              </Icon>
            </a>
            <a target="blank">
              <Icon className="whatsapp">
                <WhatsApp />
              </Icon>
            </a>
          </SocialMediaList>

          <Store>
            <Typography color="#fff" fontWeight={600} fontSize={20}>
              GG Store
            </Typography>
            <Typography
              color="#fff"
              variant="subtitle2"
              fontWeight={600}
              fontSize={14}
            >
              Since 2021
            </Typography>
          </Store>

          <ImageDesktop src="/logo/logo-desktop-nobg.png" />
        </Content>
      </Container>
    </footer>
  );
};

export default Footer;
