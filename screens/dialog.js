import Dialog from "react-native-dialog";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

export class dialog extends Component {
  
  state={
    inputValue:''
  }
  handelText=(inputValue)=>{
    this.setState({inputValue})
  }
  handelOk=()=>{
    this.props.diagOk(this.state.inputValue)
  }
  componentDidMount(){

  }
  render() {
    const {title, discription}= this.props
    return (
      <View>
        <Dialog.Container visible={this.props.visible}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>
            {discription}
          </Dialog.Description>
          <Dialog.Input value={this.state.inputValue} onChangeText={this.handelText}></Dialog.Input> 
          <Dialog.Button label="OK" onPress={this.handelOk} />
          <Dialog.Button label="Cancel" onPress={this.props.diagCancel} />
        </Dialog.Container>
      </View>
    )
  }
}
export default dialog
