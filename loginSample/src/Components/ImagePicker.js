import React, { Component, useState } from 'react';

// import TestObject from './TestObject.js';

// import ImagePicker from 'react-native-image-picker/lib/commonjs';
// import CustomButton from './Components/CustomButton'

import {SafeAreaView, StyleSheet, View, Text, Button, Image,Alert, TextInput,SectionList,TouchableOpacity} from 'react-native';
// import Heading from './Components/Heading';

const styles = StyleSheet.create({
container :{
  flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
},
buttons:{
  width: 100,
  height: 50,
  backgroundColor: 'red'
  
},
screen:{
  padding:50
},
inputContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
input: {
width : '80%',
borderColor: 'black',
borderWidth :1,
padding: 10
},
stateTestContainer : {
  flex : 1,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center'
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
sectionHeader: {
  paddingTop: 50,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 14,
  fontWeight: 'bold',
  backgroundColor: 'rgba(247,247,247,1.0)',
},

});


export default class ImagePicker extends Component{
    // const [enteredGoal,setEnteredGoal] = useState('')
  // let obj = new TestObject();
  
    constructor(props){
  super(props);
  this.state = {
    // goal: "",
    pickedImage: null,
    clicks: 0,
    myState: "Lorem ipsum dolor sit"
  };
  
  // this.updateState = this.updateState.bind(this);
  }
  
  
    // state = {
    //   pickedImage: null,
      
    // }
    
  
    pickerImageHandler(){
      ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600},res =>{
        if(res.didCancel) {
          console.log("User cancelled!");
        } else if (res.error) {
          console.log("Error", res.error);
        } else {
          console.log("Image picked");
          
          this.setState({
            pickedImage: {
              uri: res.uri
            }
          });
  
      }
  
      });
    }
    TestFunction(){
      Alert.alert('Button Pressed');
    }
     goalInputHandler(enteredText){
      
      name = enteredText;
      setEnteredGoal(enteredText);
     console.log({name})
    //  setEnteredGoal(enteredText);
    
  
  
    }
    updateState = () =>{
  
      this.setState({
        myState: "The state is updated"
      });
    }
    addGoalHandler(){
      console.log(enteredGoal);
    }
  
    increaseCounter () {
     
      this.setState({
       
        clicks: this.state.clicks + 1
      });
    }
    
    render(){
      return (
        <View style={styles.container} key>
          {/* <Image source={this.state.pickedImage} style={{
            height : '50%',
            width : '80%',
            padding : 10,
            alignItems : 'center'
          
            
          }} /> */}
          {/* <Button
            title="Pick Image"
            style={styles.buttons}
            onPress={() => this.pickerImageHandler()} />
          <Button onPress={this.TestFunction} title="Click" style={styles.buttons}></Button> */}
          <Button title ="Add" style={styles.buttons} onPress={this.updateState}></Button>
          <TouchableOpacity>
            <Text>Go to demo</Text>
          </TouchableOpacity>
  
        </View>
  
        // <View style = {{
        //   padding: 50,
        //   flexDirection: 'row',
        //   width: '80%',
        //   height: 300,
        //   justifyContent: 'space-around',
        //   alignItems: 'stretch'
        // }}>
  
        //   <View style = {{
  
        //     backgroundColor :'red',
        //     flex : 1
        //   }}
        // </View>
  
        // <View style = {{
        //   flex:1,
        //   padding : 50,
        //   flexDirection:'column',
        //   width:'100%',
        //   height: 200,
        //   justifyContent:'space-between',
        //   alignItems :'flex-end'
        // }}>
        // <View style = {{
        //    flex:1,
        //   backgroundColor: 'red',
        //   // width: 100,
        //   // height: 100,
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}>
        // <Text>1</Text>
        // </View>
        // <View style = {{
        //   flex:1,
        //   backgroundColor: 'blue',
        //   // width: 100,
        //   // height: 100,
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}>
        //  <Text>2</Text>
        // </View>
        // <View style = {{
        //     flex:1,
        //   backgroundColor: 'green',
        //   // width: 100,
        //   // height: 100,
        //   justifyContent: 'center',
        //   alignItems: 'center'
        // }}>
        //  <Text>3</Text>
        // </View>
       
  
  
        // </View>
        // <View style={styles.screen}>
        //   <View style={styles.inputContainer}>
        //     {/* <TextInput placeholder ="Course goal"
        //     style = {styles.input}
        //     onChangeText = {this.goalInputHandler} value={enteredGoal}
        //     ></TextInput> */}
        //     <Text style ={styles.buttons}>You clicked {this.state.clicks} times</Text>
        //     {/* <Button title= "ADD" onPress = {this.addGoalHandler}></Button> */}
        //     {/* <Button title= "ADD"
        //      onPress = {() =>this.increaseCounter}>
               
        //      </Button> */}
        //      <Text onPress = {() =>this.updateState}>{this.state.myState}</Text>
        //   </View>
        // </View>
      );
    }
  }