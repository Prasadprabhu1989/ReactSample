import React, { Component} from 'react';

// import TestObject from './TestObject.js';

// import ImagePicker from 'react-native-image-picker/lib/commonjs';
// import CustomButton from './Components/CustomButton'
import ImagePicker from 'react-native-image-picker';

import {SafeAreaView, StyleSheet, View, Text, Button, Image, Alert, TouchableOpacity} from 'react-native';
// import Heading from './Components/Heading';

const styles = StyleSheet.create({
container :{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  backgroundColor: 'red',
  alignItems: 'center'
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


export default class ImagePickers extends Component {
    // const [enteredGoal,setEnteredGoal] = useState('')
  // let obj = new TestObject();
  
    constructor(props){
  super(props);
  // this.state = {
  //   // goal: "",
  //   pickedImage: null,
  //   clicks: 0,
  //   myState: "Lorem ipsum dolor sit"
  // };
  
  // this.updateState = this.updateState.bind(this);
  }
  
  
    state = {
      pickedImage: null,
      
    }
    
  
    pickerImageHandler(){
      console.log("Image picker");
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
   
    updateState = () =>{
  
      this.setState({
        myState: "The state is updated"
      });
    }
    
    
    // render(){
    //   return (
    //   <View>
    //       {/* <Image source={this.state.pickedImage} style={{
    //         height : '50%',
    //         width : '80%',
    //         padding : 10,
    //         alignItems : 'center'
          
            
    //       }} /> */}
    //        {/* <Button
    //         title="Pick Image"
    //         style={styles.buttons}
    //         onPress={() => this.pickerImageHandler()} /> */}
    //       {/* <Button onPress={this.TestFunction} title="Click" style={styles.buttons}></Button> */}
    //       {/* <Button title ="Add" style={styles.buttons} onPress={this.updateState}></Button> */} */}
    
  
    //     </View>
  
 
    //   );
    // }

    render(){
      return(
        <View style = {styles.container}>
         <Image source={this.state.pickedImage} style={{

          height : 200,
           width : 200,
        margin : 10,
          // alignItems : 'center'
      }} />
           <Button
           title="Pick Image"
           style={styles.buttons}
         onPress={() => this.pickerImageHandler()} />
        </View>
      );
    }
  }