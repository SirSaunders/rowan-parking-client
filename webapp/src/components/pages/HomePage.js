
import React, { Component } from 'react';
import logo from '../../utils/logo.svg';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import Video from '../CustomComponets/Video'
import About from '../CustomComponets/About'
import SignInBtn from '../CustomComponets/SignInBtn'
import * as firebase from 'firebase';


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
            <Video/>
            <div style={{"height":"80vh"}}>
            <div style = {Object.assign({ "marginTop":"10vh","float":"left"},this.getDivStyle())}>
                <header >
                    <img src={logo} className="App-logo" alt="logo" />
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


            <About />
        </div>


    }
}


