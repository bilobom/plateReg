import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import store from '../redux/store'
import {updateWalkthrough} from '../redux/actionCreators'
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    fontSize:40,
  },
  lastTitle:{
    color:'#A5000D',
    fontSize:50,
  }
});

const slides = [
  {
    key: '1',
    title: 'مرحبا بك على المنصة',
    text: 'تسمح لك هذه المنصة بتسجيل لوحات الترقيم \n الخاصة بزبائنك و الاطلاع على نقاطك.',
    image: require('./assets/carIntro1.png'),
    imageStyle: styles.image,
    backgroundColor: '#A5000D',
  },
  {
    key: '2',
    title: ' تسجيل اللوحات الرقمية في الجزائر',
    text:' تسجيل لوحاتك الرقمية بأسهل الطرق \n و بأعلى مواصفات الأمان و الحماية ',
    image: require('./assets/carIntro3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#019587',
  },
  {
    key: '3',
    title: 'شكرا على ثقتكم',
    titleStyle: styles.lastTitle,
    text:'',
    textStyle:styles.lastText,
    image: require('./assets/sof.jpg'),
    imageStyle: styles.bigImage,
    backgroundColor: '#C2C2C2',
  }
];

export default class walkthough extends React.Component {
    static navigationOptions={
      header: null
    }
  _onDone = () => {
    this.props.navigation.navigate('phoneAuh')
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
    if (store.getState().walkthough) {
      return <walkthrough />;
    } else {
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
}
