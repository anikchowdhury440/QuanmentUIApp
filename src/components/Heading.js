import React from 'react';
import {View, Text} from 'react-native';
import HeadingStyles from '../styles/Heading.styles';

const Heading = () => {
    return (
        <View>
            <Text style = {HeadingStyles.container}>
                Welcome To Quantity Measurement
            </Text>
        </View>
    )
}

export default Heading;