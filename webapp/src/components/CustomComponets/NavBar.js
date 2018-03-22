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


    render () {
        return (
            <div>
                <AppBar
                    title={this.props.title}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={()=>this.handleToggle()}
                />
                <Drawer docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                >
                    {( this.props.menuItems != null &&  this.props.menuItems.length > 0)?

                        this.props.menuItems.map((item, index) => (
                            <MenuItem onClick={() => window.location.assign(item.path)}>{item.title}</MenuItem>
                        )) : 'null'
                    }
                </Drawer>
            </div>
        )
    }
}
