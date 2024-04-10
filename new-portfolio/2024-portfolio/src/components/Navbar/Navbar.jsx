import React, {useState} from 'react';
import { getImageURL } from '../../utils';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav className={styles.Navbar}>

        <div className={styles.location}>
            <ul>
                <li> <a  href="/">Burlington, ON</a></li>
                <li>  
        <a href='/'>Canada</a></li>
            </ul>
     
        </div>
       
        <div className={styles.menu} >
            <img  className={styles.menuBtn} src={menuOpen?getImageURL('Vectorham.png'): getImageURL('ARROW.png')} alt="menu-btn" onClick={ () => {setMenuOpen(!menuOpen)}}/>
            <ul className={`${styles.menuItem} ${!menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(true)}}>
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
