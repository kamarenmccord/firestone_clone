import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './fcac/Login';
import NewUser from './NewUser';
import OverViewHome from './OverView/OverViewHome';
import FirestoneTires from './ft/FirestoneTires';
import FirestoneComplete from './fcac/FirestoneComplete';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/firestonetires'>
            <FirestoneTires />
          </Route>
          <Route path='/firestonecomplete'>
            <FirestoneComplete />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/newuser'>
            <NewUser />
          </Route>
          <Route path='/'>
            <OverViewHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
