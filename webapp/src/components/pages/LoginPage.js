
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import * as firebase from 'firebase';
import SignInBtn from '../CustomComponets/SignInBtn'




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        //listener for login state change
        firebase.auth().onAuthStateChanged(function (user){
            console.log(user)
        });
    }


    render() {

        return <div className="App">
            <div style={{"padding": 100}}>
            <SignInBtn
                text={"Login and Reserve Today!"}
                color={"Red"}
                textColor={"White"}
                width={250}
                height ={50}
                fontSize={15}
                />
                </div>
            </div>


    }
}


