import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [inputText, setInputText] = useState("");
  const [users, setUsers] = useState([]);

  function searchUser(e) {
    setInputText(e.target.value);
  }

  const getUser = async () => {
    await axios
      .get(`https://api.github.com/users/${inputText}`)
      .then(({ data }) => setUsers(data))
      .catch((err) => {
        setUsers(null);
        return;
      });
  };

  return (
    <div>
      <Container maxWidth="lg">
        <input
          type={"text"}
          placeholder="Поиск юзера"
          value={inputText}
          onChange={searchUser}
        />
        <button onClick={getUser}>Search</button>
        <div>
          {users ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 100,
              }}
            >
              <div>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={users.avatar_url}
                />
              </div>
              <div>
                <div>Логин: {users.login}</div>
                <div>
                  Ссылка на страницу:
                  <a href={users.html_url}>{users.html_url} </a>
                </div>
              </div>
            </div>
          ) : (
            <h1>Нету такого пользователя</h1>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Users;
