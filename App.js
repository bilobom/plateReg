import React from 'react'
import store , {persistor}from './redux/store'
import Spinner from 'react-native-spinkit'
import  {View, StyleSheet, StatusBar,Image} from 'react-native'
import {Provider} from 'react-redux'
import { createStackNavigator,createSwitchNavigator, createAppContainer } from "react-navigation";
import walkthrough from './screens/walkthrough'
import qrScanner from './screens/qrScanner'
import first from './screens/phoneAuth/first'
import second from './screens/phoneAuth/second'
import myreg from './screens/registration'
import intro from './screens/intro'
import licensePlateInfo from './screens/licensePlateInfo'
import addPlate from './screens/addPlate'
import login from './screens/auth/login'
import signup from './screens/auth/signup'
import modelPicker from './screens/modelPicker'
import ocr from './screens/ocr/textDetector'
import { PersistGate } from 'redux-persist/integration/react'

const auth= createStackNavigator({ 
  login:login,
  signup:signup,
  
},
 {
   initialRouteName:'login'
  }
)
const phoneAuth=createStackNavigator({
  first:first,
  second:second,
},
{
  initialRouteName:'first'
 }
)

const AuthStack=createSwitchNavigator({
  phoneAuth : phoneAuth,
  auth: auth,
},
{
  initialRouteName:'auth'
})

const AppStack = createStackNavigator(
  {
    qrScanner: qrScanner,
    myreg:  myreg,
    licensePlateInfo: licensePlateInfo,
    modelPicker:modelPicker,
    addPlate: addPlate,
    
  },
  {
    initialRouteName: "myreg"

  }
);

const AppContainer = createAppContainer(createSwitchNavigator({
  AppStack:AppStack,
  AuthStack:AuthStack,
  intro : intro,
  walkthrough: walkthrough,
  ocr:ocr,
  
  
},
  {
    initialRouteName: 'ocr',
  }
));

export default class App extends React.Component{
  render(){
    return(
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
          <AppContainer />
          </PersistGate>
        </Provider>
      )
  }
}

const Loading= ()=>(
  <View style={styles.container} >
    <StatusBar
    translucent={true}
    backgroundColor={'rgba(52, 52, 52, 0.3)'} />
    <Image style={styles.logo} source={logo} />
    <Spinner style={styles.spinner} isVisible={true} size={100} type={'9CubeGrid'} color={'white'}/>
  </View>
)

const logo= require('./screens/assets/sofcleflien.png')
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
