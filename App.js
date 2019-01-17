import React from 'react'
import store from './redux/store'
import {Provider} from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation";
import walkthrough from './screens/walkthrough'
import qrScanner from './screens/qrScanner'
import phoneAuh from './screens/phoneAuth'
import myreg from './screens/registration'
import intro from './screens/intro'
import licensePlateInfo from './screens/licensePlateInfo'

const AppNavigator = createStackNavigator(
  {
    intro : intro,
    walkthrough: walkthrough,
    qrScanner: qrScanner,
    phoneAuh : phoneAuh,
    myreg:  myreg,
    licensePlateInfo: licensePlateInfo

  },
  {
    initialRouteName: "qrScanner"

  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
        <Provider store={store}>
          <AppContainer />
        </Provider>
      )
  }
}
