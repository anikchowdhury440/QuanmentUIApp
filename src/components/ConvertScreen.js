import React from 'react';
import { Button, View } from 'react-native';
import Heading from './Heading';
import InputConvert from './InputConvert';
import TopHeader from './TopHeader';

const ConvertScreen = ({ navigation }) => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <InputConvert/>
            <Button title = 'home' onPress = {() => navigation.navigate('Home')}/>
        </View>
    )
}

export default ConvertScreen;