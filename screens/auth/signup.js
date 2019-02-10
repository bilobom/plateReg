import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import {Button } from 'react-native-elements'

const background = require("../assets/authBk.jpg");
const backIcon = require("../assets/back.png");
const personIcon = require("../assets/signup_person.png");
const lockIcon = require("../assets/signup_lock.png");
const emailIcon = require("../assets/signup_email.png");
const birthdayIcon = require("../assets/signup_birthday.png");

export default class SignupVriew extends Component {
    static navigationOptions={
        header:null
    }
    state={
      username:'',
      password:'',
      iconSignup:'navigate-next',
      loadingSignup:false,

    }
    signupPressed=()=>{
      this.setState({loadingSignup:true})
      this.props.navigation.navigate('phoneAuth')
    }
    render() {
      return (
        <View style={styles.container}>
          <ImageBackground 
            source={background} 
            style={[styles.container, styles.bg]}
            resizeMode="cover"
          >
            <View style={styles.headerContainer}>

              <View style={styles.headerIconView}>
                <TouchableOpacity style={styles.headerBackButtonView} onPress={()=>this.props.navigation.goBack()}>
                  <Image 
                    source={backIcon} 
                    style={styles.backButtonIcon} 
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>Inscription</Text>
              </View>

            </View>

            <KeyboardAvoidingView style={styles.inputsContainer} behavior="padding" enabled>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={personIcon}
                    style={styles.inputIcon}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Nom d'utilisateur"
                  placeholderTextColor="#FFF"
                  underlineColorAndroid='transparent' 
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={emailIcon} 
                    style={styles.inputIcon} 
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Email"
                  placeholderTextColor="#FFF" 
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={lockIcon} 
                    style={styles.inputIcon} 
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Mot de Pass"
                  placeholderTextColor="#FFF" 
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={birthdayIcon} 
                    style={styles.inputIcon} 
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="N° de registre Commerce"
                  placeholderTextColor="#FFF"
                  underlineColorAndroid='transparent' 
                />
              </View>

            </KeyboardAvoidingView>

            <View style={styles.footerContainer}>
              <TouchableOpacity>
                <View >
                <Button 
                  title='Inscription'
                  onPress={this.signupPressed}
                  rightIcon={{name: this.state.iconSignup, size:40}}
                  backgroundColor='#A5000D'
                  loading={this.state.loadingSignup}
                  onPress={this.signupPressed}
                  rounded
                  large
                />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>Vous avez déjà un compte?<Text style={styles.whiteFont}> Se connecter
                  </Text></Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
    }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 5,
    marginTop: 50,
  },
  footerContainer: {
    flex: 2
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 30,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
    color:"white"
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#A5000D',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})