import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';


function Input(props){
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.children}</Text>
            <TextInput
            style={styles.inputStyle}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCorrect= {false}
            placeholder={props.placeholder}
            secureTextEntry={props.isPassword}
            ></TextInput>
        </View>

    );
}
export default Input;

const styles = StyleSheet.create({
    inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    

    },
    labelStyle :{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }
})