import React, { Component } from 'react';
import { Button, View, Text,Image, Platform  } from 'react-native';



export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Confirmation',
        headerLeft: null,
    };

    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style = {Platform.select({
                    ios: {
                        width: "100%",
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                    },
                    android: {
                        width: "100%",
                        elevation: 5,
                    },
                })}>
                    <Image
                        style={{
                            alignSelf: 'center',
                            height: 400,
                            width: 400,
                            borderWidth: 1,
                            borderRadius: 75
                        }}
                        resizeMode="stretch"
                        source={ require('mobileApp/assets/confirm.png')}
                    />
                </View>
                <Text>{this.props.navigation.state.params.info}</Text>
                <View style={{height:"5%"}}/>

                <Button
                    title="Sign Out"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}


