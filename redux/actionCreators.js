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
export const updatePlates =(plate)=>{
  return{
    type: 'UPDATE_LICENSE_PLATE',
    payload: plate
  }
}
