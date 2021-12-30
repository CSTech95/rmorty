import React, { useState } from "react";
import UserPool from "../UserPool";

const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(username, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form style={{padding: ".3em",display:"flex", flexDirection:"column"}} onSubmit={onSubmit}>
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

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;