import React from 'react';
import { View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const VolumeScreen = ({ navigation }) => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation}/>
            <InputConvert quantity = {'Volume'}/>
        </View>
    )
}

export default VolumeScreen;