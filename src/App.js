import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Projects from './components/Pages/Projects';
import SignUp from './components/Pages/SignUp';
import login from './components/Pages/login';
import Myprofile from './components/Pages/Myprofile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;