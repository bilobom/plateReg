import store from './store'
import {login, addPlate} from '../api'

export const updateDiagVisibility=(isVisible)=>{
  return {type:'UPDATE_DIAG_VISIBILITY', payload: isVisible}
}
export const updatePhoneNumber =(phoneNumber)=>{
  return{
    type: 'UPDATE_PHONE_NUMBER',
    payload: phoneNumber
  }
}
export const updateQrCode =(qrCode)=>{
  return{
    type: 'UPDATE_QR_CODE',
    payload: qrCode
  }
}
export const updateWalkthrough =(isDone)=>{
  return{
    type: 'UPDATE_WALKTHROUGH',
    payload: isDone
  }
}
export const upadateUserUID= (userUID) =>{
  return {
    type:'UPDATE_USER_UID',
    action: userUID
  };
}
export const loginUser = (username,password) => async dispatch=>{
  dispatch({type: 'LOGIN_SENT'})
  try{
    const token = await login(username,password)
    dispatch({type:'LOGIN_FUFLIED', payload:token})
  }catch(errorMessage){
    dispatch({type:'LOGIN_REJECTED', payload:errorMessage})
  }
}
export const updatePlates =(licenseN,certN,model)=> dispatch =>{
  dispatch({type:'PLATE_SUBMITED'})
  let timeNow= new Date().toLocaleString().split(', ');
  let id= store.getState().tempPlate.currentIndex + 1;

  let embotisseur= store.getState().fireBaseData.userUID;
  let qr=store.getState().tempPlate.qrCode;
  //// TODO: chekking input
  if (!qr) {
    dispatch({type: 'PLATE_ERROR', payload: "Le Qr Code n'est pas Correct"})
    /*alert('Ive reahed the if !qrCode')*/
  }
  else {
    let plate={
      id:id,
      licenseN:licenseN,
      certN:certN,
      embotisseur:embotisseur,
      model:model,
      regDate:timeNow,
      qr:qr,
    }
    dispatch({type: 'PLATE_SUCCESS_RESPONSE'})
    console.log('plate = '+ plate);
    dispatch({type: 'UPDATE_LICENSE_PLATE',payload: plate})
  }

}
export const updateWizardBeenShown= (isShown)=>{
  return{
    type:'UPDATE_WIZARD_IS_SHOWN',
    payload: isShown
  }
}
