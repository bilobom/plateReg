import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RNPickerSelect from 'react-native-picker-select'
import { connect } from 'react-redux'
import { Text, View, StatusBar, TouchableOpacity,StyleSheet } from 'react-native'
import { Avatar} from 'react-native-elements'
import { updateModel,updateSuccessPlate, updatePlates,updateCarModelList } from '../redux/actionCreators'
import Dialog from './dialog'

export class modelPicker extends Component {
    static navigationOptions = {
        header: null,
    }
    static propTypes = {
        prop: PropTypes
    }
    state = {
        isDiagVisible:false,
        data:{title:'Autre Marque', discription:'Tappez Le Nom de la marque ici'},
        loadingValider:false,
    }
    _onValueChange = (value) => {
        if(!value){
            alert('SVP selectionez la marque')
        }
        else{
            this.props.updateModel(value);
        }
    }
    validation=()=>{
        console.log("entered validation")
        this.props.updatePlates()
    }
    diagOkPressed=(inputValue)=>{
        if (!inputValue) {
            alert('SVP tappez la marque')
        }
        else {
            this.props.updateModel(inputValue);
            this.setState({isDiagVisible:false})
        }
        
    }
    addBrand=()=>{
        this.setState({isDiagVisible:true})
        
    }
    diagCancelPressed=()=>{
        this.setState({isDiagVisible:false})
    }
    componentWillReceiveProps(nextProps){
        // TODO: SHow Dialog accordingly
        if (nextProps.tempPlate.plateSucess) {
          // TODO: show a succes diag
          console.log('palte success')
          this.props.navigation.navigate('myreg');
          this.props.updateSuccessPlate(false)
        }
      }
    componentDidMount(){
    }
    render() {
        
        return <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="rgba(255,255,255,0.1)" />
            <Dialog 
                visible={this.state.isDiagVisible}
                {...this.state.data} 
                diagOk={this.diagOkPressed}
                diagCancel={this.diagCancelPressed}/>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Quelle marque ?</Text>
            </View>
            <View style={styles.selecterContaier}>
              <RNPickerSelect 
                 placeholder={{ label: "Sélectionnez une marque...", value: null}} 
                 items={this.props.carModel}
                 onValueChange={this._onValueChange.bind(this)} 
                 value={this.props.tempPlate.model} />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity>
              <Avatar
                    large
                    rounded
                    overlayContainerStyle={{backgroundColor: '#A5000D'}}
                    icon={{name: 'arrow-forward' }}  
                    activeOpacity={0.7}
                    onPress={this.validation.bind(this)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerHolder}>
                <Avatar
                    rounded
                    overlayContainerStyle={{backgroundColor: '#A5000D'}}
                    icon={{name: 'add' }}  
                    activeOpacity={0.7}
                    onPress={this.addBrand}
                />
                    <Text style={styles.footerText}> non inclus? </Text>
                </View>
            </View>
            
            
          </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'#C5C5C5',
    },
    textContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    selecterContaier:{
        flex:2,
        justifyContent:'center'
    },
    buttonContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footerContainer:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-start',
    },
    footerHolder:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    footerText:{
        fontSize:22,
    },
    textHeader:{
        fontSize:25,
        fontWeight:'bold',
    },

})
const mapStateToProps = (state) => ({
    tempPlate: state.tempPlate,
    carModel: state.carModel
})

const mapDispatchToProps = {
    updateModel,
    updatePlates,
    updateCarModelList,
    updateSuccessPlate,
}
export default connect(mapStateToProps, mapDispatchToProps)(modelPicker)
