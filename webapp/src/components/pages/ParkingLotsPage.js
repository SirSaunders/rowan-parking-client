
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import '../../App.css';
import MenuItem from "material-ui/MenuItem/index";
import NavBarBtns from "../CustomComponets/NavbarBtns";
import AppBar from "material-ui/AppBar/index";
import FromToBar from '../CustomComponets/FromToBar'

export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div className="App">
            <FromToBar/>
        </div>

    }
}


