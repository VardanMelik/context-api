import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { GlobalProvider} from './context/GlobalState';



function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
        <Router>
          <h2>Nab Bar</h2>
          <Switch>

            <Route exact path="/" component={Home}/>
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser}/>
          
          </Switch>
      </Router>
     </GlobalProvider>
    </div>
  );
}

export default App;
