
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class ParkingLotsPage extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        title: 'Parking Lots Page',
    };

    getData(){
        return [
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
        ]
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.container}>
                    <FlatList
                        data={this.getData()}
                        renderItem={
                            ({item}) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ConfirmationPage')}>
                                    <View style={styles.itemContainer}>
                                        <Image
                                            style={{width: "100%", height: 200}}
                                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                        />
                                        <Text style={styles.item}>{item.key}</Text>

                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: 'black',
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

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
    },
    itemContainer:{paddingLeft: 10,
        paddingRight:10,
        paddingTop: 10
    },
    item: {
        textAlign: 'center',
        fontSize: 18,
        height: 44,

    },
})