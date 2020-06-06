import React, { Component } from 'react';
import {View, Text, FlatList, TextInput, ListView, StyleSheet, Button} from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
// import Button from './Components/Common/Button';
import * as Constants from './Components/Common/Constant';
import DetailScreen from './Components/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Input from './Components/Common/Input';
import ImagePicker from './Components/ImagePicker';

// class App extends Component {
//     state = {
//     loggedIn: false,
//     }

//     componentWillMount(){
// firebase.initializeApp({
//     apiKey: 'AIzaSyCLEkM045-AMdn0-kJCwL9hnf1aqhH5N_U',
//     authDomain: 'loginreact-5f9d5.firebaseapp.com',
//     databaseURL: 'https://loginreact-5f9d5.firebaseio.com',
//     projectId: 'loginreact-5f9d5',
//     storageBucket: 'loginreact-5f9d5.appspot.com',
//     messagingSenderId: '629684130004',
//     appId: '1:629684130004:web:dfb990a0d4eb68e9392b41'
//   });

// //   firebase.auth().onAuthStateChanged((user) =>{
// //     console.log('auth');
// //         if (user){
// //             this.setState({loggedIn: true});
// //         }
// //         else{
// //             this.setState({loggedIn: false});
// //         }
    
//     }
//    async testFetch(){
//         console.log("Before fetch");
//         console.log("WebUrl " + Constants.WEB_URL);
//       let fetchPromise =  await fetch(Constants.TODO_URL);
//     //     fetchPromise.then(response => {
//     //        console.log(response);
//     //    })
//     const data = await fetchPromise.json();
//     console.log(data);
//     //   .then((response) => console.log(response.json))
//     //   .catch((error) => console.log(error));

//         console.log("After fetch");
//         return data;
//     }
//      testPromise(a){
//   return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//             reject({
//                 name: a,
//                 age: 30
//             }
        
//         // },200);
//         // reject('Promise rejected');
//     )});
// }
//     renderContent(){
//     // this.prom.catch((age) => console.log('age: ' + age));
// //    this.testPromise('HI').catch((response) => console.log('name: ' + response.name));
//     this.testFetch()
//       .then((response) => {
//     console.log(response);
//     }).catch((error) => console.log("ero " + error.message));
//         if(this.state.loggedIn){
//             console.log('islogged');
//       return (<View><Button>Logout</Button></View>);
//         }
//          return  (<LoginForm></LoginForm>);
//         // return (<Button>Logout</Button>);
//     }
//     render(){
//         return(
//             <View style={{
//                 marginTop: 100
//             }}>
//                 {/* <LoginForm></LoginForm> */}
                
//                  {this.renderContent()}
//             </View>
//         );
//     }
// }

// export default class HomeScreen extends Component{


//   state = {
//     arr : []
//   }

//   constructor(props){
//     super(props);
//     this.passTextInput = null;
//   }
  
//   render(){
//     var arr = [1, 2, 3]
//     return (
      
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <View style={{ height: 500, width: 500, backgroundColor: 'red'}}>
//           <Text style={{fontSize: 50, fontWeight:'bold'}}>A B C D E F G H I J K L M N O P Q R S</Text>
//          <FlatList style={{
//            backgroundColor: 'green',
//            paddingLeft: 40,
       
//            height: 10
          
          
//          }}
//          data = {arr}
//          horizontal={true}
//          renderItem ={({ item, index}) =>{
//           return(

//             <View style={{
//               backgroundColor: 'white',
//               margin: 20,
//               height: 50,
//               width: 50
//               // flex: 1,
//               // flexDirection: 'row',
//               // justifyContent:'center',
//               // alignItems: 'center'
//             }}>
//               <TextInput style={{
//                 flex: 1,
//                 backgroundColor: 'white',
//                 // borderWidth: 5,
//                borderBottomWidth:5,
//                textAlign :'center'

               
//               }}
//               ref={(Input) =>{console.log("Text Input " +Input)}}
//               maxLength = {1}
            
//               onChangeText = {
//                 (value)  =>{

                
//                 }
//               }
//               ></TextInput>
//             </View>
//           );

//          }}
//          ></FlatList>
//         </View>
//         {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}></Button> */}
//         {/* <Button onPress={() => navigation.push('Details')}>Click</Button> */}
        

//       </View>
//     );

//   }

   
//   }
class HomeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
      inputArray: [],
    }
    this.inputs = {};

  }
componentWillMount(){
  var array = [1,2,3, 4]
  this.setState({inputArray:array})
  var s = ["a", "b", "c", "d"]
  for (let i = 0; i< array.length; i++){
    this.addTextInput(i)
  }
  
}


addRef(inpu, index){
let a = `TextField${index}`;
this.inputs[index] = inpu
console.log(a);
a = inpu;
console.log("INPUT TEXT " +a);
// return a
}
// addRef(index){
//   let a = `TextField${index}`;
//   console.log(a);
//   // a = inpu;
//   console.log("INPUT TEXT " +a);
//   return a
//   }


  focusText(index){
    index = 2;
    let a = `TextField${index}`;
    a.focus();
  }
  focusPreviousField(index){
    console.log("Previosu field")
    if(index != 0){
      this.inputs[index - 1].focus();
    }
  }
  //function to add TextInput dynamically
  addTextInput = (index) => {

    let textInput = this.state.textInput;
    // textInput.push(<TextInput style={styles.textInput} ref = {(input)=>this.addRef(input, index)}
    textInput.push(<TextInput style={styles.textInput} ref = {(input)=>this.inputs[index] = input}
      // onChangeText={(text) => this.addValues(text, index)} 
      maxLength={1}
        onKeyPress={({nativeEvent}) => {
          nativeEvent.key === 'Backspace'
            ? this.focusPreviousField(index)
            : this.addValues(nativeEvent.value, index);
        }}
      />)
      // onChangeText={this.focusText} maxLength={1}/>);
    this.setState({ textInput });
//     <TextInput
//     placeholder="FirstTextInput"
//     returnKeyType="next"
//     onSubmitEditing={() => { this.secondTextInput.focus(); }}
//     blurOnSubmit={false}
// />

// <TextInput
//     ref={(input) => { this.secondTextInput = input; }}
//     placeholder="secondTextInput"
  
// />
  }

  

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    console.log(text);
    
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
    console.log(this.state.dataArray);
    // this.secondTextInput.focus();
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
   
  }
  // if(text == ''){
  //   this.focusPreviousField(index);
  // }
  console.log("index " +index);
  console.log("arr count " +this.state.inputArray.length);
  if(index != this.state.inputArray.length - 1){
    this.inputs[index + 1].focus()
  }
  // this.inputs[index].focus();
  console.log("Log " +this.inputs);

  }

  //function to console the output
  getValues = () => {
    console.log('Data', this.state.inputData);
  }


  render(){
    return (
      <View style={{
        backgroundColor: 'green',
        flex:1,
        // alignContent: 'center',
        // justifyContent: 'center',
        
      }}>
        
        <View style={{
          // flex:1,
          flexDirection:'row',
          backgroundColor: 'red',
          // width: 1000,
          // flex:1,
          height: 50,
          // alignSelf:'stretch',
          justifyContent: 'space-around',
          margin: 30,
          // top: 100

          // alignContent
          // width: 300
        
        }}>
        {this.state.textInput.map((value) => {
          return value
        })}
        {/* <TextInput
    placeholder="FirstTextInput"
    returnKeyType="next"
    onSubmitEditing={() => { this.secondTextInput.focus(); }}
    blurOnSubmit={false}
/>

<TextInput
    ref={(input) => { this.secondTextInput = input; }}
    placeholder="secondTextInput"
/> */}
        </View>
        {/* <Button title='Get Values' onPress={() => this.getValues()} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView: {
  flexDirection: 'row'
  },
  textInput: {
  // height: 100,
  width: 30,
  textAlign: 'center',

  // flex: 1,
  borderColor: 'black', 
  borderWidth: 1,
  // margin: 50,
  // alignItems:'center',
  // justifyContent: 'space-between',
  // margin: 20,
  // padding: 30,
  // // marginBottom: 100
  // bottom: 30
},
row:{
  flexDirection: 'row',
  justifyContent: 'center'
  },
});

export default HomeScreen;
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ImagePicker">
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen> */}
          <Stack.Screen name="ImagePicker" component={ImagePicker}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
// export default App;
