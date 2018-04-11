import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Routes from './Routes'
import Layout from './components/Layout';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDBv2kcDm1vDMkq03rMQ-75DiLp4vUFFLI",
    authDomain: "rowanparking-b71d8.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);

ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
);

