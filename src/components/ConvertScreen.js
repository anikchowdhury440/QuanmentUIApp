import React from 'react';
import { Button, View } from 'react-native';
import ConvertScreenStyle from '../styles/ConvertScreen.styles';
import Heading from './Heading';
import InputConvert from './InputConvert';
import TopHeader from './TopHeader';

const ConvertScreen = ({ route, navigation }) => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <InputConvert route = {route}/>
            <View style = {ConvertScreenStyle.navigate_button}>
                <Button title = 'Change Quantity' onPress = {() => navigation.navigate('Home')}/>
            </View>
        </View>
    )
}

export default ConvertScreen;