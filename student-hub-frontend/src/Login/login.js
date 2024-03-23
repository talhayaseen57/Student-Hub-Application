import React, { useState } from "react";
import { useLocalStorageFunc } from "../util/useLocalStorageFunc";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [jwtToken, setJwtToken] = useLocalStorageFunc("", 'jwtToken');

  function sendLoginRequest() {
    console.log("Sending the login request!");

    const requestBody = {
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        else {
          return Promise.reject("Invalid login attempt!");
        }        
      })
      .then((data) => {
        setJwtToken(data.accessToken);
        window.location.href = 'dashboard';
      })
      .catch((msg) => alert(msg));

  }

  return (
    <>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <button id="submit" type="button" onClick={() => sendLoginRequest()}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
