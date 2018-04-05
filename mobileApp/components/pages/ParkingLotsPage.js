
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Parking Lots Page',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Parking lotsr Screen</Text>
                <Button
                title="Pick a lot"
                onPress={() => this.props.navigation.navigate('ConfirmationPage')}
                />
            </View>
        );
    }

}


