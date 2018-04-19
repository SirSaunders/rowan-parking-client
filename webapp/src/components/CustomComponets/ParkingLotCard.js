import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import '../../css/ParkingLotCard.css';

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {





        return (
            <div className="Card">
                <Card onClick={ this.props.onClick}>
                        <CardMedia overlay={<CardTitle title={'93 Spots'} subtitle={''} />}>
                            <img className="Crop-Fit" height='306px' width='479' src={'https://www.rowan.edu/home/sites/default/files/Commencement%20on%20Main%20Campus/comparking.png'} alt="" />
                        </CardMedia>
                        <CardText>
                            {'Lot X'}
                        </CardText>
                        <CardActions>

                        </CardActions>
                </Card>
            </div>
        )
    }
}