import React from 'react';
import { View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const LengthScreen = ({navigation}) => {
    return(
        <View>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation}/>
            <InputConvert quantity = {'Length'}/>
        </View>
    )
}

export default LengthScreen;