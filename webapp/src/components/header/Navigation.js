import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NavBar from '../CustomComponets/NavBar'
import * as firebase from 'firebase';

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {menuItems: [

        ]};
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentWillMount() {

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user){
            console.log(user)
            if(user != null){
                this.setState({menuItems: [
                    {title:'Profile', path:'/profile'},
                    {title:'Parking Lots', path:'/parking-lots'},
                    {title:'logout', path:'/logout'}
                ]});
            }
            //add sign out button before uncommenting
            //window.location.assign('/parking-lots')
        }.bind(this));

    }





    render () {



        return (
            <div  >
                <NavBar
                    title='Rowan Parking'
                    menuItems={this.state.menuItems}/>
            </div>
        )
    }

}
