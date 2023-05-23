import React from "react";
import FooterNewsletter from "./FooterNewsletter";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 20,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    gap: 15,
    display: "flex",
    maxWidth: 1260,
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  socialMediaList: {
    display: "flex",
    gap: 5,
    "& svg": {
      fontSize: 30,
    },
  },
  icon: {
    padding: 5,
    borderRadius: "50%",
    height: 50,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > a": {
      height: 30,
      width: 30,
      transition: "color 0.3s ease",
      "&:hover": {
        color: "#333",
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
  },
  store: {
    textAlign: "center",
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer>
      <FooterNewsletter />
      <div className={classes.container}>
        <div className={classes.content}>
          <ul className={classes.socialMediaList}>
            <li className={`${classes.icon} youtube`}>
              <a target="blank">
                <YouTube />
              </a>
            </li>
            <li className={`${classes.icon} instagram`}>
              <a target="blank">
                <Instagram />
              </a>
            </li>
            <li className={`${classes.icon} facebook`}>
              <a target="blank">
                <Facebook />
              </a>
            </li>
            <li className={`${classes.icon} whatsapp`}>
              <a target="blank">
                <WhatsApp />
              </a>
            </li>
          </ul>

          <div className={classes.store}>
            <Typography color="#fff" fontWeight={600} fontSize={20}>
              GG Store
            </Typography>
            <Typography color="#fff" fontWeight={600} fontSize={14}>
              Since 2021
            </Typography>
          </div>

          <img
            src="/logo/gabe-nobg.png"
            width={100}
            style={{ borderRadius: 6 }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
