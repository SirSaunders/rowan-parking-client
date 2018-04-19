
import React, { Component } from 'react';
import axios from 'axios'

import Dialogbox from '../../components/CustomComponets/Dialogbox.js';
import {Router, route, indexRoute, hashHistory} from "react-router"

import '../../css/App.css';

import ParkingLotCard from '../CustomComponets/ParkingLotCard'


import FromToBar from '../CustomComponets/FromToBar'


export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openDialog: false,selectedLot:null,lots:[]}
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
       var  corsProxySite = 'https://cors-anywhere.herokuapp.com/'
        axios({
            baseURL: corsProxySite +'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime=1520924400&endtime=1520946000&type=2',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(function (response) {
            console.log(response.data)
            this.setState({lots:response.data})
        }.bind(this))


    }
    //this is a comment
    render() {
        const listLots = this.state.lots.map((item) =>
        <ParkingLotCard
            key={item.LotID}
            onClick={(e)=>this.setState({selectedLot:e})}
            lotName={item.LotName}
            lotSpaces={item.total}
        />);
        return <div className="App">
            <FromToBar/>
            <div >
                {listLots}
            </div>


            {(this.state.selectedLot)?
            <div>
                <Dialogbox
                    onSubmit = {()=>{
                        this.confirmedReservation(this.state.selectedLot)
                        this.setState({selectedLot:null})
                    }}
                    onCancel = {()=>this.setState({selectedLot:null})}
                    lotSelected={this.state.selectedLot}
                />
            </div>: ''}
            </div>

    }

    confirmedReservation(selectedLot) {
        window.location.assign('/confirmation')

    }
}


