import React, { useState } from 'react';
//import './App.css';

import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext();



function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <div className="app">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>{darkTheme ? 'ToggleTheme Dark' : 'ToggleTheme Light' }</button>
        <ClassContextComponent/>
        <FunctionContextComponent/>
        
      
      </ThemeContext.Provider>
    
    </div>
  );
}

export default App;
