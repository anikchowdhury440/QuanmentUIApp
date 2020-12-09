import React from 'react';
import { ScrollView, View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const TemperatureScreen = ({ navigation }) => {
    return (
        <>
            <View>
                <TopHeader/>
                <Heading/>
            </View>
            
            <ScrollView>
                <Quantity navigation = {navigation} quantity = {'Temperature'}/>
            </ScrollView>
        </>
    )
}

export default TemperatureScreen;