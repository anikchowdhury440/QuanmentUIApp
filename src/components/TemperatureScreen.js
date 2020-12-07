import React from 'react';
import { View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const TemperatureScreen = ({ navigation }) => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation}/>
            <InputConvert quantity = {'Temperature'}/>
        </View>
    )
}

export default TemperatureScreen;