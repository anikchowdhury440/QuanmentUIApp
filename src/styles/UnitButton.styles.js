import React from 'react';
import {StyleSheet} from 'react-native';

const UnitButtonStyles = StyleSheet.create({
    buttonStyles : {
        margin : 10,
        width : 110,
        height : 110,
        paddingTop : 15,
        paddingBottom : 15,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : 'green',
        backgroundColor: '#EDFDF9'
    },
    imageStyles : {
        height : 50,
        marginBottom : 10,
        alignSelf : "center"
    },
    unitName : {
        alignSelf : "center",
        color : 'green'
    }

})

export default UnitButtonStyles;