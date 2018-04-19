
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
        this.state = {openDialog: false}
    }

    //this is a comment
    render() {

        return <div className="App">
            <FromToBar/>
            <CustomGrid onCardClick={()=> this.setState({openDialog:true})} nitems = {3} gtotal = {3} />
            {(this.state.openDialog)?
            <div>
                <Dialogbox
                    onSubmit = {()=>this.setState({openDialog:false})}
                    onCancel = {()=>this.setState({openDialog:false})}
                />
            </div>: ''}
            </div>

    }
}


