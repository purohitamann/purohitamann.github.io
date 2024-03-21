import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({theme,setTheme}) => {
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }
  return (
    <div className="navbar">
      
      <h1 className={theme == "light" ? "logo-light" : "logo-dark"} >@purohitamann</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Connect</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon className="fontAwesome" icon={faMagnifyingGlass} />
      </div>


      <FontAwesomeIcon onClick={() => toggleTheme()} className="toggle-icon fontAwesome"  icon={theme == "light" ? faMoon : faSun } />
    </div>
  );
};

export default Navbar;
