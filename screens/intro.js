import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-native-spinkit'
import  {View, StyleSheet, Image, StatusBar,Animated} from 'react-native'

export class ImageLoader extends React.Component {
  state={
    opacity: new Animated.Value(0)
  }
  onLoad=()=>{
    Animated.timing(this.state.opacity,{
      toValue:1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }
  render () {
    return(
      <Animated.Image
      onLoad= {this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform:[
            {
              scale: this.state.opacity.interpolate({
                inputRange:[0, 1],
                outputRange:[0.40, 1],

              })
            }
          ]
        },
        this.props.style,
      ]}
      />
    )
  }
}

class Intro extends React.Component {
  static navigationOptions={
    header: null
  }
  componentDidMount(){
    setInterval(()=>this.props.navigation.navigate("walkthrough"), 3000);
  }
  render () {
    return(
      <View style={styles.container} >
        <StatusBar
        translucent={true}
        backgroundColor={'rgba(52, 52, 52, 0.3)'} />
        <ImageLoader style={styles.logo} source={logo} />
        <Spinner style={styles.spinner} isVisible={true} size={100} type={'9CubeGrid'} color={'white'}/>
      </View>
    );
  }
}
const logo= require('./assets/sofcleflien.png')
const styles= StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#A5000D',
  },
  logo:{
    width: 400,
    height: 200
  },
  spinner: {

  }
})
export default Intro;
