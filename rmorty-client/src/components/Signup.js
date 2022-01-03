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
      <form className="text-sm bg-sky-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <label htmlFor="username" className="text-sm">username</label>
        <input
        className="w-40 h-7 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        ></input>
        <label htmlFor="password" className="text-sm">Password</label>
        <input
        className="w-40 h-7 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button className="h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;