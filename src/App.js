import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import { auth } from "./firebase";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState();

  useEffect(() => {
    if (!auth) {
      return setIsUserSignedIn(false);
    }
    return setIsUserSignedIn(true);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home isUserSignedIn={isUserSignedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
