import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-native-spinkit'
import  {View, StyleSheet, StatusBar,Animated} from 'react-native'
import {connect} from 'react-redux'
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
    
    
      if(this.props.ui.walkthroughDone){
        if(!this.props.user.token){
          this.props.navigation.navigate('AuthStack')
          console.log('1')
        }else{
          if(!this.props.fireBaseData.userUID){
            console.log('2:'+this.props.fireBaseData.userUID)
            this.props.navigation.navigate('phoneAuth')
            
          }else{
            console.log('3:'+this.props.fireBaseData.userUID)
            this.props.navigation.navigate('phoneAuth')
            this.props.navigation.navigate('AppStack')
          }
      }
      }else{
        this.props.navigation.navigate('walkthrough')
      }
    

    
  }
  render () {
    //console.log('I am the fucking bug')
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
const mapStateToPops=state=>({
  user:state.user,
  ui:state.ui,
  fireBaseData:state.fireBaseData,
})

export default connect(mapStateToPops)(Intro);
