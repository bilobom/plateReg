import React from 'react'
import PropTypes from 'prop-types'
import {FormLabel, FormInput, FormValidationMessage, Divider,Button } from 'react-native-elements'
import {View,Text, StyleSheet,Dimensions,StatusBar,KeyboardAvoidingView} from 'react-native'
import {ImageLoader} from './intro'
import Btn from 'react-native-micro-animated-button';
import { copilot, walkthroughable, CopilotStep } from '@okgrow/react-native-copilot';
import {connect} from 'react-redux'
import {updateWizardBeenShown, updatePlates} from '../redux/actionCreators'
import Dialog from './dialog'
const {SCREEN_WIDTH,SCREEN_HEIGHT} = Dimensions.get('window')


class CopilotButton extends React.Component {
  state={

  }
  render () {
    return(
      <View {...this.props.copilot}><Button {...this.props} /></View>
    )
  }
}
class CopilotFormInput extends React.Component {
  state={

  }
  render () {
    return(
      <View {...this.props.copilot}><FormInput {...this.props} /></View>
    )
  }
}

class addPlate extends React.Component {
  static navigationOptions={
    header: null,
  }
  state={
    plateError:'',
    certError:'',
    certN:'',
    PlateN: null,
    loading:false,
    loadingSave:false,
    model:"",
  }
  handleLicensePlate=(plateN)=>{
    console.log("plateN: "+plateN.length)
    if (isNaN(plateN) /*&& !plateN.includes('-')*/) {
      this.setState({plateError : "Le Numero doit etre composeé uniquement des numeros "});
      return;
      /*this.PlateInput.shake()*/
    }else if ( plateN.length < 10 || plateN.length >= 11) {
      this.setState({plateError : "Le Numero doit etre 10 chiffre"});
      this.setState({plateN})
      return;
    }else{
      this.setState({plateN, plateError : ""})
      if (plateN.length == 10) {
        /*this.certInput.focus();*/
      }
    }
  }
  handleCertificate=(certN)=>{
    console.log("plateN: "+certN)
    if (isNaN(certN) /*&& !certN.includes('-')*/) {
      this.setState({certError : "Ce Numero doit etre composeé uniquement des numeros "});
      return;
      /*this.certInput.shake();*/
    }else if ( certN.length < 11 || certN.length >= 12) {
      this.setState({certError : "Le Numero doit etre 11 chiffre"});
      this.setState({certN})
      return;
    }else{
      this.setState({certN, certError : ""})
    }
  }
  handelSubmit=()=>{
    this.setState({loading: true});
    console.log("submitting");
    this.handelSave(true)
     //licenseN,certN,model
  }
  handelSave=(fromSubmit)=>{
    console.log('saving...');
    this.props.updatePlates(this.state.licenseN, this.state.certN, this.state.model)
    if(!fromSubmit) this.setState({loadingSave:true})
  }
  componentDidMount(){
    if(!this.props.ui.shownWizard) this.props.start();
    this.props.copilotEvents.on('stop', () => {
      this.props.updateWizardBeenShown(true)
    });
  }
  componentWillUnmount() {
    this.props.copilotEvents.off('stop');
    this.props.stop();
  }
  componentWillReceiveProps(nextProps){
    // TODO: SHow Dialog accordingly
    if (nextProps.tempPlate.plateSucess) {
      // TODO: show a succes diag
      this.props.navigation.navigate('myreg');
    }
  }
  render () {
    return(
      <View style={styles.container}>
        <StatusBar translucent={true}
          backgroundColor='rgba(0,0,0,0.1)'
        />
        <ImageLoader source={require('./assets/infoCard2.png')} style={styles.headerImage}/>
          <KeyboardAvoidingView style={styles.formConatiner} behavior='padding' enabled>
            <FormLabel labelStyle={{fontSize:20}}>Numéro d'immatriculation</FormLabel>
              <CopilotStep text="Entrée Le Numero d'immatriculation de votre client" order={1} name="plateN">
                <CopilotFormInput
                 inputStyle={styles.textStyle}
                 keyboardType='numeric'
                 value={this.state.PlateN}
                 onChangeText={this.handleLicensePlate}/>
               </CopilotStep>

              <FormValidationMessage>{this.state.plateError}</FormValidationMessage>


            <FormLabel  labelStyle={{fontSize:20}}>Numéro de Certificat</FormLabel>
            <CopilotStep text="Le numéro apparait sur la carte grise" order={2} name="certN">
              <CopilotFormInput
                inputStyle={styles.textStyle}
                keyboardType='numeric'
               value={this.state.certN}
               onChangeText={this.handleCertificate.bind(this)}/>
            </CopilotStep>

             <FormValidationMessage>{this.state.certError}</FormValidationMessage>
             <Divider style={{ backgroundColor: 'blue' , height:15}} />
             <View style={styles.submitButton}>
               <CopilotStep text="Valider Votre Requete Maintenant" order={3} name="submit">
                 <CopilotButton title="Valider"
                   onPress={this.handelSubmit.bind(this)}
                   loading={this.state.loading}
                   rightIcon={{name: 'code'}}
                   rounded={true}
                   backgroundColor='#A5000D'
                    />
               </CopilotStep>
               <CopilotStep text="Ou bien Syncronizez quant je serais connectée" order={4} name="save">
                 <CopilotButton title="Sauveguarder"
                   onPress={this.handelSave.bind(this)}
                   rightIcon={{name: 'save'}}
                   backgroundColor='#A5000D'
                   loading={this.state.loadingSave}
                    rounded/>
              </CopilotStep>

              </View>
          </KeyboardAvoidingView>
          <View style={{flex:1}}>
          </View>
          <Dialog text={'hi'}/>
      </View>
    )
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  headerImage:{
    flex:4,
    width:400,
    height:200,
    resizeMode:'contain'
  },
  formConatiner:{
    flex:4,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  submitButton:{
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  textStyle:{
    borderBottomWidth:1,
    fontSize:30,
  },
})
const InnerComp= copilot({
  overlay: 'svg', // or 'view'
  animated: true, // or false.
   backdropColor:"rgba(255, 0, 0, 0.4)"
}) (addPlate);
const mapStateToProps= (state) => ({
  ui: state.ui,
  tempPlate:state.tempPlate,

})
export default connect(mapStateToProps, {updateWizardBeenShown, updatePlates})(InnerComp)
