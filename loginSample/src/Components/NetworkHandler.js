 

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