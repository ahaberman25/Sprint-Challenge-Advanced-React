import React from "react";
import Button from '@material-ui/core/Button';
import { useDarkMode } from "../hooks/useDarkMode";

const Title = () => {
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  }
  const [darkMode, setDarkMode] = useDarkMode(toggleMode);

  return(
    <div className="navbar">
      <Button variant="contained" className="toggle-darkmode" data-testid="darkmode" onClick={toggleMode}>Toggle Dark-Mode</Button>
      <h1 className="titleHead">Woman Soccer Players</h1>
    </div>
  )
} 

export default Title;