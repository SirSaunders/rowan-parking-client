import React from 'react';
import '../../css/App.css';
import * as firebase from 'firebase';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class SignInBtn extends React.Component {
    state = {

    };
    signIn(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithRedirect(provider);


    }

    render() {


        return (
            <div >
                <div className={"card " + this.props.className}  onClick={()=>this.signIn()}  style={{"width": this.props.width,"height": this.props.height, "backgroundColor": this.props.color }}>
                            <h4 style={{"color":this.props.textColor,"fontSize":this.props.fontSize}}>
                                    {this.props.text}
                            </h4>
                </div>
            </div>
        );
    }
}