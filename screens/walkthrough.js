import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import  {updateWalkthrough} from '../redux/actionCreators'
import {connect} from 'react-redux'
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  bigImage:{
    width: 400,
    height: 200,
  },
  lastText:{
    fontSize:30,
  },
  lastTitle:{
    color:'#A5000D',
    fontSize:40,
    textAlign:'center',
  },
  secondTitle:{
    textAlign:'center',
  }
});

const slides = [
  {
    key: '1',
    title:'Bienvenue sur la plateforme',
    text: "Cette plateforme vous permet d'enregistrer les plaques d'immariculation \n de vos clients et de voir vos points.",
    image: require('./assets/carIntro1.png'),
    imageStyle: styles.image,
    backgroundColor: '#A5000D',
  },
  {
    key: '2',
    title: "Le Premier en Algérie",
    titleStyle:styles.secondTitle,
    text:"Enregistrez votre plaques d'immariculation d'une manière simple \n avec les meilleures fonctionnalités de sécurité et de protection",
    image: require('./assets/carIntro3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#019587',
  },
  {
    key: '3',
    title: "Merci pour votre confiance",
    titleStyle: styles.lastTitle,
    text:"Allons-y -->",
    textStyle:styles.lastText,
    image: require('./assets/sof.jpg'),
    imageStyle: styles.bigImage,
    backgroundColor: '#C2C2C2',
  }
];

class walkthough extends React.Component {
  static navigationOptions={
    header: null
  }
  _onDone = () => {
    this.props.updateWalkthrough(true)
    this.props.navigation.navigate('AuthStack')
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="keyboard-arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="keyboard-arrow-left"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  render() {
    return(
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showPrevButton={true}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton}
      />
    )
  }
}
const mapStateToProps=state=>({
  ui:state.ui,
})
export default connect(null, {updateWalkthrough})(walkthough)