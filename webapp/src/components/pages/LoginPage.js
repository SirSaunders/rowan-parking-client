
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">
            <div id="firebaseui-auth-container"></div>

                Login page
            </div>


    }
}


