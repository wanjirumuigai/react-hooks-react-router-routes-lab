import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//   display: "block",

// };

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" exact>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" exact>
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors">Actors</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
