import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import InputConvertStyle from '../styles/InputConvert.styles';

export default class InputConvert extends Component {
    render() {
        return (
            <View style = {InputConvertStyle.container}>
                <Text style = {InputConvertStyle.convert_heading}>Length Conversion</Text>
                <View style = {InputConvertStyle.unit_conversion_style}>
                    <View style = {InputConvertStyle.unit_input_block}>
                        <Text>FROM</Text>
                        <View style = {InputConvertStyle.unit_userinput_block}>
                            <TextInput style = {InputConvertStyle.unit_user_input_textinput}/>
                            <Picker style = {InputConvertStyle.unit_user_input_picker}>
                                <Picker.Item label="Java" value="java" />  
                                <Picker.Item label="JavaScript" value="js" /> 
                            </Picker>
                        </View>
                    </View>
                    <View style = {InputConvertStyle.unit_input_block}>
                        <Text>TO</Text>
                        <View style = {InputConvertStyle.unit_userinput_block}>
                            <TextInput style = {InputConvertStyle.unit_user_input_textinput}/>
                            <Picker style = {InputConvertStyle.unit_user_input_picker}>
                                <Picker.Item label="Java" value="java" />  
                                <Picker.Item label="JavaScript" value="js" /> 
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}