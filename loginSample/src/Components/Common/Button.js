import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// function Button ({onPresses}){
   
const Button= (props) =>{
const a = "name";
    return(
        // <TouchableOpacity style={styles.buttonStyle} onPress={()=> onPresses}></TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
             <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
       
    );

    
   
};

// export {Button};
export default Button;
// function testFunc(){
//     console.log('nme'); 
//     onPresses("name");
// }

const styles = StyleSheet.create({
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom: 10,
        
    }
});