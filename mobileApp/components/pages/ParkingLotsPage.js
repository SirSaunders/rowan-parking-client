
import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import axios from 'axios'
import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image,ToastAndroid,AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker'

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

        this.state = {openDialog: false,selectedLot:null,lots:[],start:start.getTime(),end:end.getTime(),selectID:null, currentDate:start}
    }
    static navigationOptions = {
        title: 'Parking Lots',
        headerTitleStyle: {
            color: '#f8f8f8'
        },
        headerStyle:{
            backgroundColor:'#00c0da'
        },
        headerTintColor: '#f8f8f8'
        ,
        headerBackTitleStyle: {
            color: '#f8f8f8'
        }
    };
    componentWillMount(){
        this.getData()
    }
    getData(){
        console.log( 'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime='+this.dateOffest(this.state.start)+'&endtime='+this.dateOffest(this.state.end)+'&type=2')
        axios({
            baseURL: 'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime='+this.dateOffest(this.state.start)+'&endtime='+this.dateOffest(this.state.end)+'&type=2',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(function (response) {
               // console.log(response)
                this.setState({lots:response.data})

            }.bind(this))
            .catch(function (error) {
               // console.log(error.response);
            }.bind(this));


        return
    }
    //because backend said they wont fix doing thing in UTC but we need EST
    dateOffest(mili){
        console.log(mili)
       return mili -4 * 60 *60 *1000
    }

    dateToString(date){

        var d = date
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        console.log(curr_year + "-" + curr_month + "-" + curr_date +","+ d.getHours()+':'+d.getMinutes());
        return  curr_year + "-" + curr_month + "-" + curr_date +","+ d.getHours()+':'+d.getMinutes()
    }
    dateToHHMMString(date){
       return date.getHours()+':'+date.getMinutes()
    }
    timeStringToDate(timeS){
        var timeArry = timeS.split(' ')
        var d = new Date()
        var curr_date = d.getDate().toString();
        (curr_date.length == 1)? curr_date = '0'+curr_date:'';
        var curr_month = (d.getMonth() + 1).toString(); //Months are zero based
        (curr_month.length == 1)? curr_month = '0'+curr_month:'';
        var curr_year = d.getFullYear();
        var time = timeArry[0].split(':');
        var hrs =  time[0].toString();
        (hrs.length == 1)? hrs = '0'+hrs:'';

        var mins =  time[1].toString();
        (mins.length == 1)? mins = '0'+mins:'';

        var timeStr = curr_year+'-' + curr_month+'-'+ curr_date +'T' + hrs+':'+mins + ':00z'
        console.log('time = ' + timeStr);

        var  date = new Date();
        date.setHours(hrs);
        date.setMinutes(mins)
        if(time[0] == 12){
            date.setHours(0)
        }
        if(timeArry[1] == 'pm') {
         date.setHours(date.getHours()+12)
        }
        console.log('date from string = '+ date.toString())
        return date
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 50, flexDirection: 'row'} }>
                        <DatePicker
                            style={{width: '34%'}}
                            date={this.dateToString(new Date(this.state.start))}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate={this.dateToString(new Date())}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => {{
                                this.setState({currentDate: new Date(date)})
                                setTimeout(()=>{this.timeChange(null,null)},500);
                                }
                            }}
                        />
                    <View style={{width: '12%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                         <Text  style={{textAlign: 'center'}}> Start Time</Text>
                    </View>
                        <DatePicker
                            style={{width: '19%'}}
                            date={this.dateToHHMMString(new Date(this.state.start))}
                            mode="time"
                            placeholder="select date"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            format="h:mm a"
                            showIcon={false}

                            customStyles={{
                                dateInput: {
                                    marginLeft: 0
                                }

                            }}
                            onDateChange={(date) => {this.timeChange(this.timeStringToDate(date),null)}}
                        />
                    <View style={{ justifyContent: 'center', alignItems: 'center',width: '12%',flex: 1 }}>
                        <Text style={{textAlign: 'center'}}> End Time</Text>
                    </View>
                        <DatePicker
                            style={{width: '19%', margin: 2}}
                            date={this.dateToHHMMString(new Date(this.state.end))}
                            mode="time"
                            format="h:mm a"
                            placeholder="select time"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{


                            }}
                            onDateChange={(date) => {this.timeChange(null,this.timeStringToDate(date))}}
                        />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.lots}
                        renderItem={
                            ({item}) =>
                                <TouchableOpacity key={item.LotID} onPress={() => this.selectedLot(item.LotID, item.LotName)}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={{width: "100%", height: 200}}
                                            source={{uri: 'https://www.rowan.edu/home/sites/default/files/Commencement%20on%20Main%20Campus/comparking.png'}}
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


    timeChange(start,end){
        if(!start){
            start = new Date(this.state.start)
        }
        if(!end){
            end = new Date(this.state.end)
        }
        var date = this.state.currentDate

        start.setDate(date.getDate()+1) //add one because count starts at 0
        end.setDate(date.getDate()+1)
        this.setState({start:start.getTime(),end:end.getTime()})
        console.log('time update: start =' + this.state.start +' end= '+this.state.end)
        this.getData()
    }

    selectedLot(id,lotName) {

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
            baseURL: "http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/email-notification/sendemail.php?sendTo="+email+"&body="+ 'Lot reservation confirmed for '+ selectedLot +' for ' + start.toString() + ' until ' + end.toString()+"&subject="+'Lot Reservation Confirmation',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            data:data,
            method: 'POST'
        }).then(function (response) {
            console.log(response.data)
            this.setState({selectedLot:null})
            //window.location.assign('/confirmation?lot='+selectedLot+'&start='+this.state.start+'&end='+this.state.end)
            this.props.navigation.navigate('ConfirmationPage',{'info':'Lot reservation confirmed at '+ selectedLot +' for ' + start.toLocaleDateString() + ' until ' + end.toLocaleDateString()})

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
                console.log(start)

                var data = JSON.stringify({
                    "LotID": this.state.selectID,
                    "Email": email,
                    "StartTime": this.dateOffest(start),
                    "EndTime": this.dateOffest(end)
                });
                console.log('sent reservation = ' + data)

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