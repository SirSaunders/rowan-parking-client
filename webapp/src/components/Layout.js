import React from 'react'

import Navigation from './header/Navigation'
import Footer from './footer/Footer'
import './pages/HomePage';
import  Routes from '../Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Layout extends React.Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            < MuiThemeProvider>
                <div >
                    <Navigation />
                    <div>
                       <Routes/>
                    </div >
                    {/*<Footer />*/}
                </div>
            </MuiThemeProvider>
        )
    }
}
