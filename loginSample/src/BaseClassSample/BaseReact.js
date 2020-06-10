import React from 'react';
import { View } from 'react-native';
 

export default class BaseReact extends React.Component {


        constructor(props){
            super(props)
        }

        
        render(){
    console.log('super render');
    return<View style = {{
        backgroundColor : 'blue'
    }}><Text>Super render</Text></View>

        }
    
}
