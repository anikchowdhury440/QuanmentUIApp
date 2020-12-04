import React from 'react';
import {View, Text} from 'react-native';
import TopHeaderStyles from '../styles/TopHeader.styles'

const TopHeader = () => {
    return (
        <View style = {TopHeaderStyles.container}>
            <Text style = {TopHeaderStyles.appName}>
                Quanment
            </Text>
            <Text style = {TopHeaderStyles.history}>
                History
            </Text>
        </View>
    )
}

export default TopHeader;