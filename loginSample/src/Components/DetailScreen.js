import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class DetailScreen extends Component {
  state = {
   isTapped: false
  }
    render(){
      let isTap = this.state.isTapped;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
              {/* <Button
                title="Go to Details... again"
                style = {{ bo}}
                onPress={() => this.props.navigation.goBack()}
              /> */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.setState(prevState => ( {isTapped: !prevState.isTapped}))
           }>
                {/* <Text style = {!isTapped?{styles.buttonDefaultStyle} : {styles.textSelectedColor}}> Click</Text> */}
                <Text style = {!isTap ? styles.textDefaultColor : styles.textSelectedColor }>Click</Text>
              </TouchableOpacity>
            </View>
          );
    }
    
}
const styles = StyleSheet.create({
  buttonDefaultStyle: {
    borderColor: 'red',
    borderWidth: 2,
    

  },
  textDefaultColor:{
    color: 'blue'
  },
  textSelectedColor:{
    color: 'green'
  }
    
 })