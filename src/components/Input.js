import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import InputStyles from '../styles/Input.styles';
import UnitButton from './UnitButton';

export default class Input extends Component {
    render() {
        return(
            <View style = {InputStyles.container}>
                <View style = {InputStyles.buttonUnit}>
                    <UnitButton url = {require('../assets/length.png')} name = {'Length'}/>
                    <UnitButton url = {require('../assets/temperature.png')} name = {'Temperature'}/>
                    <UnitButton url = {require('../assets/volume.png')} name = {'Volume'}/>
                </View>
                <View>
                    <Text>From</Text>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}/>

                </View>
            </View>
        )
    }
}