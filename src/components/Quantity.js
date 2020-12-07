import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import QuantityStyles from '../styles/Quantity.styles';


export default class Quantity extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style = {QuantityStyles.container}>
                <Text style = {QuantityStyles.select_text}>Select Quantity</Text>
                <View style = {QuantityStyles.button_quantity}>
                    <TouchableOpacity style = {[QuantityStyles.button_style, (this.props.quantity == 'Length') ? QuantityStyles.button_style_length : QuantityStyles.button_style_default]}
                                    onPress = {() => this.props.navigation.navigate('Length')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/length.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_length]}>Length</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {[QuantityStyles.button_style, (this.props.quantity == 'Temperature') ? QuantityStyles.button_style_temperature : QuantityStyles.button_style_default]}
                                    onPress = {() => this.props.navigation.navigate('Temperature')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/temperature.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_temperature]}>Temperature</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[QuantityStyles.button_style, (this.props.quantity == 'Volume') ? QuantityStyles.button_style_volume : QuantityStyles.button_style_default]}
                                    onPress = {() => this.props.navigation.navigate('Volume')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/volume.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_volume]}>Volume</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        )
    }
}