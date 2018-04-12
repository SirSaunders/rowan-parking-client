import React from 'react';
import { Button, View, Text } from 'react-native';
import Expo from 'expo';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerLeft: null,
    };
    signIn = async () =>{

        let result = await Expo.AuthSession.startAsync({
            authUrl:
            `https://accounts.google.com/o/oauth2/v2/auth?` +
            `&client_id=947841634540-s3i9bggpefp8ocld90aj5iq2t8964rc1.apps.googleusercontent.com` +
            `&redirect_uri=https://auth.expo.io/@sirsaunders/rowan-parking` +
            `&response_type=code` +
            `&access_type=offline` +
            `&scope=profile`,
        })
        this.props.navigation.navigate('ParkingLotsPage')

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Lots"
                    onPress={() => //this.props.navigation.navigate('ParkingLotsPage')
                        this.signIn()}
                />
            </View>
        );
    }
}
