
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import axios from 'axios'
import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image,ToastAndroid} from 'react-native';

export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lots:[

        ]}
    }
    static navigationOptions = {
        title: 'Parking Lots Page',
    };
    componentWillMount(){
        this.getData()
    }
    getData(){
        axios({
            baseURL: 'http://ec2-34-229-81-168.compute-1.amazonaws.com/deva/api.php?starttime=1520924400&endtime=1520946000&type=1',
            timeout: 60000,
            headers: {'Content-Type': 'application/json'},
            method: 'GET'
        }).then(function (response) {
                console.log(response)
                this.setState({lots:response.data})

            }.bind(this))
            .catch(function (error) {
                console.log(error);
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
                                <TouchableOpacity key={item.LotID} onPress={() => this.selectedLot(item.LotID)}>
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

    selectedLot(id) {
        ToastAndroid.show(id, ToastAndroid.SHORT);
        this.props.navigation.navigate('ConfirmationPage')

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