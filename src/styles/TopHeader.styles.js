import React from 'react';
import {StyleSheet} from 'react-native';

const TopHeaderStyles = StyleSheet.create({
    container : {
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft : '10%',
        paddingRight : '10%',
        width : '100%',
        flexDirection : 'row',
        justifyContent : "space-between"
    },

    app_name : {
        fontSize : 20,
        fontWeight : 'bold',
    },

    history : {
        fontWeight : 'bold',
        marginTop : 5
    }
});

export default TopHeaderStyles;