
import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, Image,StyleSheet} from 'react-native'
import Caroucel from 'react-native-snap-carousel'
import {ENTRIES1} from './caroucel/entries'
import SliderEntry from './caroucel/SliderEntry'
class CaroucelReg extends React.Component {
  constructor(){
    super();
  }
  renderItem({item,index}){
    return(
      <View style={styles.slider}>
        <SliderEntry data={item} even={false} />
      </View>
      )

  }
  render () {
    return(
      <View style={styles.container}>
      <Caroucel
        /*ref={(c)=>this._caroucel=c}*/
        data={ENTRIES1}
        renderItem={this.renderItem}
        sliderWidth={500}
        itemWidth={500}
      />
      </View>

    )

  }
}
const styles=StyleSheet.create({
  container:{
    flex :1
  },
  slider:{

  }
})

export default CaroucelReg;
