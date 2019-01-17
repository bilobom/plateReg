import {createStore ,combineReducers} from 'redux'

const initialState={
  walkthroughDone:false,
  phoneNumber: "",
  qrCode: "",
  plates: [
    {
      id:'0',
      licenseN:'00185-016-35',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'TOYOTA',
      regDate:['TUESDAY', '05:01PM'],
      qr: 'sqdfqsdfqsdfqsdfsqdfqsd'
    },
    {
      id:'1',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'HONDA',
      regDate:['MONDAY', '10:40AM'],
      qr:'qsdqsdqsdqsdfqsdfqsdfze'
    },
    {
      id:'2',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'PEUGEOT',
      regDate:['MONDAY', '10:40AM'],
      qr:'sdfqljkshdflqjkshldjkfhljk'
    },
    {
      id:'2',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'DACIA',
      regDate:['MONDAY', '10:40AM'],
      qr:'dsfsqfksjdfgqlksjhdklfqksj'
    },
    {
      id:'2',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'NISSAN',
      regDate:['MONDAY', '10:40AM'],
      qr:'qdfjqmùflsdkùfqmlsdkfmlmlqskflm'
    },
    {
      id:'2',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'HUANDAY',
      regDate:['MONDAY', '10:40AM'],
      qr:'lmskddjmflqkfjsdmfjkqsmlkdjfmlqkiop'
    }
  ],
}

const qrCodeReducer = (state="", action)=>{
  if (action.type === 'UPDATE_QR_CODE') {
    return{
      ...state,
      qrCode: action.payload
    }
  }
  return state;
}
const plateReducer = (state=[], action)=>{
  if (action.type === 'UPDATE_LICENSE_PLATE') {
    return{
      ...state,
      paltes:[...state.plates, action.payload]
    }
  }
  return state;
}
const walkthroughReducer = (state=false, action)=>{
  if (action.type === 'UPDATE_WALKTHROUGH') {
    return{
      ...state,
      walkthroughDone: action.payload
    }
  }
  return state;
}
const phoneNumberReducer = (state="",action)=>{
  if (action.type === 'UPDATE_PHONE_NUMBER') {
    return{
      ...state,
      phoneNumber: action.payload
    }
  }
  return state;
}
const rootReducer = combineReducers({
  phoneNumber: phoneNumberReducer,
  qrCode : qrCodeReducer,
  walkthroughDone: walkthroughReducer,
  plates: plateReducer,
})
export default store = createStore(rootReducer)
