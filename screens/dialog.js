import React, {Component} from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {updateDiagVisibility} from '../redux/actionCreators'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'

const dialog= (props) =>{
  return (
    <View>
      <Dialog
        visible={props.isDialogVisible}
        onTouchOutside={() => {
          props.updateDiagVisibility(false);
        }}
        onDismiss={() => {
          props.updateDiagVisibility(false);
        }}
        >
        <DialogContent>
          <Text style={{fontSize:20}}>{props.text}</Text>
        </DialogContent>
      </Dialog>
    </View>
  );
}
const mapStateToProps =(state)=>({
  isDialogVisible: state.ui.isDialogVisible,
})
export default connect(mapStateToProps, {updateDiagVisibility})(dialog);
