import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import ConvertScreen from '../components/ConvertScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "Home" component = {HomeScreen}/>
                <Stack.Screen name = "Convert" component = {ConvertScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen;