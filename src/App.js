import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import OverViewHome from './OverView/OverViewHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <OverViewHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
