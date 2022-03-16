import { Button, Container, List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { auth, signInWithGithub } from "../../firebase";

const Login = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const handleClick = () => {
    signInWithGithub();
  };

  const signOut = () => {
    auth.signOut();
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });

  return (
    <div>
      <Container maxWidth="md">
        {isUserSignedIn ? (
          <div
            style={{
              margin: 50,
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
              }}
            >
              <img
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </Box>
            <List style={{ marginLeft: 50 }}>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Имя: Жанбо</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Логин: жанбо</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Email: janbo@gmail.com</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Компания: janbo corp</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Местоположение: bishek</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Описание профиля: BIO</ListItemText>
              </ListItem>
              <ListItem sx={{ borderBottom: 1 }}>
                <ListItemText>Ссылка профиля : link</ListItemText>
              </ListItem>
            </List>
            <a
              onClick={signOut}
              style={{ marginLeft: 80, color: "blue", cursor: "pointer" }}
            >
              Sign out
            </a>
          </div>
        ) : (
          <Button onClick={handleClick}>Github</Button>
        )}
      </Container>
    </div>
  );
};

export default Login;
