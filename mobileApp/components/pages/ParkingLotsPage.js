
import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import axios from 'axios'
import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image,ToastAndroid,AsyncStorage} from 'react-native';

export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);
        var start = new Date()
        var end = new Date()
        if(start.getMinutes()<30) {
            start.setMinutes(0)
        }else{
            start.setMinutes(30)
        }
        if(start.getHours()<23) {
            end.setMinutes(start.getMinutes())
            end.setHours(start.getHours() + 1)
        }else {
            end.setMinutes(59)
            end.setHours(23)
        }
        this.state = {openDialog: false,selectedLot:null,lots:[],start:start.getTime(),end:end.getTime(),selectID:null}
    }
    static navigationOptions = {
        title: 'Parking Lots Page',
    };
    componentWillMount(){
        this.getData()
    }
    getData(){
        axios({
            baseURL: 'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime='+this.state.start+'&endtime='+this.state.end+'&type=2',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(function (response) {
                console.log(response)
                this.setState({lots:response.data})

            }.bind(this))
            .catch(function (error) {
                console.log(error.response);
            }.bind(this));


        return
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.lots}
                        renderItem={
                            ({item}) =>
                                <TouchableOpacity key={item.LotID} onPress={() => this.selectedLot(item.LotID, item.LotName)}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={{width: "100%", height: 200}}
                                            source={{uri: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'}}
                                        />
                                        <View style={styles.itemLabel}>
                                            <Text style={styles.lotName}>{item.LotName}</Text>
                                            <Text style={styles.lotSpaces}>{item.total}</Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: 'lightgray',
                                            borderBottomWidth: 1,
                                        }}
                                    />
                                </TouchableOpacity>

                        }
                    />
                </View>
            </View>
        );
    }

    selectedLot(id,lotName) {
        ToastAndroid.show(id , ToastAndroid.SHORT);

        Alert.alert(
            'Confirm Reservation',
            'Are you sure you want to reserve '  + lotName + ' ?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                this.setState({selectedLot:lotName,selectID: id})
                    this.submitReservation()
                }}
                ,
            ],
            { cancelable: false }
        )
    }

    ///=========== roughly same calls as website =========

    confirmedReservation(selectedLot,email) {


        var start = new Date()
        var end = new Date()
        start.setTime(this.state.start)
        end.setTime(this.state.end)

        var data = JSON.stringify({
            "body": 'Lot reservation confirmed at '+ selectedLot +' at ' + start.toLocaleDateString() + ' until ' + end.toLocaleDateString(),
            "subject": 'Lot Reservation Confirmation',
            "sendTo": email,
        });
        axios({
            baseURL: "http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/email-notification/sendemail.php?sendTo="+email+"&body="+ 'Lot reservation confirmed at '+ selectedLot +' for ' + start.toString() + ' until ' + end.toString()+"&subject="+'Lot Reservation Confirmation',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            data:data,
            method: 'POST'
        }).then(function (response) {
            console.log(response.data)
            this.setState({selectedLot:null})
            //window.location.assign('/confirmation?lot='+selectedLot+'&start='+this.state.start+'&end='+this.state.end)
            this.props.navigation.navigate('ConfirmationPage')

    }.bind(this))
            .catch(function (error) {
                console.log(error.response)
            })
    }
    submitReservation = async() =>
    {
        var email = null
        try {
            const value = await AsyncStorage.getItem('@RowanParking:email');
            if (value !== null) {
                // We have data!!
                console.log(value);
                email = value
            }
        } catch (error) {
            console.log('failed getting user: ' + error.toString())
            // Error retrieving data
        }

            if (email) {
                // User is signed in.
                var lot = this.state.selectedLot
                var start = this.state.start
                var end = this.state.end
                console.log(lot)

                var data = JSON.stringify({
                    "LotID": this.state.selectID,
                    "Email": email,
                    "StartTime": start,
                    "EndTime": end
                });


                axios({
                    baseURL: "http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?table=reserveWithEmail",
                    timeout: 60000,
                    headers: {'Content-Type': 'application/json'},
                    data:data,
                    method: 'POST'
                }).then(function (response) {
                    console.log(response.data)
                    this.confirmedReservation(lot,email)
                }.bind(this))
                    .catch(function (error) {
                        console.log(error.response)
                    })
            } else {
                // No user is signed in.
                alert('Please sign in to make a reservation')
            }
    }






}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
    },
    itemContainer:{
        paddingLeft: 10,
        paddingRight: 10,

        paddingTop: 10
    },
    itemLabel:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: 44,
    },
    lotName: {

        width:'48%',
        textAlign: 'left',
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
    },
    lotSpaces: {
        width:'48%',
        textAlign: 'right',
        paddingRight:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 20,
        fontWeight: 'bold',
    },
})