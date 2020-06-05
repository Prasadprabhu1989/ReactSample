import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Voice from '@react-native-community/voice';
import Button from './Common/Button';

export default class VoiceButton extends React.Component{
    

    constructor(props){
        super(props);
        state = {
            isRecord: false,
            voice: undefined,
            
        };
        Voice.onSpeechStart = this._onSpeechStart;
        Voice.onSpeechEnd = this._onSpeechEnd;
        Voice.onSpeechResults = this._onSpeechResults;
        Voice.onSpeechError = this._onSpeechError;
       

    }
    
   
    render(){
        const {isRecord, voice} = this.state;
        const buttonLabel = isRecord ? 'Stop' : 'Start';
        const voiceLabel = voice ? voice : isRecord ? 'Say Something' : 'press Start Button';
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5fc'
            }}>
                <Text>{voiceLabel}</Text>
                <Button></Button>
            </View>
        );

    }
}