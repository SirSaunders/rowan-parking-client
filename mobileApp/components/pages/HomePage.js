import React from 'react';
import { Button, View, Text, ToastAndroid, AsyncStorage } from 'react-native';
import Expo from 'expo';
import axios from 'axios'


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
            `&scope=email`
            ,
        })

        console.log('logged in')
        let accessToken = await fetch('https://accounts.google.com/o/oauth2/token?client_id=947841634540-s3i9bggpefp8ocld90aj5iq2t8964rc1.apps.googleusercontent.com&client_secret=zn6XJuMYNDSZiDeoKdCSTTTG&grant_type=authorization_code&code='+result.params.code);
        //var accessToken = result.params.code

        axios({
            baseURL: 'https://www.googleapis.com/oauth2/v4/token?&redirect_uri=https://auth.expo.io/@sirsaunders/rowan-parking&client_id=947841634540-s3i9bggpefp8ocld90aj5iq2t8964rc1.apps.googleusercontent.com&client_secret=zn6XJuMYNDSZiDeoKdCSTTTG&grant_type=authorization_code&code='+result.params.code,
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
        }).then(function (response) {
            console.log(response.data)
            console.log(response.data.id_token)

                axios({
                    baseURL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + response.data.id_token,
                    timeout: 60000,
                    headers: {'Content-Type': 'application/json'},
                    method: 'GET',
                }).then(function (response) {
                    console.log(response.data)
                    this.saveUser(response)
                }.bind(this)).catch(function (e) {
                    console.log(e)
                })
        }.bind(this)).catch(function (e) {
            console.log(e)

        })




        //console.log(result);
        //console.log(user);


        //this.props.navigation.navigate('ParkingLotsPage')

    }

    async saveUser(response)  {
            try {
                console.log('email= '+ response.data.email.toString())
                await AsyncStorage.setItem('@RowanParking:email', response.data.email.toString());
            } catch (error) {
                console.log('failed to save email: ' + error.toString())
                // Error saving data
            }
            this.getUser()
            //send user to be added to server
            userName = response.data.email.replace(response.data.hd, '')
            user = {email: response.data.email, uid: userName, displayName: userName}

            this.addUser(user)
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
    getUser = async() =>
    {
        try {
            const value = await AsyncStorage.getItem('@RowanParking:email');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            console.log('failed getting user: ' + error.toString())
            // Error retrieving data
        }
    }
// shared code with website
    addUser(user){

        var userInfo = {
            "name" : user.displayName,
            "email": user.email,
            "username": user.uid,
            "password": "password",
            "isDisable": "0",
            "status": "1"
        }

        var  corsProxySite = 'https://cors-anywhere.herokuapp.com/'
        axios({
            baseURL: corsProxySite +'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?table=user',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            data: userInfo
        }).then(function (response) {
            console.log(response.data)
            this.props.navigation.navigate('ParkingLotsPage') // nav is diff for site
        }.bind(this)).catch(function (e) {
            console.log(e)
            this.props.navigation.navigate('ParkingLotsPage') // nav is diff for site
        }.bind(this))
    }
}
