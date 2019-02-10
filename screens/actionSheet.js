import React,{Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import  { ActionSheetItem , ActionSheet} from 'react-native-action-sheet-component';
import Icon from 'react-native-vector-icons/MaterialIcons'

const checkedIcon = <Icon name="check" color="#A5000D" size={42} />
export default class actionSheet extends Component {
    state={
        selectedItems: ['item-1'],
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showAction){
            this.topActionSheet.show();
        }else this.topActionSheet.hide()
    }
    onChange=(value, index, values)=>{
        this.setState({ selectedItems: values });
    }
    onItemPress = (value) => {
        console.log('Press: value -> ', value);
    }
    render() {
        return (
        <View style={{zIndex:10}}>
            
            <ActionSheet
                ref={(actionSheet) => { this.topActionSheet = actionSheet; }}
                position="top"
                onChange={this.onChange}
                hideOnHardwareBackPress
                animationDuration={500}
                
            >   
                <TouchableOpacity>
                    <ActionSheetItem
                        key='item-1'
                        text="Paramètres"
                        value="Paramètres"
                        selectedIcon={checkedIcon}
                        icon={
                        <Icon name="settings" color="#A5000D" size={30} />
                        }
                        
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ActionSheetItem
                        key='item-2'
                        text="Profile"
                        value="Profile"
                        selectedIcon={checkedIcon}
                        icon={
                        <Icon name="portrait" color="#A5000D" size={30} />
                        }
                        /*onPress={this.onItemPress}*/
                    />
                </TouchableOpacity>
                
                <ActionSheetItem
                    key='item-3'
                    text="Enregistrement"
                    value="Enregistrement"
                    selectedIcon={checkedIcon}
                    icon={
                    <Icon name="style" color="#A5000D" size={30} />
                    }
                    /*onPress={this.onItemPress}*/
                />
            </ActionSheet>
        </View>
        )
    }
}
