import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NavBar from '../CustomComponets/NavBar'
export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {menuItems: [
                {title:'Home Page', path:'/'},
                {title:'Login', path:'/login'},
                {title:'Profile', path:'/profile'},
                {title:'Parking Lots', path:'/parking-lots'}
        ]};
    }

    componentWillMount() {

    }
    componentDidMount() {


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
