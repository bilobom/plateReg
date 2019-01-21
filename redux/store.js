import {createStore ,combineReducers, applyMiddleware} from 'redux'
import {uiReducer,userReducer,platesReducer,fireBaseDataReducer,tempPlateReducer} from './reducers'
import thunk from 'redux-thunk'


const initialState={
  ui:{
    walkthroughDone:false,
    shownWizard: false,
    isDialogVisible:false,
  },
  fireBaseData:{
    phoneNumber:null,
    userUID:"",
  },
  tempPlate:{
    qrCode: "",
    plateSucess:false,
    currentIndex:5,
  },
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
      id:'3',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'DACIA',
      regDate:['MONDAY', '10:40AM'],
      qr:'dsfsqfksjdfgqlksjhdklfqksj'
    },
    {
      id:'4',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'NISSAN',
      regDate:['MONDAY', '10:40AM'],
      qr:'qdfjqmùflsdkùfqmlsdkfmlmlqskflm'
    },
    {
      id:'5',
      licenseN:'01125-018-42',
      carN: '546545654878',
      embotisseur:'001254478',
      model:'HUANDAY',
      regDate:['MONDAY', '10:40AM'],
      qr:'lmskddjmflqkfjsdmfjkqsmlkdjfmlqkiop'
    }
  ],
}


const rootReducer = combineReducers({
  fireBaseData: fireBaseDataReducer,
  user:userReducer,
  plates: platesReducer,
  tempPlate:tempPlateReducer,
  ui:uiReducer,
});
export default store = createStore(rootReducer, initialState, applyMiddleware(thunk))
