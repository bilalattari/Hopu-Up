import React, { Fragment } from 'react'
import {
  StyleSheet,
  TextInput,
  View,Image,FlatList,
  TouchableOpacity,
  Text,ScrollView,
} from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import DocumentPicker from 'react-native-document-picker';
import Tags from '../Component/Tag'
import CustomButton from '../Component/Button'
import SearchInput from '../Component/SearchBar'
class AddItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        search : "",
        slogan : this.props.navigation.getParam('slogan')
    }
  }
  static navigationOptions = {
    header: null
  }
  _openPicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      this.setState({image : res.uri})
  
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  render () {
    console.log()                   
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={ this.state.slogan === 'Create Classified Adds' ?  'CREATE CLASSIFIED ADDS' :  'UPLOAD'} />
        <ScrollView>
          <Text style = {styles.videoSlogan}> {this.state.slogan} </Text>
          <TouchableOpacity onPress = {this._openPicker} style = {styles.videoContainer}>
            <Icon type = {'font-awesome'} name= {'plus-circle'} color = {'#fff'} size = {50} />
            </TouchableOpacity>
            <CustomInput label = {'Title'} 
              labelStyle = {{color : themeColor , fontSize: 14, paddingVertical: 2,}}
              placeholder = {'Title'} textChange = {(text)=> console.log(text)}/> 
              <Tags tags = {['12' , '121323' , '122' , '1231312312' , '122' , '1231312312', '122' , '1231312312']} />
              <View style={styles.buttonsView}>
             <CustomButton title={'Cancel'} onPress = {()=>this.props.navigation.navigate('Home')} />
             <CustomButton 
             onPress = {()=>{
              this.state.slogan === 'Create Classified Adds' ? 
              this.props.navigation.navigate('AdSucces') : 
              null
             }}
             title={ this.state.slogan === 'Create Classified Adds' ?  'NEXT' :  'Post'} />
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  videoSlogan : {fontWeight : "bold" , fontSize : 20 , marginHorizontal  : 28  , 
  textAlign : "center" , color : themeColor , marginVertical :25},
  videoContainer : {height : 200 , backgroundColor : 'skyblue' , justifyContent : 'center' , alignItems : 'center'},
  buttonsView : { flexDirection : 'row' , justifyContent : 'space-around', marginVertical: 26 , marginHorizontal : '5%' }
})
export default withNavigation(AddItem)
 