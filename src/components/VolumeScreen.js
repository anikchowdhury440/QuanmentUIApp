import React from 'react';
import { ScrollView, View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import Quantity from './Quantity';
import TopHeader from './TopHeader';

const VolumeScreen = ({ navigation }) => {
    return (
        <>
            <View>
                <TopHeader/>
                <Heading/>
            </View>

            <ScrollView>
                <Quantity navigation = {navigation} quantity = {'Volume'}/>
            </ScrollView>
        </>
    )
}

export default VolumeScreen;