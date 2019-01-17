import React from 'react'
import PropTypes from 'prop-types'
import {View,StyleSheet,Text, Image, Dimensions} from 'react-native'


const {DEVICE_HEIGHT, DEVICE_WIDTH}= Dimensions.get('window');
class LicensePlateInfo extends React.Component {

  static navigationOptions={
    header: null,
  }
  render () {
    const {licenseN, carN,model,embotisseur,regDate}=this.props.info;
    return(
      <View style={styles.container}>
        <View style={styles.leftSideView}>
          <View style={styles.modelView}>
            <Text style={styles.modelText}>{model}</Text>
          </View>
          <View>
            <Text style={styles.regDate}> {regDate[0]+'\n  '+ regDate[1]}</Text>
          </View>
        </View>
        <View style={styles.rightSideView}>
          <Text style={styles.infoText}> License Plate: {licenseN} </Text>
          <Text style={styles.infoText}> Car Regetration N° : {carN}</Text>
          <Text style={styles.infoText}> Empotisseur : {embotisseur} </Text>
        </View>

      </View>
    )
  }
}
const styles= StyleSheet.create({
  container:{
    /*paddingTop: 10,*/
    flex:1,
    flexDirection: 'row',
    /*backgroundColor : 'blue',*/
    borderBottomLeftRadius:10,
    borderTopLeftRadius: 10,
    marginLeft:10,
    marginRight:10,
  },
  rightSideView:{
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    fontSize:40,
    height:200,

  },
  leftSideView:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#A5000D',
    alignItems:'center',
    borderBottomLeftRadius:10,
    borderTopLeftRadius: 10,
  },
  modelView:{

  },
  regDate:{
    fontSize: 10,
    color:'black',
    fontFamily:'Roboto',
  },
  modelText:{
    fontSize: 20,
    fontFamily:'Roboto',
    fontWeight:'200',
  },
  infoText:{
    color:'black',
    fontSize: 15,
    fontFamily:'Roboto',
  }
})
export default LicensePlateInfo;
