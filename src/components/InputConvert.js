import React, { Component} from 'react';
import { Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import InputConvertStyle from '../styles/InputConvert.styles';
import UnitDataController from '../../UnitDataController'

export default class InputConvert extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            fromValue : value
        })

        if(this.props.quantity == 'Length') {
            var toUnitConstant = UnitDataController.lengthConstant[this.state.toUnitIndex];
            var fromUnitConstant = UnitDataController.lengthConstant[this.state.fromUnitIndex];
            var resultValue = (this.state.fromValue * toUnitConstant) / fromUnitConstant;
            if(this.state.fromUnitIndex != 3 && this.state.fromUnitIndex != 4) {
                resultValue = Number(Math.round(resultValue+'e6')+'e-6')
            }
            else {
                resultValue = resultValue.toExponential(7)
            }
        }

        else if (this.props.quantity == 'Volume') {
            var toUnitConstant = UnitDataController.volumeConstant[this.state.toUnitIndex];
            var fromUnitConstant = UnitDataController.volumeConstant[this.state.fromUnitIndex];
            var resultValue = (this.state.fromValue * toUnitConstant) / fromUnitConstant;
            resultValue = Number(Math.round(resultValue+'e4')+'e-4')
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
                var resultValue = parseFloat(this.state.fromValue) + 273.15
            }

            else if(this.state.fromUnitIndex == 2 && this.state.toUnitIndex == 0) {
                var resultValue = parseFloat(this.state.fromValue) - 273.15
            }

            else if(this.state.fromUnitIndex == 1 && this.state.toUnitIndex == 2) {
                var resultValue = (this.state.fromValue - 32) * 5 / 9 + 273.15
            }

            else {
                var resultValue = (this.state.fromValue - 273.15) * (9 / 5) + 32
            }
            
            resultValue = Number(Math.round(resultValue+'e2')+'e-2');
        }

        this.setState({
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

                            <Picker 
                                style = {InputConvertStyle.unit_user_input_picker}
                                selectedValue = {this.state.fromUnitIndex}
                                onValueChange = {this.updateFromUnit}
                                
                                mode = "dropdown"> 
                                    { (this.props.quantity == 'Length') ? 
                                        UnitDataController.lengthUnit.map( (unit, index) => { 
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>) 
                                        }) : 
                                        (this.props.quantity == 'Temperature') ? 
                                            UnitDataController.temperatureUnit.map( (unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) :
                                            UnitDataController.volumeUnit.map( (unit, index) => {
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            })
                                    }
                            </Picker>

                        </View>

                    </View>

                    <View style = {InputConvertStyle.unit_input_block}>

                        <Text style = {InputConvertStyle.from_to_text}>TO</Text>

                        <View style = {InputConvertStyle.unit_userinput_block}>

                            <TextInput style = {InputConvertStyle.unit_user_input_textinput}
                                value = {isNaN(this.state.toValue) ? '' : this.state.toValue.toString()}
                                editable = {false}/>

                            <Picker 
                                style = {InputConvertStyle.unit_user_input_picker}
                                selectedValue = {this.state.toUnitIndex}
                                onValueChange = { this.updateToUnit }
                                mode = "dropdown"> 
                                    { (this.props.quantity == 'Length') ? 
                                        UnitDataController.lengthUnit.map( (unit, index) => {
                                            return (<Picker.Item label = {unit} value = {index} key = {unit}/>) 
                                        }) : 
                                        (this.props.quantity == 'Temperature') ? 
                                            UnitDataController.temperatureUnit.map( (unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) :
                                            UnitDataController.volumeUnit.map((unit, index) => {
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            })
                                    }

                            </Picker>

                        </View>

                    </View>

                </View>
                
            </View>
        )
    }
}