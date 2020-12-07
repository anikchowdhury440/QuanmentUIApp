import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LengthScreen from '../components/LengthScreen';
import TemperatureScreen from '../components/TemperatureScreen';
import VolumeScreen from '../components/VolumeScreen';

const Stack = createStackNavigator();

const ApplicationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Length" screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "Length" component = {LengthScreen}/>
                <Stack.Screen name = "Temperature" component = {TemperatureScreen}/>
                <Stack.Screen name = "Volume" component = {VolumeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationStack;