import React from 'react';
import { View, ScrollView } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const LengthScreen = ({navigation}) => {
    return(
        <>
            <View>
                <TopHeader/>
                <Heading/>
            </View>
            
            <ScrollView>
                <Quantity navigation = {navigation} quantity = {'Length'}/>
                <InputConvert quantity = {'Length'}/>
            </ScrollView>
        </>
    )
}

export default LengthScreen;