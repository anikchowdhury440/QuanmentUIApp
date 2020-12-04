import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import UnitButtonStyles from '../styles/UnitButton.styles';

export default class UnitButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style = {UnitButtonStyles.buttonStyles}>
                <Image style = {UnitButtonStyles.imageStyles} source = {this.props.url}/>
                <Text style = {UnitButtonStyles.unitName}>{this.props.name}</Text>
            </TouchableOpacity>    
        )
    }
}