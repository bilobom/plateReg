import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet,StatusBar } from 'react-native';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux'

const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

class PhoneAuthTest extends Component {
  static navigationOptions={
    header: null
  }
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+213',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+213',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  

  

  signOut = () => {
    firebase.auth().signOut();
  }

  

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;
    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 60, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor={'rgba(255,255,255,0.2)'}/>
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
            <Button title="begin" color="green" onPress={this.props.navigation.navigate('qrScanner')} />
          </View>
        )}
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,

  },
  phoneInputField:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  verifyPhone:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
  },
})
const mapStateToProps=state=>({
  
})
const mapActionsToProps={

}

export default connect(mapStateToProps, mapActionsToProps)(PhoneAuthTest)
