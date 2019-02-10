import React, { Component } from 'react'
import { View , TouchableOpacity} from 'react-native'
import SearchBar from 'react-native-searchbar'

export default class searchBar extends Component {
    state={

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showSearchBar){
            this.searchBar.show()
        }else this.searchBar.hide()
    }
    render() {
        return (
            <View>
                    <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        /*data={this.props.}*/
                        /*handleResults={this._handleResults} */
                    />
            </View>
            
        
        )
    }
}
