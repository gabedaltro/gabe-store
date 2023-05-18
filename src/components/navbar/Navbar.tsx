import { Search, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, InputBase, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    padding: "2px 10px",
  },
});

const SearchInput = styled("div")(() => ({
  minWidth: 350,
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "white",
  borderRadius: "0px 40px 40px 0px",
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
  borderRadius: "0px 40px 40px 0px",
  backgroundColor: theme.palette.secondary.main,
}));

const Icons = styled("div")(({ theme }) => ({
  gap: 20,
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography color="#fff">Store</Typography>
      <SearchInput>
        <InputBase
          className={classes.input}
          fullWidth
          color="warning"
          placeholder="o que está procurando?"
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
    </div>
  );
};

export default Navbar;
