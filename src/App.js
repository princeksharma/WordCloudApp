import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Search from './components/dashboard/search/Search';
import Result from './components/dashboard/result/Result';

class App extends Component {

  render() {
    return (
    <div className="App">
      <Navbar/>
      <br/>
      <Router>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/result' component={Result}/>
      </Router>
    </div>
  );
 }
}

export default App;