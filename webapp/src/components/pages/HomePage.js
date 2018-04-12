
import React, { Component } from 'react';
import logo from '../../utils/logo.svg';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import Video from '../CustomComponets/Video'
import About from '../CustomComponets/About'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">

            <Video/>
        <div> <header >
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Rowan Parking Website</h1>
            </header> </div>
            <About/>
        </div>


    }
}


