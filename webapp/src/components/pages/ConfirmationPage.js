
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import Video from '../CustomComponets/HomePage/Video'
import Image from '../CustomComponets/confirmation/confirm'
import Paper from 'material-ui-next/Paper'
import Typography from 'material-ui-next/Typography'



export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start:null,end:null,lot:null}

    }
    componentWillMount(){
        //this will get the url params from the url to put in confirmation description
        var url = new URL( window.location.href);
        console.log(url)
        this.setState({start: url.searchParams.get('start'),end:url.searchParams.get('end'),lot:url.searchParams.get('lot')});
    }

    miliToDate(mili){
        var date = new Date()
        date.setTime(mili)
        return date

    }
    render() {


        return <div className="App">

            <Video/>
            <Image/>

            <Paper className="container" elevation={3}> <Typography color="primary" variant="display2"  align="center" gutterBottom>
                Confirmed that you reserved lot <b>{this.state.lot}</b> starting at
                <b> {this.miliToDate(this.state.start).toString()}
                </b>  until <b>{this.miliToDate(this.state.end).toString()}</b>
            </Typography></Paper>

            </div>


    }
}


