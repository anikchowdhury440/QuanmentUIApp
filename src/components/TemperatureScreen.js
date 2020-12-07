import React from 'react';
import { ScrollView } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const TemperatureScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation} quantity = {'Temperature'}/>
            <InputConvert quantity = {'Temperature'}/>
        </ScrollView>
    )
}

export default TemperatureScreen;