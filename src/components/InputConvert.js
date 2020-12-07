import React, { Component} from 'react';
import { Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import InputConvertStyle from '../styles/InputConvert.styles';

export default class InputConvert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityName : this.props.quantity,
            lengthUnit : ["Kilometre", "Meter", "Centimeter", "Milimetre", "Micrometre", "Mile", "Foot", "Inch", "Yard"],
            temperatureUnit : ["Celcius", "FarenHeit", "Kelvin"],
            volumeUnit : ["Litre", "Gallon", "Mililitre"],
            lengthConstant : [1, 1000, 100000, 1e+6, 1e+9, 0.6214, 3282, 39384, 1094],
            volumeConstant : [1, 0.2642, 1000],
            fromUnitIndex : 0,
            toUnitIndex : 0,
            fromValue : 0,
            toValue : 0,
        }
    }
    
    updateFromUnit = unit => {
        this.setState({
            fromUnitIndex : unit
        })
        this.convertFromUnit(this.state.fromValue);
    }

    updateToUnit = unit => {
        this.setState({
            toUnitIndex : unit
        })
        this.convertFromUnit(this.state.fromValue);
    }

    convertFromUnit = async (value) => {
        await this.setState({
            fromValue : Number(value)
        })
        if(this.state.quantityName == 'Length') {
            var toUnitConstant = this.state.lengthConstant[this.state.toUnitIndex];
            var fromUnitConstant = this.state.lengthConstant[this.state.fromUnitIndex];
            var resultValue = (this.state.fromValue * toUnitConstant) / fromUnitConstant;
        }
        else if (this.state.quantityName == 'Volume') {
            var toUnitConstant = this.state.volumeConstant[this.state.toUnitIndex];
            var fromUnitConstant = this.state.volumeConstant[this.state.fromUnitIndex];
            var resultValue = (this.state.fromValue * toUnitConstant) / fromUnitConstant;
        }
        else {
        
            if(this.state.fromUnitIndex == this.state.toUnitIndex) {
                resultValue = this.state.fromValue
            }
            else if(this.state.fromUnitIndex == 0 && this.state.toUnitIndex == 1){
                var resultValue = (this.state.fromValue * 9 / 5) + 32
            }
            else if(this.state.fromUnitIndex == 1 && this.state.toUnitIndex == 0) {
                var resultValue = (this.state.fromValue - 32) * 5 / 9
            }
            else if(this.state.fromUnitIndex == 0 && this.state.toUnitIndex == 2) {
                var resultValue = this.state.fromValue + 273.15
            }
            else if(this.state.fromUnitIndex == 2 && this.state.toUnitIndex == 0) {
                var resultValue = this.state.fromValue - 273.15
            }
            else if(this.state.fromUnitIndex == 1 && this.state.toUnitIndex == 2) {
                var resultValue = (this.state.fromValue - 32) * 5 / 9 + 273.15
            }
            else {
                var resultValue = (this.state.fromValue - 273.15) * (9 / 5) + 32
            }
        }
        resultValue = Number(Math.round(resultValue+'e6')+'e-6');
        await this.setState({
            toValue : resultValue
        })
    }

    render() {
        return (
            <View style = {InputConvertStyle.container}>
                <View style = {InputConvertStyle.unit_conversion_style}>
                    <View style = {InputConvertStyle.unit_input_block}>
                        <Text style = {InputConvertStyle.from_to_text}>FROM</Text>
                        <View style = {InputConvertStyle.unit_userinput_block}>
                            <TextInput style = {InputConvertStyle.unit_user_input_textinput}
                                onChangeText = {this.convertFromUnit}
                                value = {this.state.fromValue.toString()}/>
                            <Picker style = {InputConvertStyle.unit_user_input_picker}
                                    selectedValue = {this.state.fromUnitIndex}
                                    onValueChange = {this.updateFromUnit}
                                    mode = "dropdown"> 
                                { (this.state.quantityName == 'Length') ? 
                                    this.state.lengthUnit.map( (unit, index) => { 
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>) }) : 
                                    (this.state.quantityName == 'Temperature') ? 
                                        this.state.temperatureUnit.map( (unit, index) => { 
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>)}) :
                                        this.state.volumeUnit.map( (unit, index) => {
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            </Picker>
                        </View>
                    </View>
                    <View style = {InputConvertStyle.unit_input_block}>
                        <Text style = {InputConvertStyle.from_to_text}>TO</Text>
                        <View style = {InputConvertStyle.unit_userinput_block}>
                            <TextInput style = {InputConvertStyle.unit_user_input_textinput}
                                value = {this.state.toValue.toString()}
                                editable = {false}/>

                            <Picker 
                                style = {InputConvertStyle.unit_user_input_picker}
                                selectedValue = {this.state.toUnitIndex}
                                onValueChange = { this.updateToUnit }
                                mode = "dropdown"> 
                                    { (this.state.quantityName == 'Length') ? 
                                    this.state.lengthUnit.map( (unit, index) => {
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>) 
                                        }) : 
                                    (this.state.quantityName == 'Temperature') ? 
                                        this.state.temperatureUnit.map( (unit, index) => { 
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>)}) :
                                        this.state.volumeUnit.map((unit, index) => {
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}