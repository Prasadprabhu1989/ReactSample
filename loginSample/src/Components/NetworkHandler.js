 
import {StyleSheet} from 'react-native';
  export const getAPiResponse =  (url) => {
      
  return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    })
}
  
export const getData = () =>{
    return new Promise((resolve, reject) => {
        resolve('HI')
    })
}

export const firstViewStyles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'red'
    }
})
export const secondViewStyles = StyleSheet.create({
    sampleContainer :{
        backgroundColor: firstViewStyles.headerContainer.backgroundColor,
    }
})
// checkSignIn = () => {
//     return new Promise((resolve, reject) => {
//     // let userId = '';
//     // try {
//     //   userId = await AsyncStorage.getItem('SignIn');
//     // } catch (error) {
//     //   // Error retrieving data
//     //   console.log(error.message);
//     // }
//     // console.log(userId);
//     AsyncStorage.getItem('SignIn')
//     .then(res =>{
//       if (res !== null) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     })
//     .catch(error => reject(error))
    
//   })
// }