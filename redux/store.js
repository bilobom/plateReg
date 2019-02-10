import {createStore ,combineReducers, applyMiddleware} from 'redux'
import {uiReducer,carModelReducer,userReducer,platesReducer,fireBaseDataReducer,tempPlateReducer, login} from './reducers'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState={
  ui:{
    walkthroughDone:false,
    shownWizard: false,
    isDialogVisible:false,
  },
  fireBaseData:{
    phoneNumber:null,
    userUID:null,
  },
  tempPlate:{
    qrCode: "",
    plateSucess:false,
    currentIndex:5,
  },
  user:{
    
  },
  carModel:[
    {
        label: "AC",
        value: "AC"
    }, {
        label: "AC PROPULSION",
        value: "AC PROPULSION"
    }, {
        label: "ACURA",
        value: "ACURA"
    }, {
        label: "A.D. TRAMONTANA",
        value: "A.D. TRAMONTANA"
    }, {
        label: "ALFA ROMEO",
        value: "ALFA ROMEO"
    }, {
        label: "ALMAC",
        value: "ALMAC"
    }, {
        label: "ALTERNATIVE CARS",
        value: "ALTERNATIVE CARS"
    }, {
        label: "AMUZA",
        value: "AMUZA"
    }, {
        label: "ANTEROS",
        value: "ANTEROS"
    }, {
        label: "ARASH",
        value: "ARASH"
    }, {
        label: "ARIEL",
        value: "ARIEL"
    }, {
        label: "ARRINERA",
        value: "ARRINERA"
    }, {
        label: "ASL",
        value: "ASL"
    }, {
        label: "ASTERIO",
        value: "ASTERIO"
    }, {
        label: "ASTON MARTIN",
        value: "ASTON MARTIN"
    }, {
        label: "AUDI",
        value: "AUDI"
    }, {
        label: "BAC",
        value: "BAC"
    }, {
        label: "BAJAJ",
        value: "BAJAJ"
    }, {
        label: "BEIJING AUTOMOBILE WORKS",
        value: "BEIJING AUTOMOBILE WORKS"
    }, {
        label: "BENTLEY",
        value: "BENTLEY"
    }, {
        label: "BMW",
        value: "BMW"
    }, {
        label: "BOLLORÉ",
        value: "BOLLORÉ"
    }, {
        label: "BOLWELL",
        value: "BOLWELL"
    }, {
        label: "BRILLIANCE / HUACHEN",
        value: "BRILLIANCE / HUACHEN"
    }, {
        label: "BRISTOL",
        value: "BRISTOL"
    }, {
        label: "BRITISH LEYLAND",
        value: "BRITISH LEYLAND"
    }, {
        label: "BRM BUGGY",
        value: "BRM BUGGY"
    }, {
        label: "BROOKE",
        value: "BROOKE"
    }, {
        label: "BUDDY",
        value: "BUDDY"
    }, {
        label: "BUFORI",
        value: "BUFORI"
    }, {
        label: "BUGATTI",
        value: "BUGATTI"
    }, {
        label: "BUICK",
        value: "BUICK"
    }, {
        label: "BYD",
        value: "BYD"
    }, {
        label: "CADILLAC",
        value: "CADILLAC"
    }, {
        label: "CAPARO",
        value: "CAPARO"
    }, {
        label: "CARBONTECH",
        value: "CARBONTECH"
    }, {
        label: "CARICE",
        value: "CARICE"
    }, {
        label: "CHANG'AN",
        value: "CHANG'AN"
    }, {
        label: "CHANGHE",
        value: "CHANGHE"
    }, {
        label: "CHERY",
        value: "CHERY"
    }, {
        label: "CHEVROLET",
        value: "CHEVROLET"
    }, {
        label: "CHEVRON",
        value: "CHEVRON"
    }, {
        label: "CITROËN",
        value: "CITROËN"
    }, {
        label: "CHRYSLER",
        value: "CHRYSLER"
    }, {
        label: "COMMUTER CARS",
        value: "COMMUTER CARS"
    }, {
        label: "CONNAUGHT",
        value: "CONNAUGHT"
    }, {
        label: "COVINI",
        value: "COVINI"
    }, {
        label: "DACIA",
        value: "DACIA"
    }, {
        label: "DAIHATSU",
        value: "DAIHATSU"
    }, {
        label: "DATSUN",
        value: "DATSUN"
    }, {
        label: "DE LA CHAPELLE",
        value: "DE LA CHAPELLE"
    }, {
        label: "DMC",
        value: "DMC"
    }, {
        label: "DIARDI",
        value: "DIARDI"
    }, {
        label: "DODGE",
        value: "DODGE"
    }, {
        label: "DONKERVOORT",
        value: "DONKERVOORT"
    }, {
        label: "DONGFENG",
        value: "DONGFENG"
    }, {
        label: "DONTO",
        value: "DONTO"
    }, {
        label: "DS AUTOMOBILES",
        value: "DS AUTOMOBILES"
    }, {
        label: "DYNASTI ELECTRIC CAR CORP.",
        value: "DYNASTI ELECTRIC CAR CORP."
    }, {
        label: "E-VADE",
        value: "E-VADE"
    }, {
        label: "EFFEDI",
        value: "EFFEDI"
    }, {
        label: "EGY-TECH ENGINEERING",
        value: "EGY-TECH ENGINEERING"
    }, {
        label: "ELECTRIC RACEABOUT",
        value: "ELECTRIC RACEABOUT"
    }, {
        label: "ELFIN",
        value: "ELFIN"
    }, {
        label: "EMGRAND",
        value: "EMGRAND"
    }, {
        label: "ENGLON",
        value: "ENGLON"
    }, {
        label: "ETERNITI",
        value: "ETERNITI"
    }, {
        label: "ETOX",
        value: "ETOX"
    }, {
        label: "EQUUS",
        value: "EQUUS"
    }, {
        label: "EXAGON",
        value: "EXAGON"
    }, {
        label: "FARALLI & MAZZANTI",
        value: "FARALLI & MAZZANTI"
    }, {
        label: "FAW",
        value: "FAW"
    }, {
        label: "FERRARI",
        value: "FERRARI"
    }, {
        label: "FIAT",
        value: "FIAT"
    }, {
        label: "FISKER",
        value: "FISKER"
    }, {
        label: "FODAY",
        value: "FODAY"
    }, {
        label: "FORCE",
        value: "FORCE"
    }, {
        label: "FORD",
        value: "FORD"
    }, {
        label: "FORD AUSTRALIA",
        value: "FORD AUSTRALIA"
    }, {
        label: "FORD GERMANY",
        value: "FORD GERMANY"
    }, {
        label: "FORNASARI",
        value: "FORNASARI"
    }, {
        label: "FRASER",
        value: "FRASER"
    }, {
        label: "GAC GROUP",
        value: "GAC GROUP"
    }, {
        label: "GALPIN",
        value: "GALPIN"
    }, {
        label: "GEELY",
        value: "GEELY"
    }, {
        label: "GENESIS",
        value: "GENESIS"
    }, {
        label: "GIBBS",
        value: "GIBBS"
    }, {
        label: "GILLET",
        value: "GILLET"
    }, {
        label: "GINETTA",
        value: "GINETTA"
    }, {
        label: "GMC",
        value: "GMC"
    }, {
        label: "GONOW",
        value: "GONOW"
    }, {
        label: "GREAT WALL / CHANGCHENG",
        value: "GREAT WALL / CHANGCHENG"
    }, {
        label: "GREENTECH AUTOMOTIVE",
        value: "GREENTECH AUTOMOTIVE"
    }, {
        label: "GRINNALL",
        value: "GRINNALL"
    }, {
        label: "GTA MOTOR",
        value: "GTA MOTOR"
    }, {
        label: "GUMPERT",
        value: "GUMPERT"
    }, {
        label: "GURGEL",
        value: "GURGEL"
    }, {
        label: "HENNESSEY",
        value: "HENNESSEY"
    }, {
        label: "HINDUSTAN",
        value: "HINDUSTAN"
    }, {
        label: "HOLDEN",
        value: "HOLDEN"
    }, {
        label: "HONDA",
        value: "HONDA"
    }, {
        label: "HONGQI",
        value: "HONGQI"
    }, {
        label: "HRADYESH",
        value: "HRADYESH"
    }, {
        label: "HTT TECHNOLOGIES",
        value: "HTT TECHNOLOGIES"
    }, {
        label: "HULME",
        value: "HULME"
    }, {
        label: "HYUNDAI",
        value: "HYUNDAI"
    }, {
        label: "ICML",
        value: "ICML"
    }, {
        label: "IFR",
        value: "IFR"
    }, {
        label: "IRAN KHODRO",
        value: "IRAN KHODRO"
    }, {
        label: "IKCO",
        value: "IKCO"
    }, {
        label: "IMPERIA",
        value: "IMPERIA"
    }, {
        label: "INFINITI",
        value: "INFINITI"
    }, {
        label: "IVM",
        value: "IVM"
    }, {
        label: "INVICTA",
        value: "INVICTA"
    }, {
        label: "ISDERA",
        value: "ISDERA"
    }, {
        label: "ISUZU",
        value: "ISUZU"
    }, {
        label: "JAC",
        value: "JAC"
    }, {
        label: "JAGUAR",
        value: "JAGUAR"
    }, {
        label: "JEEP",
        value: "JEEP"
    }, {
        label: "JENSEN MOTORS",
        value: "JENSEN MOTORS"
    }, {
        label: "JETCAR",
        value: "JETCAR"
    }, {
        label: "JONWAY",
        value: "JONWAY"
    }, {
        label: "JOSS",
        value: "JOSS"
    }, {
        label: "KAIPAN",
        value: "KAIPAN"
    }, {
        label: "KANTANKA",
        value: "KANTANKA"
    }, {
        label: "KARMA",
        value: "KARMA"
    }, {
        label: "KOENIGSEGG",
        value: "KOENIGSEGG"
    }, {
        label: "KORRES",
        value: "KORRES"
    }, {
        label: "KIA",
        value: "KIA"
    }, {
        label: "KIAT",
        value: "KIAT"
    }, {
        label: "KISH KHODRO",
        value: "KISH KHODRO"
    }, {
        label: "KTM",
        value: "KTM"
    }, {
        label: "LADA",
        value: "LADA"
    }, {
        label: "LAMBORGHINI",
        value: "LAMBORGHINI"
    }, {
        label: "LANCIA",
        value: "LANCIA"
    }, {
        label: "LAND ROVER",
        value: "LAND ROVER"
    }, {
        label: "LANDWIND",
        value: "LANDWIND"
    }, {
        label: "LARAKI",
        value: "LARAKI"
    }, {
        label: "LEBLANC",
        value: "LEBLANC"
    }, {
        label: "LEITCH",
        value: "LEITCH"
    }, {
        label: "LEOPARD",
        value: "LEOPARD"
    }, {
        label: "LEXUS",
        value: "LEXUS"
    }, {
        label: "LI-ION",
        value: "LI-ION"
    }, {
        label: "LIFAN",
        value: "LIFAN"
    }, {
        label: "LIGHTNING",
        value: "LIGHTNING"
    }, {
        label: "LINCOLN",
        value: "LINCOLN"
    }, {
        label: "LISTER",
        value: "LISTER"
    }, {
        label: "LOCAL MOTORS",
        value: "LOCAL MOTORS"
    }, {
        label: "LOBINI",
        value: "LOBINI"
    }, {
        label: "LOTEC",
        value: "LOTEC"
    }, {
        label: "LOTUS CARS",
        value: "LOTUS CARS"
    }, {
        label: "LUCRA CARS",
        value: "LUCRA CARS"
    }, {
        label: "LUXGEN",
        value: "LUXGEN"
    }, {
        label: "MAHINDRA",
        value: "MAHINDRA"
    }, {
        label: "MARUSSIA",
        value: "MARUSSIA"
    }, {
        label: "MARUTI SUZUKI",
        value: "MARUTI SUZUKI"
    }, {
        label: "MASERATI",
        value: "MASERATI"
    }, {
        label: "MASTRETTA",
        value: "MASTRETTA"
    }, {
        label: "MAZDA",
        value: "MAZDA"
    }, {
        label: "MCLAREN",
        value: "MCLAREN"
    }, {
        label: "MERCEDES-BENZ",
        value: "MERCEDES-BENZ"
    }, {
        label: "MG",
        value: "MG"
    }, {
        label: "MICRO",
        value: "MICRO"
    }, {
        label: "MINI",
        value: "MINI"
    }, {
        label: "MITSUBISHI",
        value: "MITSUBISHI"
    }, {
        label: "MITSUOKA",
        value: "MITSUOKA"
    }, {
        label: "MORGAN",
        value: "MORGAN"
    }, {
        label: "MULLEN",
        value: "MULLEN"
    }, {
        label: "MYCAR",
        value: "MYCAR"
    }, {
        label: "MYVI-PERODUA",
        value: "MYVI-PERODUA"
    }, {
        label: "NISSAN",
        value: "NISSAN"
    }, {
        label: "NOBLE",
        value: "NOBLE"
    }, {
        label: "NOTA",
        value: "NOTA"
    }, {
        label: "OLDSMOBILE",
        value: "OLDSMOBILE"
    }, {
        label: "OPEL",
        value: "OPEL"
    }, {
        label: "OPTIMAL ENERGY",
        value: "OPTIMAL ENERGY"
    }, {
        label: "ORCA",
        value: "ORCA"
    }, {
        label: "OLTCIT",
        value: "OLTCIT"
    }, {
        label: "PAGANI",
        value: "PAGANI"
    }, {
        label: "PANHARD",
        value: "PANHARD"
    }, {
        label: "PANOZ",
        value: "PANOZ"
    }, {
        label: "PERANA",
        value: "PERANA"
    }, {
        label: "PERODUA",
        value: "PERODUA"
    }, {
        label: "PEUGEOT",
        value: "PEUGEOT"
    }, {
        label: "P.G.O.",
        value: "P.G.O."
    }, {
        label: "POLARSUN",
        value: "POLARSUN"
    }, {
        label: "PLYMOUTH",
        value: "PLYMOUTH"
    }, {
        label: "PORSCHE",
        value: "PORSCHE"
    }, {
        label: "PROTO",
        value: "PROTO"
    }, {
        label: "OULLIM",
        value: "OULLIM"
    }, {
        label: "PROTON",
        value: "PROTON"
    }, {
        label: "PURITALIA",
        value: "PURITALIA"
    }, {
        label: "QOROS",
        value: "QOROS"
    }, {
        label: "QVALE",
        value: "QVALE"
    }, {
        label: "RADICAL",
        value: "RADICAL"
    }, {
        label: "RELIANT",
        value: "RELIANT"
    }, {
        label: "RENAULT",
        value: "RENAULT"
    }, {
        label: "REVA",
        value: "REVA"
    }, {
        label: "RIMAC",
        value: "RIMAC"
    }, {
        label: "RINSPEED",
        value: "RINSPEED"
    }, {
        label: "RODING",
        value: "RODING"
    }, {
        label: "ROEWE",
        value: "ROEWE"
    }, {
        label: "ROLLS-ROYCE",
        value: "ROLLS-ROYCE"
    }, {
        label: "ROSSIN-BERTIN",
        value: "ROSSIN-BERTIN"
    }, {
        label: "ROSSION",
        value: "ROSSION"
    }, {
        label: "ROVER",
        value: "ROVER"
    }, {
        label: "SAAB",
        value: "SAAB"
    }, {
        label: "SALEEN",
        value: "SALEEN"
    }, {
        label: "SAIC-GM-WULING",
        value: "SAIC-GM-WULING"
    }, {
        label: "SAIPA",
        value: "SAIPA"
    }, {
        label: "SAKER",
        value: "SAKER"
    }, {
        label: "SAMSUNG",
        value: "SAMSUNG"
    }, {
        label: "SAN",
        value: "SAN"
    }, {
        label: "SBARRO",
        value: "SBARRO"
    }, {
        label: "SCION",
        value: "SCION"
    }, {
        label: "SEAT",
        value: "SEAT"
    }, {
        label: "SHANGHAI MAPLE",
        value: "SHANGHAI MAPLE"
    }, {
        label: "SIN",
        value: "SIN"
    }, {
        label: "ŠKODA",
        value: "ŠKODA"
    }, {
        label: "SMART",
        value: "SMART"
    }, {
        label: "SPADA VETTURE SPORT",
        value: "SPADA VETTURE SPORT"
    }, {
        label: "SPYKER",
        value: "SPYKER"
    }, {
        label: "SSANGYONG",
        value: "SSANGYONG"
    }, {
        label: "SSC NORTH AMERICA",
        value: "SSC NORTH AMERICA"
    }, {
        label: "STREET & RACING TECHNOLOGY",
        value: "STREET & RACING TECHNOLOGY"
    }, {
        label: "SUBARU",
        value: "SUBARU"
    }, {
        label: "SUZUKI",
        value: "SUZUKI"
    }, {
        label: "TANOM",
        value: "TANOM"
    }, {
        label: "TATA",
        value: "TATA"
    }, {
        label: "TAURO",
        value: "TAURO"
    }, {
        label: "TAWON CAR",
        value: "TAWON CAR"
    }, {
        label: "TD CARS",
        value: "TD CARS"
    }, {
        label: "TESLA",
        value: "TESLA"
    }, {
        label: "THAI RUNG",
        value: "THAI RUNG"
    }, {
        label: "TOYOTA",
        value: "TOYOTA"
    }, {
        label: "TREKKA",
        value: "TREKKA"
    }, {
        label: "TRIDENT",
        value: "TRIDENT"
    }, {
        label: "TRIUMPH",
        value: "TRIUMPH"
    }, {
        label: "TROLLER",
        value: "TROLLER"
    }, {
        label: "TRUMPCHI",
        value: "TRUMPCHI"
    }, {
        label: "TUSHEK",
        value: "TUSHEK"
    }, {
        label: "TVR",
        value: "TVR"
    }, {
        label: "TVS",
        value: "TVS"
    }, {
        label: "ULTIMA",
        value: "ULTIMA"
    }, {
        label: "UMM",
        value: "UMM"
    }, {
        label: "UEV",
        value: "UEV"
    }, {
        label: "URI",
        value: "URI"
    }, {
        label: "UAZ",
        value: "UAZ"
    }, {
        label: "VAUXHALL MOTORS",
        value: "VAUXHALL MOTORS"
    }, {
        label: "VECTOR",
        value: "VECTOR"
    }, {
        label: "VENCER",
        value: "VENCER"
    }, {
        label: "VENIRAUTO",
        value: "VENIRAUTO"
    }, {
        label: "VENTURI",
        value: "VENTURI"
    }, {
        label: "VEPR",
        value: "VEPR"
    }, {
        label: "VOLKSWAGEN",
        value: "VOLKSWAGEN"
    }, {
        label: "VOLVO",
        value: "VOLVO"
    }, {
        label: "VINFAST",
        value: "VINFAST"
    }, {
        label: "W MOTORS",
        value: "W MOTORS"
    }, {
        label: "WALLYSCAR",
        value: "WALLYSCAR"
    }, {
        label: "WESTFIELD",
        value: "WESTFIELD"
    }, {
        label: "WHEEGO",
        value: "WHEEGO"
    }, {
        label: "WIESMANN",
        value: "WIESMANN"
    }, {
        label: "XENIA",
        value: "XENIA"
    }, {
        label: "YES!",
        value: "YES!"
    }, {
        label: "YOUABIAN PUMA",
        value: "YOUABIAN PUMA"
    }, {
        label: "ZASTAVA AUTOMOBILES",
        value: "ZASTAVA AUTOMOBILES"
    }, {
        label: "ZENDER CARS",
        value: "ZENDER CARS"
    }, {
        label: "ZENOS CARS",
        value: "ZENOS CARS"
    }, {
        label: "ZENVO",
        value: "ZENVO"
    }, {
        label: "ZIL",
        value: "ZIL"
    }, {
        label: "ZX AUTO",
        value: "ZX AUTO"
    }
  ],
  plates: [
    {
      id:'0',
      licenseN:'00185-016-35',
      certN: '546545654878',
      embotisseur:'001254478',
      model:'TOYOTA',
      regDate:['TUESDAY', '05:01PM'],
      qr: 'sqdfqsdfqsdfqsdfsqdfqsd'
    },
    {
      id:'1',
      licenseN:'01125-018-42',
      certN: '546545654878',
      embotisseur:'001254478',
      model:'HONDA',
      regDate:['MONDAY', '10:40AM'],
      qr:'qsdqsdqsdqsdfqsdfqsdfze'
    },
    {
      id:'2',
      licenseN:'01125-018-42',
      certN: '546545654878',
      embotisseur:'001254478',
      model:'PEUGEOT',
      regDate:['MONDAY', '10:40AM'],
      qr:'sdfqljkshdflqjkshldjkfhljk'
    },
    {
      id:'3',
      licenseN:'01125-018-42',
      certN: '546545654878',
      embotisseur:'001254478',
      model:'DACIA',
      regDate:['MONDAY', '10:40AM'],
      qr:'dsfsqfksjdfgqlksjhdklfqksj'
    },
    {
      id:'4',
      licenseN:'01125-018-42',
      certN: '546545654878',
      embotisseur:'001254478',
      model:'NISSAN',
      regDate:['MONDAY', '10:40AM'],
      qr:'qdfjqmùflsdkùfqmlsdkfmlmlqskflm'
    },
    {
      id:'5',
      licenseN:'01125-018-42',
      certN: '546545654878',
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
  carModel:carModelReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);
export  default store