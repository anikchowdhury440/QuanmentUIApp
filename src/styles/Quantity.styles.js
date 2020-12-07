
import {StyleSheet} from 'react-native';

const QuantityStyles = StyleSheet.create({
    container : {
        paddingTop : 30,
        width : '100%',
    },

    select_text : {
        alignSelf : "center",
        fontSize : 20,
        fontWeight : 'bold',
        paddingBottom : 10
    },

    button_quantity : {
        flexDirection : 'row',
        justifyContent : 'center'
    },

    button_style : {
        margin : 10,
        width : 110,
        height : 110,
        paddingTop : 15,
        paddingBottom : 15,
        borderRadius : 10,
        borderWidth : 1,
    },

    button_style_length : {
        borderColor : 'green',
        backgroundColor: '#EDFDF9',
    },

    button_style_temperature : {
        borderColor : 'red',
        backgroundColor: '#FFEEF0',
    },

    button_style_volume : {
        borderColor : '#7224FF',
        backgroundColor: '#E8DDFF',
    },

    image_style : {
        height : 50,
        marginBottom : 10,
        alignSelf : "center"
    },

    quantity_name : {
        alignSelf : "center"
    },

    quantity_name_length : {
        color : 'green'
    },

    quantity_name_temperature : {
        color : 'red'
    },

    quantity_name_volume : {
        color : '#7224FF'
    }
})

export default QuantityStyles;