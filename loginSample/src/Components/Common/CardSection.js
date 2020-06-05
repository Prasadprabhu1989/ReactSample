import React from 'react';
import {View, StyleSheet} from 'react-native';


export default function CardSection(props){

    return(
        <View style={style.containerStyle}>{props.children}</View>
    );
};

const style = StyleSheet.create({
containerStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'orange',
    position: 'relative'

}
});