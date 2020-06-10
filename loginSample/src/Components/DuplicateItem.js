import React, { Component } from 'react';
import {Text, TouchableOpacity, View, FlatList, StyleSheet} from 'react-native';
import {getAPiResponse,getData} from './NetworkHandler';
import { PHOTO_URL, secondViewStyles} from './Common/Constant';
import BaseReact from '../BaseClassSample/BaseReact';

export default class DuplicateItem extends BaseReact {

    state = {
        duplicateItems : [],
        items : [1,2,3,1,2,1,3,5,7],
        response: []
    }
    constructor(props){
        super(props);
        console.log('constructor');

        global.selectedItems = [];
        getAPiResponse(PHOTO_URL)
        // .then((response) => [...this.state.items, response])
        .then((response) =>  this.setState({
            response: response,
        }))
        .catch(error => console.log(error));
         getData().then(name => console.log("Name ", name));
    }
    componentWillMount(){
        console.log('componentWillMount');
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
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(){

        return false
    }
    render(){
        super.render()
        console.log('render');
        return(
           
            <View style = {{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <Text>DuplicateItem</Text>
                <Text style ={secondViewStyles.sampleContainer}>HSHSH</Text>
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