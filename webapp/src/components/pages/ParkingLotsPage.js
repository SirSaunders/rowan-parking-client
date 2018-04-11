
import React, { Component } from 'react';

import Dialogbox from '../../components/CustomComponets/Dialogbox.js';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import ParkingLotCard from '../CustomComponets/ParkingLotCard'




export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">
                Parking lots page
            <ParkingLotCard/>
            <Dialogbox/>
            </div>


    }
}


