import React, { Component } from 'react';
import './css/App.css';
import Layout from './components/Layout'
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ParkingLotsPage from './components/pages/ParkingLotsPage';

import { BrowserRouter as Router, Route,  } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/parking-lots" component={ParkingLotsPage}/>
                <Route path="/confirmation" component={ConfirmationPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/profile" component={ProfilePage}/>
            </div>
        </Router>
    );
  }
}

export default Routes;
