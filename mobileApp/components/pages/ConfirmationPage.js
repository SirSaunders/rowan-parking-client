import React, { Component } from 'react';
import { Button, View, Text,Image, Platform  } from 'react-native';



export default class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Confirmation',
        headerLeft: null,
        headerTitleStyle: {
            color: '#f8f8f8'
        },
        headerStyle:{
            backgroundColor:'#00c0da'
        },
        headerTintColor: '#00c0da'
        ,
        headerBackTitleStyle: {
            color: '#f8f8f8'
        },


    };

    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style = {{
                    width: "100%",
                }}>
                    <Image
                        style={{
                            alignSelf: 'center',
                            height: 400,
                            width: 400,
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


