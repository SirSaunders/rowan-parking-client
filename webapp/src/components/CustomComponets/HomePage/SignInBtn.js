import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui-next/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui-next/styles';
import { GooglePlusIcon} from 'mdi-react';
import '../../../css/App.css';
import * as firebase from 'firebase';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 30,
    },
});

function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
   // provider.addScope('https://www.googleapis.com/auth/userinfo.profile'); This method is deprecated refer to documents -> https://developers.google.com/+/web/api/rest/oauth#profile
    provider.addScope(' https://www.googleapis.com/auth/plus.login') ;
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithRedirect(provider);



}


function IconLabelButtons(props) {

    const { classes } = props;
    return (
        <div>
            <Button className={classNames(classes.iconSmall,classes.button)} size="large" variant="raised" color="secondary" onClick={()=>signIn()}>
                Sign in
                <GooglePlusIcon color= "#FFF" size ="9%" className={classes.rightIcon} />
            </Button>

        </div>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
