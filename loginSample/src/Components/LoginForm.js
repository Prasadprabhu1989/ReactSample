import React, {Component} from 'react';
import { View, TextInput, Text} from 'react-native';
import Button from './Common/Button';
import Card from './Common/Card';
import CardSection from './Common/CardSection';
import Input from './Common/Input';
import firebase from 'firebase';
import Spinner from './Common/Spinner'
class LoginForm extends Component {
    state = {
    email: '',
    password: '',
    loading: false,
    }
    render(){
        return(
            // <View>
            <Card>
                <CardSection>
{/* <TextInput onChangeText={text => this.setState({text: text})} style ={{
    height: 50,
    width: 100}} ></TextInput> */}
    <Input value ={this.state.email} onChangeText={email => this.setState({email})} placeholder='user@gmail.com' isPassword={false}>Email</Input>
                </CardSection>
                <CardSection>
          
                    <Input
                    placeholder="password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    isPassword={true}
                    >Password</Input>
                </CardSection>
                <CardSection>
                {/* <Button onPress={this.onButtonPress.bind(this)}>Login</Button> */}
                {/* <Text>{this.state.email}</Text> */}
                {this.renderButton()}
                </CardSection>
            </Card>
            // </View>
         
        );
    }
    renderButton(){
        if (this.state.loading){
            return (<Spinner size ='small'></Spinner>)
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    //  this.state.loading ? return (<Spinner size ='small'></Spinner>) : (return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    }
    onButtonPress(){
       
        console.log(['Button Onress']);
        const {email, password} = this.state;
     this.setState({
         loading: true
     });
        console.log(this.state.email);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                this.onLoginFail.bind(this)
            ).then(this.onLoginSuccess.bind(this));
        })
        .then(this.onLoginSuccess.bind(this));
    }
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false
        });
    }
    onLoginFail(){
        this.setState({
loading: false
        },() =>{
            alert('login falued');
        });
    }
   
}

export default LoginForm;
