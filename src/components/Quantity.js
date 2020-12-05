import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import QuantityStyles from '../styles/Quantity.styles';


export default class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity : ''
        }
    }

    handleQuantity = async (quantity) => {
        await this.setState({
            quantity : quantity
        })
        console.log(this.state.quantity)
    }

    render() {
        return(
            <View style = {QuantityStyles.container}>
                <Text style = {QuantityStyles.select_text}>Select Conversion</Text>
                <View style = {QuantityStyles.button_unit}>
                    <TouchableOpacity style = {[QuantityStyles.button_style, QuantityStyles.button_style_length]}
                                    onPress = {() => this.handleQuantity('length')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/length.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_length]}>Length</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style = {[QuantityStyles.button_style, QuantityStyles.button_style_temperature]}
                                    onPress = {() => this.handleQuantity('temperature')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/temperature.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_temperature]}>Temperature</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[QuantityStyles.button_style, QuantityStyles.button_style_volume]}
                                    onPress = {() => this.handleQuantity('volume')}>
                        <Image style = {QuantityStyles.image_style} source = {require('../assets/volume.png')}/>
                        <Text style = {[QuantityStyles.quantity_name, QuantityStyles.quantity_name_volume]}>Volume</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        )
    }
}