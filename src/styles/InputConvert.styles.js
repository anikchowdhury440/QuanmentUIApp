import React from 'react';
import {StyleSheet} from 'react-native';

const InputConvertStyle = StyleSheet.create({
    container : {
        paddingTop : 30,
        width : '100%',
    },

    convert_heading : {
        alignSelf : "center",
        fontSize : 20,
        fontWeight : 'bold'
    },

    unit_conversion_style : {
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : 10
    },

    unit_input_block : {
        margin : 10,
        width : '45%'
    },

    unit_userinput_block : {
        marginTop : 10,
        backgroundColor : 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    unit_user_input_textinput : {
        height: 50,
        borderColor : 'white',
        borderBottomColor : '#E7DCFE',
        borderWidth: 1,
        fontSize : 20,
        fontWeight : "bold",
        paddingLeft : 10
    },

    unit_user_input_picker : {
        height : 40,
    }
})

export default InputConvertStyle;