
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import * as firebase from 'firebase';




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        // firebase.auth().getRedirectResult().then(function(result) {
        //     if (result.credential) {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         var token = result.credential.accessToken;
        //         // ...
        //     }
        //     // The signed-in user info.
        //     var user = result.user;
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        // });
        this.signIn()
    }

    signIn(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().useDeviceLanguage();
        //firebase.auth().signInWithRedirect(provider);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log((result))
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }


    render() {


        return <div className="App">
            <div id="firebaseui-auth-container"></div>

                Login page
            </div>


    }
}


