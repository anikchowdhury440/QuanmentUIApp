import React from 'react'
import { View } from 'react-native'
import Heading from './Heading'
import Quantity from './Quantity'
import TopHeader from './TopHeader'

const HomeScreen = () => {
    return (
        <View>
            <TopHeader/>
            <Heading/>
            <Quantity/>
        </View>
    )
}

export default HomeScreen;