import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = (props) => {
return(
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={props.size || 'large'}></ActivityIndicator>
    </View>
);
};
const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
export default Spinner;