import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path='/chats'>
            <h1>Chats</h1>
          </Route>
          <Route path='/'>
            <h1>Home page</h1>
          </Route>
        </Switch>
      {/* Tinder Cards */}
      {/* Buttons below cards */}
      {/* Chat screen */}
      {/* Individual chat screen */}
      </Router>
      
    </div>
  );
}

export default App;
