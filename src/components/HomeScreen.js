import React from 'react'
import { Button, View } from 'react-native'
import Heading from './Heading'
import Quantity from './Quantity'
import TopHeader from './TopHeader'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <Quantity navigation = {navigation}/>
        </View>
    )
}

export default HomeScreen;