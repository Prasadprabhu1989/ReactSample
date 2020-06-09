import React, { Component } from 'react';
import {Text, TouchableOpacity, View, FlatList, StyleSheet} from 'react-native';
import {getAPiResponse,getData} from './NetworkHandler';

export default class DuplicateItem extends Component{

    state = {
        duplicateItems : [],
        items : [1,2,3,1,2,1,3,5,7],
        response: []
    }
    constructor(props){
        super(props);
        global.selectedItems = [];
        getAPiResponse('https://jsonplaceholder.typicode.com/photos')
        .then((response) => this.setState({response: response}))
        .catch(error => console.log(error));
         getData().then(name => console.log("Name ", name));
    }
    checkSignIn = () => {
        return new Promise((resolve, reject) => {
     
        AsyncStorage.getItem('SignIn')
        .then(res =>{
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => reject(error))
        
      })
    }
    render(){
        return(
            <View style = {{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <Text>DuplicateItem</Text>
                <View style={{ height: 500, width: 500, backgroundColor: 'red'}}>
        
         <FlatList style={{
           backgroundColor: 'green',
           paddingLeft: 40,
       
           height: 10
          
          
         }}
         data = {this.state.items}
         horizontal={true}
         renderItem ={({ item, index}) =>{
             let isValid = this.isTextColorNeeded(item)
          return(

            <View style={{
              backgroundColor: 'rgba(52, 52, 52, 0.1)',
              margin: 20,
              height: 100,
              width: 100
            }}>
            <TouchableOpacity style={{
                backgroundColor: 'rgba(52, 52, 52, 0.1)',
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            onPress ={() => this.checkForDuplicate(item)}
            
            >
 {/* <Text style={isValid ? {styles.defaultStateColor} : {styles.selectedItems}}>{item}</Text> */}
                <Text style={this.isTextColorNeeded(item)}>{item}</Text>
            </TouchableOpacity>
              
            </View>
          );

         }}
         ></FlatList>
        </View>
            </View>
        );
    }
    checkForDuplicate(obj){
        let arr = this.state.items;
        let mcm = arr.filter(item =>item == obj)
        let se = [];
        global.selectedItems.map((item) =>{
            se.push(item)
        })
        
        console.log(mcm)
        if (mcm.length > 1){
            // global.selectedItems = mcm;
            mcm.map((item) =>{
                se.push(item)
            })
            global.selectedItems = se;
        }
    

        this.forceUpdate()
      
    }
    isTextColorNeeded = (obj) => {
        let arr = global.selectedItems;
        let mcm = arr.filter(item =>item == obj)
        console.log(mcm)
        var isValid = false;
        if (mcm.length > 1){
            isValid = true;
         
        }
        // global.selectedItems = [];
        if(!isValid){
            return styles.defaultStateColor;
        }
        return styles.SelectedStateColor;

    }
    
}
const styles = StyleSheet.create({
    defaultStateColor: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'orange'
    },
    SelectedStateColor :{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    }
})