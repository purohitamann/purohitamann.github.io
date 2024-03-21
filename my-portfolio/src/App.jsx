import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import {useState} from 'react';



const App = () => {
  const currentTheme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() =>{
    localStorage.setItem('current_theme',theme);
  },[theme]);

  return (
    <div className= {`container ${theme}`} >
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
