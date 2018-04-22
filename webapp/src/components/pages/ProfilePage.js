
import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"

import '../../css/App.css';
import { Grid, InputLabel } from "material-ui-next"
import * as firebase from 'firebase';



import avatar from "../../utils/image.jpg";


function profile_info(){
}

/**
profile_info()
{
    GoogleSignInAccount
    acct = GoogleSignIn.getLastSignedInAccount(getActivity());
    if (acct != null) {
        String
        personName = acct.getDisplayName();
        String
        personGivenName = acct.getGivenName();
        String
        personFamilyName = acct.getFamilyName();
        String
        personEmail = acct.getEmail();
        String
        personId = acct.getId();
        Uri
        personPhoto = acct.getPhotoUrl();
    }

}
**/
export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">
           profile page
            </div>


    }
}


