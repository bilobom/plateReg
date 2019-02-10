import React from 'react'
import {View, StyleSheet,FlatList, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LicensePlateInfo from './licensePlateInfo'
import ActionSheet from "./actionSheet";
import SearchBar from './searchBar'
import { Avatar } from 'react-native-elements';

class registration extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showAction:false,
      showSearchBar:false,
    }
  }
  static navigationOptions=({navigation})=>{
    return{
      headerTitle: 'Enregistrement',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:"white",
        alignSelf:'center',
        textAlign:'center',
        width: '90%',
      },
      headerLeft: (<View></View>), 
      headerRight: (
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Icon
            name='search'  color={'white'} size={30}
            onPress={navigation.getParam('handelShowSearchBar')}
            raised
          />
          <Icon
            name='more-vert' color={'white'} size={30}
            onPress={navigation.getParam('handelShowAction')
            }
            raised
          />
        </View>
      ),
      headerStyle: {backgroundColor:"#A5000D", marginTop: StatusBar.currentHeight},
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({ handelShowAction: this._handelShowAction, handelShowSearchBar:this._handelShowSearchBar })
  }
  _handelShowAction=()=>{
    this.state.showAction ? this.setState({showAction:false}): this.setState({showAction:true})
    this.setState({showSearchBar:false})
  }
  _handelShowSearchBar=()=>{
    this.state.showSearchBar ? this.setState({showSearchBar:false}): this.setState({showSearchBar:true})
    this.setState({showAction:false})
  }
  addClicked=()=>{
    this.props.navigation.navigate('qrScanner')
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
 
  render () {
    //console.warn(this.state)
    return (

      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(165,0,13,1)'} animated={true}/>
        <SearchBar showSearchBar={this.state.showSearchBar}/>
        <ActionSheet showAction={this.state.showAction}/>
        <View style={styles.regContainer} >
          <FlatList
            data={this.props.plates}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem= {({item}) => {
              //console.log(JSON.stringify(item));
              return(
                <LicensePlateInfo
                  info={item}
                />
              )
            }}
          />
        </View>
        <View style={{position:'absolute', bottom:20, right:20}}>
          <Avatar
            large
            rounded
            overlayContainerStyle={{backgroundColor: '#A5000D'}}
            icon={{name: 'add' ,size:45}}  
            activeOpacity={0.7}
            onPress={this.addClicked}
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
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})
const mapStateToProps=state=>({
  plates: state.plates
})
export default connect(mapStateToProps)(registration);
