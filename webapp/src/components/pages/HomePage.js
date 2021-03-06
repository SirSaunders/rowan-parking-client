
import React, { Component } from 'react';
import logo from '../../utils/logo.svg';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import Video from '../CustomComponets/HomePage/Video'
import About from '../CustomComponets/HomePage/About'
import Image from '../CustomComponets/HomePage/Image'
import SignInBtn from '../CustomComponets/HomePage/SignInBtn'
import * as firebase from 'firebase';
import Paper from 'material-ui-next/Paper';
import Grid from 'material-ui-next/Grid';

import axios from 'axios'

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export default class HomePage extends React.Component {
    constructor(props) {

        super(props);
        this.state = { width: window.innerWidth };
        firebase.auth().onAuthStateChanged(function (user){
            console.log(user)
            //add sign out button before uncommenting

            if(user != null ) {
                if (user.email.includes('rowan')) {
                    this.addUser(user);
                }else {
                    alert('Please use your Rowan account to sign in')}
            }
        }.bind(this));

    }

    addUser(user){
        var userInfo = {
            "name" : user.displayName,
            "email": user.email,
            "username": user.uid,
            "password": "password",
            "isDisable": "0",
            "status": "1"
        }

        var  corsProxySite = 'https://cors-anywhere.herokuapp.com/'
        axios({
            baseURL: corsProxySite +'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?table=user',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            data: userInfo
        }).then(function (response) {
            console.log(response.data)
            window.location.assign('/parking-lots')
        }).catch(function () {
            window.location.assign('/parking-lots')
        })
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

    }
    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }


    getDivStyle() {
        if(this.state.width > 650){
            return { "width":"49%"}
        }else{
            return { "width":"100%"}

        }
    }
    render() {


        return <div style={{ padding: 33 }} className="App">
            <Video/>
            <Grid  container spacing={24} alignContent="center">
                <Grid className="oval" alignContent="center" item xs>
                  <Image/>

                </Grid>

            </Grid>

            <Grid  container spacing={24}>
                <Grid item xs>

                    <SignInBtn/>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs justify='center' alignItems='center'>
                    <Paper className="container" elevation={8}> < About /></Paper>
                </Grid>

            </Grid>



        </div>


    }
}






