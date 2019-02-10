import React, { Component } from 'react'
import RNTextDetector from "react-native-text-detector";
import { RNCamera } from 'react-native-camera';
import { StyleSheet,View,Text,TouchableOpacity, Dimensions,ImageBackground,Image, ImageEditor } from 'react-native';
import { connect } from 'react-redux'
import Prompt from 'react-native-input-prompt'

const {width, height} = Dimensions.get('window')
export class textDetector extends Component {
    static navigationOptions = { header: null }
    state={
        visible:false,
        quality:0.2,
        imageUri:null
    }
   
    handelCancel=()=>{
        this.setState({
            quality: 0.2,
            visible: !this.state.visible,
            
        })
    }
    handelSub=(text)=>{

        this.setState({
            quality: Number(text),
            visible: !this.state.visible
        })
    }
    onReceiveImage=(data,visionResp)=>{
        this.setState({ imageUri: data.uri, visionResp });
        
    }
    detectText = async () => {
        try {
          const options = {
            quality: this.state.quality,
            base64: true,
            skipProcessing: true,
            fixOrientation: true,
            forceUpOrientation: true
          };
          const data = await this.camera.takePictureAsync(options);
          const visionResp = await RNTextDetector.detectFromUri(data.uri);
          this.onReceiveImage(data,visionResp)
          const data2=JSON.stringify(visionResp);
          alert('visionResp'+data2);
          console.log('visionResp'+data2);
        } catch (e) {
          alert(e);
        }
    };
    onQualityPressed=()=>{
        this.setState({visible:true})
    }
   
    render() {
        const { imageUri } = this.state;
        console.log("width::"+width+" heigh::t"+height)
        if (imageUri) {
            return (
               
                    <ImageBackground style={styles.background}  source={{uri:imageUri}}>
                        
                        {this.state.visionResp.map(item =>{
                            return (<View key={item.text}
                                style={{
                                    position:'absolute',
                                    top: item.bounding.top,
                                    left: item.bounding.left,
                                    height: item.bounding.height-item.bounding.top,
                                    width: item.bounding.width-item.bounding.left,
                                    borderWidth:1,
                                    borderColor:'#A5000D',
                                  }}
                            />)
                        })}
                    </ImageBackground>
                
            );
        }else
        return ( 
            <View style={styles.container}>
                
                <RNCamera
                captureAudio={false}
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.onQualityPressed.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> Quality </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.detectText.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('intro')} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> Enter </Text>
                    </TouchableOpacity>
                    <View>
                    <Prompt
                        visible={this.state.visible}
                        title="Play with quality"
                        placeholder="for better ocr reading"
                        onCancel={this.handelCancel.bind(this)}
                        onSubmit={this.handelSub.bind(this)}
                    />
                </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    background: {
        flex:1,
        width:undefined,
        height:undefined,
        resizeMode:'contain'
        
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      
      alignSelf: 'center',
      margin: 20,
    },
});
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(textDetector)
