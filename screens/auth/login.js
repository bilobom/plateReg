import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {ImageLoader} from '../intro'
import {connect} from 'react-redux'
import  {loginUser} from '../../redux/actionCreators'
import SnackBar from 'react-native-snackbar'
import {Button } from 'react-native-elements'


const { width, height } = Dimensions.get("window");
const background = require("../assets/authBk.jpg");
const mark = require("../assets/loginHeader.png");
const lockIcon = require("../assets/login1_lock.png");
const personIcon = require("../assets/login1_person.png");

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            usernameError:'',
            passwordError:'',
            loadingSignIn:false,
            iconLogin:'touch-app'
        }
        this.handelUsername=this.handelUsername.bind(this)
    }
    
    static navigationOptions={
        header: null
    }
    onSignupPressed=()=>{
        this.props.navigation.navigate('signup')
    }
    signInPressed=()=>{
        console.log(this.state.username+ this.state.password)
        this.setState({loadingSignIn:true})
        this.props.loginUser(this.state.username,this.state.password)
        //TODO: 
        
    }
    componentWillReceiveProps(nextProps){
        //loginStatus
        if(nextProps.user.loginError){
            SnackBar.show({
                title:nextProps.user.loginError
            })
        }else if(nextProps.user.token){
            this.setState({iconLogin:'done'})
            SnackBar.show({
                title:"Connection reussite :)"
            })
            this.props.navigation.navigate('phoneAuth')
        }
        
    }
    handelUsername=(username)=>{
        if(username.includes(' ')) {
            this.setState({usernameError:"L'space est interdit"})
        }
        else{
            this.setState({usernameError:""})
            this.setState({username:username})
        }
    }
    handelPassword=(password)=>{
        //this.setState({usernameError:""})
        this.setState({password})
    }

    render() {
        return (
        <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,.1)'}/>
            <ImageBackground source={background} style={styles.background} resizeMode="cover">
            <View style={styles.markWrap}>
                <ImageLoader source={mark} style={styles.mark} resizeMode="contain" />
            </View>
            <KeyboardAvoidingView style={styles.wrapper} behavior='padding' enabled>
                <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                    <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                </View>
                <TextInput 
                    ref={ref=>this.usernameInput= ref}
                    placeholder="Nom d'utilisateur" 
                    placeholderTextColor="#FFF"
                    style={styles.input} 
                    value={this.state.username}
                    onChangeText={this.handelUsername}
                />

                </View>
                <View style={{paddingLeft:50}}>
                    <Text style={{color:"#A5000D"}}>{this.state.usernameError}</Text>
                </View>
                <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                    <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                </View>
                    <TextInput 
                        placeholderTextColor="#FFF"
                        placeholder="Mot de Pass" 
                        style={styles.input} 
                        value={this.state.password}
                        onChangeText={this.handelPassword}
                        secureTextEntry 
                    />
                </View>
                <View style={{paddingLeft:50}}>
                    <Text style={{color:"#A5000D"}}>{this.state.passwordError}</Text>
                </View>
                <TouchableOpacity activeOpacity={.5}>
                    <View>
                        <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} /*onPress={this.signInPressed}*/>
                    <View style={{paddingTop:15}} >
                        <Button 
                            title='Se Connecter'
                            rightIcon={{name: this.state.iconLogin}}
                            backgroundColor='#A5000D'
                            loading={this.state.loadingSignIn}
                            onPress={this.signInPressed}
                            rounded
                            large
                        />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <View style={styles.container}>
                <View style={styles.signupWrap}>
                <Text style={styles.accountText}>Vous n'avez pas de compte?</Text>
                <TouchableOpacity activeOpacity={.5} onPress={this.onSignupPressed}>
                    <View>
                    <Text pointerEvents="none" style={styles.signupLinkText}>Inscription</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 2,
    paddingVertical: 50,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize:18,
    color:'white'
  },
  button: {
    backgroundColor: "#A5000D",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    paddingVertical:20,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize:16,
  }
});
const mapStateToProps= state=>({
    user: state.user
})

export default connect(mapStateToProps, {loginUser})(LoginScreen)