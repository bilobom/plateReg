import React from 'react'
import {FormLabel, FormInput, FormValidationMessage, Divider,Button } from 'react-native-elements'
import {View,StyleSheet,StatusBar,KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {ImageLoader} from './intro'
import { copilot, CopilotStep } from '@okgrow/react-native-copilot';
import {connect} from 'react-redux'
import {updateWizardBeenShown,updateCertN,updateLicenseN} from '../redux/actionCreators'

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
    loading:false,
    loadingSave:false,
  }
  handleLicensePlate=(licenseN)=>{
    console.log("licenseN: "+licenseN.length)
    if (isNaN(licenseN) /*&& !licenseN.includes('-')*/) {
      this.setState({plateError : "Le Numero doit étre composeé uniquement des numeros "});
      return;
      /*this.PlateInput.shake()*/
    }else if ( licenseN.length < 10 || licenseN.length >= 11) {
      this.setState({plateError : "Le Numero doit étre à 10 chiffre"});
      this.props.updateLicenseN(licenseN)
      return;
    }else{
      this.setState({plateError : ""})
      this.props.updateLicenseN(licenseN)
      if (licenseN.length == 10) {
        /*this.certInput.focus();*/
      }
    }
  }
  handleCertificate=(certN)=>{
    console.log("licenseN: "+certN)
    if (isNaN(certN) /*&& !certN.includes('-')*/) {
      this.setState({certError : "Ce Numero doit etre composeé uniquement des numeros "});
      return;
      /*this.certInput.shake();*/
    }else if ( certN.length < 11 || certN.length >= 12) {
      this.setState({certError : "Le Numero doit etre 11 chiffre"});
      this.props.updateCertN(certN)
      return;
    }else{
      this.props.updateCertN(certN)
      this.setState({ certError : ""})
    }
  }
  handelSubmit=()=>{
    this.setState({loading: true});
    //console.log("submitting");
    this.handelSave(true)
     //licenseN,certN,model
  }
  handelSave=(fromSubmit)=>{
    //console.warn('saving...'+ JSON.stringify(this.state));
    if(!fromSubmit) this.setState({loadingSave:true})
    //TODO show dialog
    this.props.navigation.navigate('modelPicker')
  }
  componentDidMount(){
    if(!this.props.ui.shownWizard) {
      //this.props.updateWizardBeenShown(true)      
      this.props.start();
    }
    this.props.copilotEvents.on('stop', () => {
      this.props.updateWizardBeenShown(true)
    });
  }
  componentWillUnmount() {
    this.props.copilotEvents.off('stop');
    //this.props.stop();
  }
  
  render () {
    return(
      <View style={styles.container}>
        <StatusBar translucent={true}
          backgroundColor='#A5000D'
        />
        <ImageLoader source={require('./assets/infoCard2.png')} style={styles.headerImage}/>
          <View style={styles.formConatiner} >
            <FormLabel labelStyle={{fontSize:20}}>Numéro d'immatriculation</FormLabel>
              <CopilotStep text="Entrez Le Numero d'immatriculation de votre client" order={1} name="licenseN">
                <CopilotFormInput
                 inputStyle={styles.textStyle}
                 keyboardType='numeric'
                 value={this.props.tempPlate.licenseN}
                 onChangeText={this.handleLicensePlate}/>
               </CopilotStep>
              <FormValidationMessage>{this.state.plateError}</FormValidationMessage>
            <FormLabel  labelStyle={{fontSize:20}}>Numéro de Certificat</FormLabel>
            <CopilotStep text="Le numéro apparait sur la carte grise" order={2} name="certN">
              <CopilotFormInput
                inputStyle={styles.textStyle}
                keyboardType='numeric'
               value={this.props.tempPlate.certN}
               onChangeText={this.handleCertificate.bind(this)}/>
            </CopilotStep>

             <FormValidationMessage>{this.state.certError}</FormValidationMessage>
             <Divider style={{ backgroundColor: 'blue' , height:15}} />
             <View style={styles.submitButton}>
              <TouchableOpacity  activeOpacity={0.6} onPress={() => this.handelSubmit()}>
                <CopilotStep text="Valider Votre Requete Maintenant" order={3} name="submit">
                  <CopilotButton title="Valider"
                    onPress={() => this.handelSubmit()}
                    loading={this.state.loading}
                    rightIcon={{name: 'code'}}
                    rounded={true}
                    backgroundColor='#A5000D'
                      />
                </CopilotStep> 
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} onPress={() => this.handelSubmit()}>
                <CopilotStep text="Ou bien Syncronizez quant vous serez connecté" order={4} name="save">
                  <CopilotButton 
                    title="Sauveguarder"
                    onPress={()=> this.handelSave()}
                    rightIcon={{name: 'save'}}
                    backgroundColor='#A5000D'
                    loading={this.state.loadingSave}
                      rounded/>
                </CopilotStep>
              </TouchableOpacity>
               

              </View>
          </View>
          <View style={{flex:1}}>
          </View>
          
      </View>
    )
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:StatusBar.currentHeight,
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
const mapActionsToprops={
  updateWizardBeenShown,
  updateLicenseN,
  updateCertN,
}

export default connect(mapStateToProps,mapActionsToprops )(InnerComp)
