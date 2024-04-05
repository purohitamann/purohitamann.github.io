import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>

        <div>
            <ul>
                <li> <a href="/">Burlington, ON</a></li>
                <li>  
        <a href='/'>Canada</a></li>
            </ul>
     
        </div>
       
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#endorse">Endorse</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
