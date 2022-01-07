import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

import Status from "./Status"
// ../../public/Alien-Wurm.svg
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-m lg:flex-grow">
  <div className="flex items-center flex-shrink-0 text-white mr-6 mb-5">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="first-line:uppercase first-letter:text-3xl first-letter:font-bold first-letter:text-blue-700
   font-semibold text-m">Rick & Morty</span>
  </div>
      <Link to="/home">

      </Link>
      <NavLink to="/home" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-4">
        Home
      </NavLink>
      <NavLink to="/search" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300 mr-4">
        Search
      </NavLink>
      <NavLink to="/dashboard" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-300">
        Dashboard
      </NavLink>
    </div>
    <div>
      <Status/>
    </div>
  </div>
</nav>
    )
}
export default Navbar