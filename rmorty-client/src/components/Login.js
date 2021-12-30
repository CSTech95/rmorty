import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(username, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">username</label>
        <input
          value={username}
          onChange={(event) => setusername(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;