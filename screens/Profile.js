import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation , NavigationEvents}  from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { Icon } from 'react-native-elements';
import { themeColor } from '../Constant';
import DocumentPicker from 'react-native-document-picker';

 class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image : ''
    }
  }
  static navigationOptions = {
    header: null,
};
_openPicker = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
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
render() {
      const {navigation} = this.props.navigation
        return (
          <View>
              <CustomHeader  home = {true}  title = {'User Name'} />
              <Text style = {styles.header}>Change Picture</Text>
                {
                  this.state.image !== '' ?
                  <Image source = {{uri : this.state.image }}  style = {[styles.imageView , {resizeMode : "contain" , backgroundColor : '#ccc'}]}/>
                  :
                <TouchableOpacity onPress = {this._openPicker} style = {styles.imageView}>
                 <Icon type = {"font-awesome"} name  = {"image"} color = {"#fff"} size  = {30} />
                 </TouchableOpacity>
                }
                 <View style = {{marginVertical : 21}}>
                   <CustomButton title = {"Upload"} />
                   </View>
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
  header : {color : themeColor , padding : 12 , fontWeight: "800" ,fontSize : 20 , textAlign : "center" },
  imageView : {height : 180 , width : 160 , alignItems : "center" ,
  justifyContent : "center" ,alignSelf  : "center",  borderRadius : 5 , 
  backgroundColor : 'skyblue'},
    })
    export default withNavigation(Profile)
