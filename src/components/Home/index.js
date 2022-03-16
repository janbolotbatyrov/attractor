import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { margin } from "@mui/system";
import { Link } from "react-router-dom";

const Home = ({ isUserSignedIn }) => {
  const [repos, setRepos] = useState();
  const userName = localStorage.getItem("username");

  useEffect(async () => {
    if (isUserSignedIn) {
      await axios(
        `https://api.github.com/users/${userName}/repos?private`
      ).then(({ data }) => setRepos(data));
    } else {
      return;
    }
  }, [isUserSignedIn]);

  return (
    <div>
      <Container maxWidth="lg">
        <h1>Public repositories</h1>
        <ul style={{ listStyleType: "none" }}>
          {repos ? (
            repos.map((repo) => (
              <li
                key={repo.id}
                style={{ border: "1px solid #000", margin: 10, padding: 5 }}
              >
                <div>
                  Название: <b> {repo.name}</b>
                </div>
                <div>
                  Ссылка:
                  <a href={repo.html_url} style={{ cursor: "pointer" }}>
                    {repo.html_url}
                  </a>
                </div>
                {repo.owner.login}:
                <a href={repo.owner.html_url} style={{ cursor: "pointer" }}>
                  {repo.owner.html_url}
                </a>
              </li>
            ))
          ) : (
            <h1>
              Войдите в свой <Link to={"/login"}>аккаунт</Link>
            </h1>
          )}
        </ul>
      </Container>
    </div>
  );
};

export default Home;
