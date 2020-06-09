import React, {Component} from 'react';
import { View, TextInput, Text, Button, AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class SampleView extends React.Component{


    componentDidMount(){
        SplashScreen.hide();

    }
    render(){
        return(
                <View>
                <Text>SampleView</Text>
                <Button style = {{
                    height : 100
                }} title = "Click"
                onPress={() =>this.signIn}
                ></Button>

                </View>
        );
    }
    // signIn = () =>{
    //     AsyncStorage.setItem("SignIn", "true");
    //     let va = AsyncStorage.getItem("SignIn");
    //     console.log(va);
    // }
    signIn = async () => {
        
        try {
          await AsyncStorage.setItem(
            'SignIn',
            'true'
          );
        } catch (error) {
          // Error saving data
        }
      };
}