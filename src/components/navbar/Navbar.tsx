import React from "react";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, InputBase, styled } from "@mui/material";
import { useWindowSize } from "../../hooks/windowSize";

const CustomInputBase = styled(InputBase)({
  padding: "2px 10px",
});

const SearchInput = styled("div")(({ theme }) => ({
  minWidth: 350,
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "white",
  borderRadius: "0px 40px 40px 0px",
  [theme.breakpoints.down("sm")]: {
    minWidth: 0,
    flex: 1,
  },
}));

const ButtonSearch = styled("div")(({ theme }) => ({
  top: 0,
  right: 0,
  width: 50,
  height: "100%",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  transition: "all ease 0.5s",
  borderRadius: "0px 40px 40px 0px",
  backgroundColor: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Icons = styled("div")(({ theme }) => ({
  gap: 20,
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Container = styled("div")({
  gap: 15,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Navbar: React.FC = () => {
  const { isMobile } = useWindowSize();
  return (
    <Container>
      <a href="/">
        {isMobile ? (
          <img
            src="/logo/logo-mobile-nobg.png"
            width={50}
            height={50}
            style={{ borderRadius: 6 }}
          />
        ) : (
          <img
            src="/logo/logo-desktop-nobg.png"
            width={150}
            height={60}
            style={{ borderRadius: 6 }}
          />
        )}
      </a>
      <SearchInput>
        <CustomInputBase
          fullWidth
          color="warning"
          placeholder="o que procura?"
        />
        <ButtonSearch>
          <Search />
        </ButtonSearch>
      </SearchInput>
      <Icons>
        <Badge badgeContent={4} color="error">
          <ShoppingCart sx={{ color: "#fff" }} />
        </Badge>
        <Avatar
          sx={{ width: 30, height: 30, border: "1px solid #fff" }}
          src={
            "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        />
      </Icons>
    </Container>
  );
};

export default Navbar;
