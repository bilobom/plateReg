

export const userReducer = (state={},action)=>{
  switch (action.type) {
    case 'LOGIN_SENT':
      return {...state, loginStatus: action.payload};
    case 'LOGIN_REJECTED':
      return {...state, loginError: action.payload};
    case 'LOGIN_FUFLIED':
      return {...state, token: action.payload};
    default:
      return state;

  }
}
export const fireBaseDataReducer = (state={},action)=>{
  switch (action.type) {
    case 'UPDATE_USER_UID':
      return {...state, userUID:action.payload}
    case 'UPDATE_PHONE_NUMBER':
      return {...state, phoneNumber: action.payload}
    default:
      return state;

  }
}
export const uiReducer = (state={},action)=>{
  switch (action.type) {
    case 'UPDATE_WALKTHROUGH':
      return {...state, walkthroughDone: action.payload}
    case 'UPDATE_WIZARD_IS_SHOWN':
      return {...state, updateWizardBeenShown:action.payload};
    case 'UPDATE_DIAG_VISIBILITY':
      return {...state, isDialogVisible:action.payload};
    default:
    return state;

  }
}
export const platesReducer = (platesA=[], action)=>{
  //console.log(platesA+"---"+JSON.stringify(action))
  if (action.type === 'UPDATE_LICENSE_PLATE') {
    return [...platesA, action.payload]
  }

  return platesA;
}
export const tempPlateReducer =(state={}, action) =>{
  switch (action.type) {
    case 'UPDATE_QR_CODE':
      return{...state, qrCode: action.payload};
    case 'UPDATE_INDEX':
      return {...state, currentIndex: action.payload};
    case 'PLATE_SUBMITED':
      return {...state, plateStatus: 'Enrigestrement en Cours'};
    case 'PLATE_ERROR':
      return {...state, plateError: action.payload};
    case 'PLATE_SUCCESS_RESPONSE':
      return {...state, plateSucess: true};
    default:
      return state;
  }
}
