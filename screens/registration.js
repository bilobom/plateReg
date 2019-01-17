import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet, Text,FlatList, StatusBar} from 'react-native'
import {Header} from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialIcons';
//import Caroucel from './caroucelReg'
import LicensePlateInfo from './licensePlateInfo'

const plates=[

]
class registration extends React.Component {
  constructor(props){
    super(props);
    this.state={
      plates: [
        {
          id:'0',
          licenseN:'00185-016-35',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'TOYOTA',
          regDate:['TUESDAY', '05:01PM'],
        },
        {
          id:'1',
          licenseN:'01125-018-42',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'HONDA',
          regDate:['MONDAY', '10:40AM'],
        },
        {
          id:'2',
          licenseN:'01125-018-42',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'PEUGEOT',
          regDate:['MONDAY', '10:40AM'],
        },
        {
          id:'2',
          licenseN:'01125-018-42',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'DACIA',
          regDate:['MONDAY', '10:40AM'],
        },
        {
          id:'2',
          licenseN:'01125-018-42',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'NISSAN',
          regDate:['MONDAY', '10:40AM'],
        },
        {
          id:'2',
          licenseN:'01125-018-42',
          carN: '546545654878',
          embotisseur:'001254478',
          model:'HUANDAY',
          regDate:['MONDAY', '10:40AM'],
        }
      ]
    }
  }
  static navigationOptions={
    header: null
  }

  componentDidMount(){

  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
  )}
  renderTopBar(){
    return(
      <View style={styles.header}>
        <View style={styles.util}>
          <Icon name='more-vert' style={{backgroundColor:'white'}} color={'black'} size={50}/>
          <Icon name='search' style={{backgroundColor:'white'}} color={'black'} size={50}/>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.textHeader} > تسجيلاتي </Text>
          <Icon name='assignment' size={50}/>
        </View>
      </View>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0.1)'} animated={true}/>
        {this.renderTopBar()}
        <View style={styles.regContainer} >
          <FlatList
            data={this.state.plates}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem= {({item}) => {
              console.log(JSON.stringify(item));
              return(
                <LicensePlateInfo
                  info={item}
                />
              )
            }}
          />
        </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#cecece',

  },
  header:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems:'center',
  },
  util:{
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent:'space-between'
  },
  headerText:{
    flex: 4,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  textHeader:{
    fontSize: 40,
    color: 'black',
    paddingLeft: 50,
  },
  regContainer:{
    flex:4
  }
})

export default registration;
