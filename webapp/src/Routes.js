import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
            </div>
        </Router>
    );
  }
}

export default Routes;
