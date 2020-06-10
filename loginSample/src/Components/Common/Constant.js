
import {StyleSheet} from 'react-native';
export const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const USER_URL = `${BASE_URL}users`;

export const PHOTO_URL = `${BASE_URL}photos`;
export const TODO_URL = `${BASE_URL}todos`;


export const firstViewStyles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'green'
    }
})
export const secondViewStyles = StyleSheet.create({
    sampleContainer :{
        backgroundColor: firstViewStyles.headerContainer.backgroundColor,
    }
})