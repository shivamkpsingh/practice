import React, { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const MyDrawer = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <List>
      <ListItem className="flex flex-col">
      <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="logo"
          className="w-12 sm:w-36"
        />
        <div className="navbarBottom flex flex-col mt-4  border-b-2  ">
          <a href="/a">Her Products</a>
          <a href="/b">His Products</a>
          <a href="/c">Kiddo Product</a>
          <a href="/d">Her Product</a>
          <a href="/e">His Product</a>
          <a href="/f">Kiddo Product</a>
        </div>
      </ListItem>
    </List>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor={`left`} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};
export default MyDrawer;
