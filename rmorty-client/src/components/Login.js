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
      <form className="w-64 h-64 text-white text-sm bg-zinc-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
        <h1 className="text-center">Login</h1>
        <label htmlFor="username" className="text-center text-sm pb-2">username</label>
       <div className="flex justify-center">
         <div>
        <input
        className=" w-40 h-7 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        ></input>
        <label htmlFor="password" className="text-sm text-center pb-2">Password</label>
        <input
        className="w-40 h-7 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
         </div>
        </div>
<div className="flex justify-center">
        <button  className="justify-end text-sm hover:bg-green-500 bg-blue-700 text-white font-bold p-1 px-2 rounded-xl place-self-center" type="submit">
          Login
          </button>
</div>
      </form>
    </div>
  );
};

export default Login;