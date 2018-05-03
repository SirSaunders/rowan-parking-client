import React, { Component } from 'react';
import {Router, route, indexRoute, hashHistory} from "react-router"
import '../../css/App.css';
import { Grid, InputLabel, Paper, Button, Typography } from "material-ui-next"
import * as firebase from 'firebase';
import { withStyles } from 'material-ui-next/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui-next/Table';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui-next/Card';
import Divider from 'material-ui/Divider';





import avatar from "../../utils/image.jpg";



const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);





let id = 0;
function createData(id, time, lot ) {
    id += 1;
    return { id, time, lot};
}

var title ="Default user";
var userPhoto;
const data = [
    createData('#23', '2:00 PM EST to 4:00 PM EST', 'LOT A'),
    createData('#32',  '2:00 PM EST to 4:00 PM EST', 'LOT B'),
    createData('#108',  '2:00 PM EST to 4:00 PM EST', 'LOT C' ),
    createData('#115', '2:00 PM EST to 4:00 PM EST', 'LOT A'),
    createData('#120',  '2:00 PM EST to 4:00 PM EST', 'LOT B'),
    createData('#214',  '2:00 PM EST to 4:00 PM EST', 'LOT C' ),

];

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

const styles = theme => ({
    root: {
        flexGrow: 3,
        width: '100%',

        marginTop: theme.spacing.unit * 10,
        overflowX: 'auto',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    paper: {
        padding: theme.spacing.unit *10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {userName: null, userPhoto: null};


    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user){
            console.log(user);

            if(user != null ) {
                this.setState( {userName: user.displayName, userPhoto: user.photoURL });


            }
        }.bind(this));


    }

    render() {

        return <div style={{ padding: 50, height: "100%"}}className= "App" >


                <Grid   container
                      alignItems= "center"
                      direction= "row"
                      justify= "center"
                      spacing={24}>
                    <Grid items xs>
                        <Paper >
                            <Typography variant="display3"  align="center" gutterBottom>
                                Reservation List
                            </Typography>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell> Reservation ID</CustomTableCell>
                                        <CustomTableCell> Time</CustomTableCell>
                                        <CustomTableCell >Parking Lot</CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(n => {
                                        return (
                                            <TableRow  key={n.id}>
                                                <CustomTableCell>{n.id}</CustomTableCell>
                                                <CustomTableCell>{n.time}</CustomTableCell>
                                                <CustomTableCell >{n.lot}</CustomTableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>

                    <Divider />
                    <Grid item xs ={3}>

                        <Card>
                            <CardMedia
                                className ="App-logo"
                                image=   {this.state.userPhoto}
                                title="user"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="display1" component="display3">
                                    {this.state.userName}
                                </Typography>
                                <Typography variant ="headline" component="display1">
                                    {title}
                                </Typography>
                            </CardContent>
                            {/*<CardActions>*/}
                                {/*<Button size="larger" align ="center" color="primary">*/}
                                    {/*Report User*/}
                                {/*</Button>*/}
                                {/*<Button size="small" color="primary">*/}
                                   {/*Contact User*/}
                                {/*</Button>*/}
                            {/*</CardActions>*/}
                        </Card>

                    </Grid>

                </Grid>

            </div>


    }
}


