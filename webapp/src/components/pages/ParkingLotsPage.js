
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
        var start = new Date()
        var end = new Date()
        if(start.getMinutes()<30) {
            start.setMinutes(0)
        }else{
            start.setMinutes(30)
        }
        if(start.getHours()<23) {
            end.setMinutes(start.getMinutes())
            end.setHours(start.getHours() + 1)
        }else {
            end.setMinutes(59)
            end.setHours(23)
        }
        this.state = {openDialog: false,selectedLot:null,lots:[],start:start.getTime(),end:end.getTime(),selectID:null}
        this.timeChange=this.timeChange.bind(this)
        this.submitReservation = this.submitReservation.bind(this)
    }
    componentDidMount(){
        this.getData(this.state.start,this.state.end)
    }
    getData(start,end){
       var  corsProxySite = 'https://cors-anywhere.herokuapp.com/'
        axios({
            baseURL: corsProxySite +'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime='+start+'&endtime='+end+'&type=2',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(function (response) {
            console.log(response.data)
            if (Array.isArray(response)){
                this.setState({lots: response.data})
            }
        }.bind(this))




    }
    timeChange(start, end){
        this.setState({start:start.getTime()})
        this.setState({end:end.getTime()})
        this.getData(start.getTime(),end.getTime())
    }

    render() {
        const listLots = this.state.lots.map((item) =>
        <ParkingLotCard
            key={item.LotID}
            onClick={(e,id)=>{
                this.setState({selectedLot:e,selectID:id})
                console.log(this.state.selectID)
            }}
            lotName={item.LotName}
            lotSpaces={item.total}
            lotID={item.LotID}
        />);
        return <div className="App">
            <FromToBar
                timeChange={(date, start, end) => {
                    start.setMonth(date.getMonth())
                    start.setDate(date.getDate())
                    end.setMonth(date.getMonth())
                    end.setDate(date.getDate())
                    this.timeChange(start,end)
                }
                }
                startTimeDefualt={this.state.start}
                endTimeDefualt={this.state.end}

            />
            <div >
                {listLots}
            </div>


            {(this.state.selectedLot)?
            <div>
                <Dialogbox
                    onSubmit = {()=>{
                        this.submitReservation()
                        this.setState({selectedLot:null})
                    }}
                    onCancel = {()=>this.setState({selectedLot:null})}
                    lotSelected={this.state.selectedLot}

                />
            </div>: ''}
            </div>

    }

    confirmedReservation(selectedLot) {
        window.location.assign('/confirmation?lot='+selectedLot+
            '&start='+this.state.start+
            '&end='+this.state.end)
    }

    submitReservation(){
        var lot = this.state.selectedLot
        var start = this.state.start
        var end = this.state.end
         console.log(this.state.selectID)

        var data = JSON.stringify({
            "LotID": this.state.selectID,
            "UserID": "3",
            "StartTime": start,
            "EndTime": end
        });


        var  corsProxySite = 'https://cors-anywhere.herokuapp.com/'
        axios({
            baseURL: corsProxySite+"http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?table=reservation",
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            data:data,
            method: 'POST'
        }).then(function (response) {
            console.log(response.data)
            this.confirmedReservation(lot)
        }.bind(this))

    }
}


