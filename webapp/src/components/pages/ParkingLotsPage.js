
import React, { Component } from 'react';

import Dialogbox from '../../components/CustomComponets/Dialogbox.js';
import {Router, route, indexRoute, hashHistory} from "react-router"

import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import '../../css/App.css';

import ParkingLotCard from '../CustomComponets/ParkingLotCard'
import CustomGrid from "../CustomComponets/CustomGrid";


import MenuItem from "material-ui/MenuItem/index";
import NavBarBtns from "../CustomComponets/NavbarBtns";
import AppBar from "material-ui/AppBar/index";
import FromToBar from '../CustomComponets/FromToBar'


export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    //this is a comment
    render() {

        return <div className="App">
            <FromToBar/>
            <CustomGrid nitems = {3} gtotal = {3} />
            <Dialogbox/>
            </div>

    }
}


