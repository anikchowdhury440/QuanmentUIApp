import React from 'react';
import { ScrollView } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const LengthScreen = ({navigation}) => {
    return(
        <ScrollView>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation} quantity = {'Length'}/>
            <InputConvert quantity = {'Length'}/>
        </ScrollView>
    )
}

export default LengthScreen;