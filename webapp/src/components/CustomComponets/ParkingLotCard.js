import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class ParkingLotCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {


        const style = {
            width: '80%',
            marginTop:'50px',
            marginLeft: "auto",
            marginRight: "auto"
        };


        return (
            <div style={style}>
                <Card >
                    <CardMedia overlay={<CardTitle title={'Monkey'} subtitle={'Close up'} />}>
                        <img className="Crop-Fit" height='400px'  src={'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'} alt="" />
                    </CardMedia>
                    <CardText>
                        {'this is a monkey woo'}
                    </CardText>
                    <CardActions>
                        <FlatButton label={'click me'} onClick={()=>alert('clicked')}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
