import React, { Component } from 'react'
import { View, StyleSheet,StatusBar } from 'react-native'
import {Avatar, FormInput,FormLabel,FormValidationMessage} from 'react-native-elements'
import BusyIndicator from 'react-native-busy-indicator'
import loaderHandler from 'react-native-busy-indicator/LoaderHandler'

import { connect } from 'react-redux'
import {updatePhoneNumber} from '../../redux/actionCreators'
import firebase from 'react-native-firebase'
export class first extends Component {
  static navigationOptions={
    header: null
  }
  state={

  }
  handelPhoneNumberInput=  phoneNumber=>{
    //console.log(phoneNumber);
    
    if(isNaN(phoneNumber) && ! phoneNumber.toString().includes('+')){
        this.setState({errorMessage:'numéro de téléphone doit être composé uniquement des chiffres'})
    }else if(phoneNumber.length !== 13){
        this.setState({errorMessage:'9 chiffres inclus après +213  eg: +213 660 50x xxx'})
        if(phoneNumber.toString().includes('+213'))this.props.updatePhoneNumber(phoneNumber)
    }
    else{
        this.setState({errorMessage:''})
        this.props.updatePhoneNumber(phoneNumber)
    }
  }
  // loaderHandler.showLoader("Loading"); // Show indicator with message 'Loading'
  // loaderHandler.showLoader("Loading More"); // Show indicator with message 'Loading More'

  // loaderHandler.hideLoader();
  signIn = () => {
    const phoneNumber  = this.props.fireBaseData.phoneNumber;
    if(phoneNumber.length == 13){
        loaderHandler.showLoader("Chargement...");
        this.setState({ message: 'Sending code ...' });

        firebase.auth().signInWithPhoneNumber(phoneNumber)
        .then(confirmResult =>{
            loaderHandler.hideLoader();
            this.props.navigation.navigate('second',{confirmResult:confirmResult})
        })
        .catch(error => {
          loaderHandler.hideLoader();
          alert(error.message)
        }
            
        );
    }else{
        this.input.shake()
    }
    
  };
  componentWillMount(){
    loaderHandler.hideLoader();
    this.props.updatePhoneNumber('+213')
  }
  render() {
    return (
        <View style={styles.container}>
          <BusyIndicator />
          <StatusBar  translucent={true} backgroundColor={'rgba(165, 0, 13, 1)'}/>
          <View style={styles.phoneInputField}>
            <FormLabel labelStyle={{fontSize:30}}>Numero De Telephone</FormLabel>
            <FormInput 
              ref={input=>(this.input = input)}
              textAlign={'center'}
              inputStyle={{fontSize:35}}
              containerStyle={{paddingTop:30}}
              onChangeText={this.handelPhoneNumberInput}
              value={this.props.fireBaseData.phoneNumber}
              keyboardType={'phone-pad'}
              autoFocus
            />
            <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
          </View>
          <View style={styles.verifyPhone}>
            <Avatar
              large
              rounded
              overlayContainerStyle={{backgroundColor: '#A5000D'}}
              icon={{name: 'arrow-forward' ,size:45}}  
              activeOpacity={0.7}
              onPress={this.signIn}
            />
          </View>
          
         
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
  fireBaseData:state.fireBaseData,
})

const mapDispatchToProps = {
    updatePhoneNumber:updatePhoneNumber,
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

export default connect(mapStateToProps, mapDispatchToProps)(first)
