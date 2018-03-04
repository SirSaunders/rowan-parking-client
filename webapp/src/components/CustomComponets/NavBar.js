/**
 * Created by johnathansaunders on 3/3/18.
 */
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState({open: !this.state.open});
    }
    handleClose(){
        this.setState({open: false});
    }

    render () {

        return (
            <div>
                <AppBar
                    title="Rowan Parking"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={()=>this.handleToggle()}

                />
                <Drawer docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        >
                    <MenuItem onClick={()=> window.location.assign('/')}>Home</MenuItem>
                    <MenuItem onClick={()=> window.location.assign('/login')}>Login Page</MenuItem>
                </Drawer>
        </div>
        )
    }

}
