
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import * as firebase from 'firebase';
import SignInBtn from '../CustomComponets/HomePage/SignInBtn'




export default class Logout extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        firebase.auth().signOut().then(function () {
            window.location.assign('/')
        })
    }


    render() {

        return <div className="App">
                <h1>Please wait while we log you out. </h1>
            </div>


    }
}




