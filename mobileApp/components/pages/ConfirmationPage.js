import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'ProfilePage',
        headerLeft: null,
    };

    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Confirmation page</Text>
                <Button
                    title="Navigate Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}


