import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/users" style={{ color: "#fff", textDecoration: "none" }}>
              Другие пользователи
            </Link>
          </Typography>
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
