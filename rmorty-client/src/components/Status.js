import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import {
  Link
} from "react-router-dom";
const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div className="flex place-content-end pb-2 pr-1">
      {status ? <button className="w-20 text-sm p-1 hover:bg-blue-500 bg-blue-700 text-white font-bold rounded-full" onClick={logout}>Logout</button> : <Link to="/" className="text-white">"Please login"</Link>}
    </div>
  );
};
export default Status;