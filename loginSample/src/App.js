import React, { Component } from 'react';
import {View, Text, FlatList, TextInput, ListView, StyleSheet, Button, NativeModules} from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
// import Button from './Components/Common/Button';
import * as Constants from './Components/Common/Constant';
import DetailScreen from './Components/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Input from './Components/Common/Input';
import ImagePickers from './Components/ImagePickers';
// if (__DEV__) {
//   NativeModules.DevSettings.setIsDebuggingRemotely(true);
// }

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

export default class HomeScreen extends Component{


  state = {
    arr : [],
    textInput: [],
    inputData: [],
      inputArray: [],
          value: [],
          result: '',
          textInputValues: [],
          texInputs: [1],
          globalValue:[]
  }

  constructor(props){
    super(props);
    this.passTextInput = null;
    this.inputs ={};
    this.globalValue = []
  }
  componentDidMount(){
      var array = [1,2, 3,4];
        this.setState({inputArray: array});
        
      var s = ["a", "b", "c", "d"]
      let dict = {}
      var arrs = []
      var s = []
      this.setState({result: 'P'})

      for (let i = 0; i< array.length; i++){
        // this.inputArray.push[''];
        dict[i] = 'A';
        // s.push('');
        // arr.push(i)
        // this.addTextInput(i)
        
      
      
      }
      
      this.setState({texInputs: array});
      
      
      let textInputss = [...this.state.texInputs];
      var inputAr = []
     for (let i = 0; i< textInputss.length; i++){
        // this.inputArray.push[''];
        // dict[i] = 'A';
        // s.push('');
        // arr.push(i)
        // this.addTextInput(i)
        inputAr.push('');
        
      
      
      }
      console.log("TextInputsssss ",textInputss);
      this.setState({
        textInputValues : inputAr,
      })
      
      // this.setTextInputValue();
      // arrs.push(dict);
      // // this.setState({
      // //   value: arrs,
      // // })
      // console.log("arrs ", arrs);
      // let result = arrs.map((sum) =>{
      //   let s = sum[0]
      //   console.log('SBBS ', s);
      //   return s;
      // })
      // let a = 'NN'
      
      
      // console.log("aresultrrs ", result);
    
    }
  addRef(inpu, index){
     let a = `TextField${index}`;
     this.inputs[index] = inpu
     console.log(a);
     a = inpu;
     console.log("INPUT TEXT " +a);
    
    }
    focusPreviousField(index){
          console.log("Previosu field")
         
          let dataArray = this.state.inputData;
          let arr = this.state.textInputValues;
          
        //  this.setState({
        //    value[index] : "HH"
        //  })
        console.log('Previuos field array ', dataArray);
        var items = this.state.inputData;
          if (dataArray.length !== 0){
            dataArray.forEach(element => {
              console.log(element);
              console.log("index ",index);
              if (element.index === index ){

               
                // element.text = text;
                // checkBool = true;
              
            // dataArray.splice(index,1)
           items = dataArray.filter(item =>item.index != index)
                arr[index] = ''
            console.log('remove field array ', this.state.inputData);
            console.log('remove field arrayitems ', items);
              }

            });
            console.log('remove field Values ', arr);
            console.log('After remove field Values ', items);
            this.setState({
              inputData: items,

              textInputValues: arr
            });
          
            
          }
          if(index != 0){
            this.inputs[index - 1].focus();
          }
        }

        addValues = (text, index) => {
              console.log(text);
              let name = text.replace(/\s/g, '');
               this.inputs[0].value = "R";
          console.log("value ", this.inputs[0].value);
              this.setState({
                value: text,
            });
            this.setState(
              {
                result: text.replace(/\s/g, ''),
                
            });
              let dataArray = this.state.inputData;
              let checkBool = false;
              console.log("DataArray ", dataArray);
              if (dataArray.length !== 0){
                dataArray.forEach(element => {
                  console.log("element ",element);
                  if (element.index === index ){
                    element.text = text
                    checkBool = true;
          
                  }
                });
              }
              console.log("DataArray ", dataArray);
              if (checkBool){
              this.setState({
                inputData: dataArray
              });
              
            
              // this.secondTextInput.focus();

            }
          
            else {
              console.log("else")
          
              //  if(text == ' '){
              //   return;
              // }
              var arr = this.state.textInputValues;
              console.log("Arr ", arr);
              
              // for(var j = 0, l = arr.length; j < l; j++)
              // {
              // arr.push('');
                
              // }
              console.log("After")
              text = text.replace(/\s/g, '')
              arr[index] = text;
              if(text==''){
                return;
              }

              dataArray.push({'text':text,'index':index});
              // var arr = []
              // dataArray.map((text, index) => {
              //   arr.push(text);
              // })
            //   for(var j = 0, l = this.state.inputArray.length; j < l; i++)
            // {
            // arr.push('');
              
            // }
            //   for (var i = 0, l = dataArray.length; i < l; i++) {
            //     var obj = dataArray[i];
            //     arr.push(obj.text);
            //     // ...
            // }
            // for(var j = 0, l = dataArray.length; j < l; i++)
            // {
            //   var obj = dataArray[j];
            //   if(obj.index == j){
            //     arr.replace(objc.element,j);
            //   }

              
            // }
            

            console.log("DataArray ", dataArray);
              console.log("arrnssn ", arr);
              // this.setState({
              //   inputData: dataArray,
              //   inputArray: arr,
              //   textInput: []
                
              // },() =>{
              //   this.prepareTextBox();
              // });
              this.setState({
                inputData: dataArray,
                inputArray: arr,
                textInput: [],
                textInputValues:arr,


                
              });
          
              
             
            }
            // if(text == ''){
            //   this.focusPreviousField(index);
            // } https://www.google.com/search?ei=ExHeXoDFCfeC4-EPu7uW6A0&q=main+value+state+for+dynamically+created+textinput&oq=main+value+state+for+dynamically+created+textinput&gs_lcp=CgZwc3ktYWIQAzoECAAQR1C42whYsfQIYO73CGgAcAR4AIABmQGIAd4KkgEEMC4xMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjAmqrA__HpAhV3wTgGHbudBd0Q4dUDCAw&uact=5
            console.log("index " +index);
            console.log("arr count " +this.state.inputArray.length);

        
            if(index != this.state.texInputs.length - 1){
              this.inputs[index + 1].focus()
            }

            // this.inputs[index].focus();
            console.log("Log " +this.state.inputData);
          
            }
  render(){
    var arr = [1, 2, 3]
    console.log("Render");
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ height: 500, width: 500, backgroundColor: 'red'}}>
          <Text style={{fontSize: 50, fontWeight:'bold'}}>A B C D E F G H I J K L M N O P Q R S</Text>
         <FlatList style={{
           backgroundColor: 'green',
           paddingLeft: 40,
       
           height: 10
          
          
         }}
         data = {this.state.texInputs}
         horizontal={true}
         renderItem ={({ item, index}) =>{
          return(

            <View style={{
              backgroundColor: 'white',
              margin: 20,
              height: 50,
              width: 50
              // flex: 1,
              // flexDirection: 'row',
              // justifyContent:'center',
              // alignItems: 'center'
            }}>
              <TextInput style={{
                flex: 1,
                backgroundColor: 'white',
                // borderWidth: 5,
               borderBottomWidth:5,
               textAlign :'center'

               
              }}
              ref = {(input)=>(this.inputs[index] = input)}
              maxLength = {1}
              
            
               value = {this.state.textInputValues[index]}
               onKeyPress={({nativeEvent}) => {
          nativeEvent.key === 'Backspace'
            ? this.focusPreviousField(index)
            : this.addValues(nativeEvent.key, index);
        }}
              // onChangeText = {
              //   (value)  =>{

                
              //   }
              // }
              ></TextInput>
            </View>
          );

         }}
         ></FlatList>
        </View>
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}></Button> */}
        {/* <Button onPress={() => navigation.push('Details')}>Click</Button> */}
        

      </View>
    );

  }

   
  }
// class HomeScreen extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       textInput: [],
//       inputData: [],
//       inputArray: [],
//       value: [],
//       result: '',
//       textInputValues: [],
//       texInputs: [1],
//     }
//     this.inputs = {};

//   }
// componentDidMount(){
//   var array = [1,2, 3];
//     this.setState({inputArray: array});
    
//   var s = ["a", "b", "c", "d"]
//   let dict = {}
//   var arrs = []
//   var s = []
//   this.setState({result: 'P'})
//   for (let i = 0; i< array.length; i++){
//     // this.inputArray.push[''];
//     dict[i] = 'A';
//     // s.push('');
//     // arr.push(i)
//     // this.addTextInput(i)

  
  
//   }
  
//   this.setState({texInputs: array});
  
  
//   let textInputss = [...this.state.texInputs];
//   console.log("TextInputsssss ",textInputss);
  
//   this.setTextInputValue();
//   // arrs.push(dict);
//   // // this.setState({
//   // //   value: arrs,
//   // // })
//   // console.log("arrs ", arrs);
//   // let result = arrs.map((sum) =>{
//   //   let s = sum[0]
//   //   console.log('SBBS ', s);
//   //   return s;
//   // })
//   // let a = 'NN'
  
  
//   // console.log("aresultrrs ", result);

// }


// addRef(inpu, index){
// let a = `TextField${index}`;
// this.inputs[index] = inpu
// console.log(a);
// a = inpu;
// console.log("INPUT TEXT " +a);
// // return a
// }
// // addRef(index){
// //   let a = `TextField${index}`;
// //   console.log(a);
// //   // a = inpu;
// //   console.log("INPUT TEXT " +a);
// //   return a
// //   }


//   focusText(index){
//     index = 2;
//     let a = `TextField${index}`;
//     a.focus();
//   }
//   focusPreviousField(index){
//     console.log("Previosu field")
//     console.log('Previuos field array ', dataArray);
//     let dataArray = this.state.inputData;
    
//   //  this.setState({
//   //    value[index] : "HH"
//   //  })
//     if (dataArray.length !== 0){
//       dataArray.forEach(element => {
//         console.log(element);
//         if (element.index === index ){
         
//           // element.text = text;
//           // checkBool = true;
        
//       dataArray.splice(index,1)
//       console.log('remove field array ', this.state.inputData);
//         }
//       });
//       this.setState({
//         inputData: dataArray
//       });
    
      
//     }
//     if(index != 0){
//       this.inputs[index - 1].focus();
//     }
//   }
//   setTextInputValue(){
//     let textInputValues = [...this.state.textInputValues];
//   console.log("setTextInputValue");
//   let textInputss = this.state.texInputs;
//   console.log("TextInputs ",textInputss);
//      this.state.texInputs.map((value) => {
   
//       textInputValues = [...textInputValues, ''];
//       this.setState({textInputValues}, () => {
//           this.prepareTextBox();
//       })
//     })
    
//   }
//   prepareTextBox() {
//     console.log("prepareTextBox");
// let textInput = [...this.state.textInput];
// this.state.texInputs.map((value, index) => {
//   textInput.push(<TextInput style={styles.textInput} ref = {(input)=>this.inputs[index] = input}
//       key={index}

//     autoCorrect={false}
//     maxLength={1} 
//     value = {this.state.inputArray[index]}
//     // value = {this.state.result}
  
//     // onChangeText ={(s) => this.setState({result: text})}
//       onKeyPress={({nativeEvent}) => {
//         nativeEvent.key === 'Backspace'
//           ? this.focusPreviousField(index)
//           : this.addValues(nativeEvent.key, index);
//       }}
//     />
//     )
//   })
//     // onChangeText={this.focusText});
//   this.setState({ textInput });


//   }
//   //function to add TextInput dynamically
//   addTextInput = (index) => {

//     let textInput = this.state.textInput;
//     // textInput.push(<TextInput style={styles.textInput} ref = {(input)=>this.addRef(input, index)}
//     textInput.push(<TextInput style={styles.textInput} ref = {(input)=>this.inputs[index] = input}
//     key={index}
//       // onChangeText={(text) => this.setState({
//       //   value : text.replace(/\s/g, "")
//       // })} 
//       // value = {this.state.value}
//         // value={this.state.valuesTextInput[index]}
//       // value = {this.state.value.map((result) => {
//       //     return 'A';
//       // })}
//       // value = 'A'
//       // value={this.state.result}
   
//       autoCorrect={false}
//       maxLength={1}
//       value = {this.state.inputArray[index]}
    
//       // onChangeText ={(s) => this.setState({result: text})}
//         onKeyPress={({nativeEvent}) => {
//           nativeEvent.key === 'Backspace'
//             ? this.focusPreviousField(index)
//             : this.addValues(nativeEvent.key, index);
//         }}
//       />
//       )
//       // onChangeText={this.focusText});
//     this.setState({ textInput });

//   }

  

//   //function to add text from TextInputs into single array
//   addValues = (text, index) => {
//     console.log(text);
//     let name = text.replace(/\s/g, '');
//      this.inputs[0].value = "R";
// console.log("value ", this.inputs[0].value);
//     this.setState({
//       value: text,
//   });
//   this.setState(
//     {
//       result: text.replace(/\s/g, ''),
      
//   });
//     let dataArray = this.state.inputData;
//     let checkBool = false;
//     if (dataArray.length !== 0){
//       dataArray.forEach(element => {
//         console.log("element ",element);
//         if (element.index === index ){
//           element.text = text
//           checkBool = true;

//         }
//       });
//     }
//     if (checkBool){
//     this.setState({
//       inputData: dataArray
//     });
    
//     console.log(this.state.dataArray);
//     // this.secondTextInput.focus();
//   }

//   else {

//     //  if(text == ' '){
//     //   text = ''
//     // }
//     text = text.replace(/\s/g, '')
//     dataArray.push({'text':text,'index':index});
//     var arr = []
//     // dataArray.map((text, index) => {
//     //   arr.push(text);
//     // })
//     for (var i = 0, l = dataArray.length; i < l; i++) {
//       var obj = dataArray[i];
//       arr.push(obj.text);
//       // ...
//   }
    
//     console.log("arrnssn ", arr);
//     // this.setState({
//     //   inputData: dataArray,
//     //   inputArray: arr,
//     //   textInput: []
      
//     // },() =>{
//     //   this.prepareTextBox();
//     // });
//     this.setState({
//       inputData: dataArray,
//       inputArray: arr,
//       textInput: []
      
//     },() =>{
//       this.prepareTextBox();
//     });

    
   
//   }
//   // if(text == ''){
//   //   this.focusPreviousField(index);
//   // } https://www.google.com/search?ei=ExHeXoDFCfeC4-EPu7uW6A0&q=main+value+state+for+dynamically+created+textinput&oq=main+value+state+for+dynamically+created+textinput&gs_lcp=CgZwc3ktYWIQAzoECAAQR1C42whYsfQIYO73CGgAcAR4AIABmQGIAd4KkgEEMC4xMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjAmqrA__HpAhV3wTgGHbudBd0Q4dUDCAw&uact=5
//   console.log("index " +index);
//   console.log("arr count " +this.state.inputArray.length);

//   if(index != this.state.inputArray.length - 1){
//     this.inputs[2].focus()
//   }
//   // this.inputs[index].focus();
//   console.log("Log " +this.state.inputData);

//   }

//   //function to console the output
//   getValues = () => {
//     console.log("Render")
//     let dataA = this.state.inputData;
//     console.log('Data ', dataA);
//   }


//   render(){
//     this.getValues();
//     return (
//       <View style={{
//         // backgroundColor: 'green',
//         flex:1,
//         // alignContent: 'center',
//         // justifyContent: 'center',
        
//       }}>
        
//         <View style={{
//           // flex:1,
//           flexDirection:'row',
//           backgroundColor: 'red',
//           // width: 1000,
//           // flex:1,
//           height: 50,
//           // alignSelf:'stretch',
//           justifyContent: 'space-around',
//           margin: 30,
//           // top: 100

//           // alignContent
//           // width: 300
        
//         }}>
   
// {/* <TextInput style={styles.textInput} 
//       // onChangeText={(text) => this.setState({
//       //   value : text.replace(/\s/g, "")
//       // })} 
//       // value = {this.state.value}
        
//       // value = {this.state.value.map((result) => {
//       //     return 'A';
//       // })}
//       // value = 'A'
//       value={ this.han}
   
//       autoCorrect={false}
//       maxLength={1}
    
//       onChangeText ={(s) => this.setState({result: 'N'})}
        
//       /> */}

//         {/* {this.state.textInput.map((value) => {
//           return value
//         })} */}
//         {this.state.textInput}
//         {/* <TextInput
//     placeholder="FirstTextInput"
//     returnKeyType="next"
//     onSubmitEditing={() => { this.secondTextInput.focus(); }}
//     blurOnSubmit={false}
// />

// <TextInput
//     ref={(input) => { this.secondTextInput = input; }}
//     placeholder="secondTextInput"
// /> */}


//         </View>
//         <Button title="Add" onPress={this.getValues} />
//         {/* <Button title='Get Values' onPress={() => this.getValues()} /> */}
//       </View>
//     )
//   }
//   han = () => {
//     console.log("KKKk")
//   //  let n =  this.state.value.map((result) => {
//   //     return 'A';
//   // })
//   return 'A';
 
//   }
// }

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

// export default HomeScreen;
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ImagePickers">
          {/* <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen> */}
          <Stack.Screen name="ImagePickers" component={ImagePickers} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
// export default App;
