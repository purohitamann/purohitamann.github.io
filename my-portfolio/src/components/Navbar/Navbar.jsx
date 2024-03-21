import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <h1 className="logo" >@puroihitamann</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Connect</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon className="fontAwesome" icon={faMagnifyingGlass} />
      </div>


      <FontAwesomeIcon className="toggle-icon" icon={faMoon} />
    </div>
  );
};

export default Navbar;
