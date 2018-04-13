
import React, { Component } from 'react';
import logo from '../../utils/logo.svg';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import Video from '../CustomComponets/Video'
import About from '../CustomComponets/About'
import Image from '../CustomComponets/Image'
import SignInBtn from '../CustomComponets/SignInBtn'
import * as firebase from 'firebase';
import Paper from 'material-ui-next/Paper';
import Grid from 'material-ui-next/Grid';


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
            //window.location.assign('/parking-lots')
        });

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


        return <div className="App">
            <Grid container spacing={0} alignContent="center">
                <Grid className="App-logo" item xs>
                    <Image/>
                </Grid>
            </Grid>

            <Grid container spacing={24}>
                <Grid item xs>
                    <Video/>
                    <div style={{"height":"80vh"}}>
                        <div style = {Object.assign({ "marginTop":"10vh","float":"left"},this.getDivStyle())}>
                            <header >

                            </header>
                        </div>
                        <div  style = {Object.assign({ "width":"49%", "marginTop":"15vh","float":"left"},this.getDivStyle())}>
                            <h1 className="App-title App-Login" >Welcome to Rowan Parking Website</h1>
                            <SignInBtn
                                className = "centerH"
                                text={"Login and Reserve Today!"}
                                color={"Red"}
                                textColor={"White"}
                                width={250}
                                height ={50}
                                fontSize={15}
                            />

                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs justify='center' alignItems='center'>
                    <Paper elevation={4}> <About /></Paper>
                </Grid>

            </Grid>



        </div>


    }
}






