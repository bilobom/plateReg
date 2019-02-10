import React, { Component } from 'react'
import BusyIndicator from 'react-native-busy-indicator'
import loaderHandler from 'react-native-busy-indicator/LoaderHandler'
import { View,StyleSheet,StatusBar } from 'react-native'
import { FormInput,Avatar,FormLabel,FormValidationMessage ,Button} from 'react-native-elements'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import {upadateUserUID} from '../../redux/actionCreators'

export class second extends Component {
    static navigationOptions={
        header: null
    }
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
        codeInput: '',
        };
    }
    componentDidMount(){
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                //console.log("1"+user.toJSON().uid)
                let {uid} = {...user.toJSON()}
                this.props.upadateUserUID(uid);
                loaderHandler.hideLoader();
                this.props.navigation.navigate('myreg')
            } else {
            // User has been signed out, reset the state
            this.setState({
                codeInput: '',
            });
            }
        });
    }
    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }
    handelCodeVerification=(value)=>{
        this.setState({codeInput:value})
    }
    confirmCode = () => {
        loaderHandler.showLoader("Chargement...");
        const { codeInput } = this.state;
        const confirmResult = this.props.navigation.getParam('confirmResult')
        if (confirmResult && codeInput.length) {
        confirmResult.confirm(codeInput)
            .then((user) => {
                //console.log("2"+user.toJSON().uid)
                let {uid} = user.toJSON()
                this.props.upadateUserUID(uid);
                loaderHandler.hideLoader();
                this.props.navigation.navigate('myreg')
            })
            .catch(error => {
                alert(error.message)
                loaderHandler.hideLoader();
            });
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar  translucent={true} backgroundColor={'rgba(165, 0, 13, 1)'}/>
                <View style={styles.phoneInputField}>
                    <FormLabel labelStyle={{fontSize:30}}>Entrez le code de vérification</FormLabel>
                    <FormInput
                        ref={input=>(this.input = input)}
                        textAlign={'center'}
                        inputStyle={{fontSize:35}}
                        containerStyle={{paddingTop:30}}
                        onChangeText={this.handelCodeVerification}
                        value={this.state.codeInput}
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
                        onPress={this.confirmCode}
                    />
                </View>
                <BusyIndicator/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  upadateUserUID,
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
    
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

export default connect(mapStateToProps, mapDispatchToProps)(second)
