import store from './store'
import {login, addPlate} from '../api'

/*tempPlates */
export const updateQrCode =(qrCode)=>{
  return{
    type: 'UPDATE_QR_CODE',
    payload: qrCode
  }
}
export const updateCertN =(certN)=>{
  return{
    type: 'UPDATE_CERT_N',
    payload: certN
  }
}
export const updateLicenseN =(licenseN)=>{
  return{
    type: 'UPDATE_LICENSE_N',
    payload: licenseN
  }
}
export const updateModel =(model)=>{
  return{
    type: 'UPDATE_MODEL',
    payload: model
  }
}
/*Plates */
export const updatePlates =()=> dispatch =>{
  dispatch({type:'PLATE_SUBMITED'})
  
  let timeNow= new Date().toLocaleString().split(', ');
  let id= store.getState().tempPlate.currentIndex + 1;
  let embotisseur= store.getState().fireBaseData.userUID;
  let qr=store.getState().tempPlate.qrCode;
  let licenseN=store.getState().tempPlate.licenseN;
  let certN=store.getState().tempPlate.certN;
  let model=store.getState().tempPlate.model;
  if (!qr) {
    dispatch({type: 'PLATE_ERROR', payload: "Le Qr Code n'est pas Correct"})
    alert("Aucun QR code n'a été soumis, Veuillez vérifier le Qr Code")
  }
  else if(!embotisseur){
    alert("Une erreur s'est produite lors de l'enregistrement du numéro de téléphone. Veuillez vérifier votre téléphone à nouveau")
  }
  else if(!licenseN){
    alert("Aucun numero de plaque n'a été soumis, Veuillez vérifier la plaque")
  }
  else if(!certN){
    alert("Aucun numero certificat n'a été soumis, Veuillez vérifier la")
  }else if(!model){
    alert("Aucun model n'a été soumis, Veuillez vérifier le model")
  }
  else {
    let plate={
      id:id.toString(),
      licenseN:licenseN,
      certN:certN,
      embotisseur:embotisseur,
      model:model,
      regDate:timeNow,
      qr:qr,
    }
    dispatch({type: 'PLATE_SUCCESS_RESPONSE', payload:true})
    console.log('plate = '+ JSON.stringify(plate));

    dispatch({type:'UPDATE_CERT_N' , payload:null})
    dispatch({type:'UPDATE_LICENSE_N' , payload:null})
    dispatch({type:'UPDATE_QR_CODE' , payload:null})
    dispatch({type:'UPDATE_INDEX', payload:id})

    dispatch({type: 'UPDATE_LICENSE_PLATE',payload: plate})

  }

}
export const updateSuccessPlate=(isSucess)=>{
  return{
    type:'PLATE_SUCCESS_RESPONSE',
    payload:isSucess
  }
}
/*carModel */
export const updateCarModelList=(carModel)=>{
  return{
    type:'UPDATE_CAR_MODEL_LIST',
    payload: carModel
  }
}

/*ui*/
export const updateWalkthrough =(isDone)=>{
  return{
    type: 'UPDATE_WALKTHROUGH',
    payload: isDone
  }
}
export const updateWizardBeenShown= (isShown)=>{
  return{
    type:'UPDATE_WIZARD_IS_SHOWN',
    payload: isShown
  }
}
export const updateDiagVisibility=(isVisible)=>{
  return {type:'UPDATE_DIAG_VISIBILITY', payload: isVisible}
}

/*USER*/

export const loginUser = (username,password) => async dispatch=>{
  dispatch({type: 'LOGIN_SENT'})
  try{
    const token = await login(username,password)
    dispatch({type:'LOGIN_FUFLIED', payload:token})
  }catch(errorMessage){
    dispatch({type:'LOGIN_REJECTED', payload:errorMessage})
  }
}

/*FireBaseData */
export const upadateUserUID= (userUID) =>{
  console.log('about to update upadateUserUID')
  return {
    type:'UPDATE_USER_UID',
    payload: userUID
  };
}
export const updatePhoneNumber =(phoneNumber)=>{
  return{
    type: 'UPDATE_PHONE_NUMBER',
    payload: phoneNumber
  }
}

