import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../../css/App.css';
import ParkingLotCard from '../ParkingLotCard'
import Grid from 'material-ui-next/Grid';
import * as firebase from "firebase/index";

export default class CustomGrid extends React.Component
{


    constructor(props) {
        super(props);
    }

    render()
    {

        var gridItems = [];
        for (var i = 0; i < this.props.nitems; i++)
        {
            gridItems.push(
            <Grid item sm>
        <ParkingLotCard  onClick={(e)=>this.props.onCardClick(e)}/>
        </Grid>
        )
        }

        var grid = [];
        for (var i = 0; i < this.props.gtotal; i++)
        {
            grid.push(
            <Grid container >
        {gridItems}
        </Grid>
        )
        }
        return(
            <div>{grid}</div>
    );
    }
}