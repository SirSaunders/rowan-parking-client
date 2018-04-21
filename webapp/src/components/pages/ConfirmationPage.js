
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';




export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount(){
        //this will get the url params from the url to put in confirmation description
        var url = new URL( window.location.href);
        var stateTime = url.searchParams.get('stateTime');
        var endTime = url.searchParams.get('endTime');
        var lotName = url.searchParams.get('lotName');

    }

    render() {


        return <div className="App">
                 confirmation page
            </div>


    }
}


