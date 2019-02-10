import React from 'react'
import {View,StyleSheet,Text, Image, Dimensions} from 'react-native'
import {Card,Button} from 'react-native-elements'


const {DEVICE_HEIGHT, DEVICE_WIDTH}= Dimensions.get('window');
class LicensePlateInfo extends React.Component {

  static navigationOptions={
    header: null,
  }
  render () {
    //console.log('this.prps.info==' + this.props.info);
    
    const {licenseN, certN,model,embotisseur,regDate}=this.props.info;
    return(

      <View style={styles.container}>
        <View style={styles.rightSideView}>
            <Card title={model}>
              <Text style={styles.infoText}> N° de plaque: {licenseN.toString()} </Text>
              <Text style={styles.infoText}> N° de certificat : {certN.toString()}</Text>
              <Text style={styles.infoText}> Emboutisseur : {embotisseur} </Text>
            </Card>
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
