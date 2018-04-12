import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Routes from './Routes'
import Layout from './components/Layout';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyACHDFYiDxj_inNGtYq7x29Emas_mwx4CU",
    authDomain: "rowan-parking-solution.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);

ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
);

