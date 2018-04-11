
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../App.css';
import ParkingLotCard from '../CustomComponets/ParkingLotCard'
import CustomGrid from "../CustomComponets/CustomGrid";




export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);

    }

    //this is a comment
    render() {


        return <div className="App">
                Parking lots page
            <CustomGrid nitems = {3} gtotal = {3} />
            </div>


    }
}


