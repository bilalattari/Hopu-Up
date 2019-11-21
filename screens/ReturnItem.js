import React, { Fragment } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,Image
} from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { themeColor } from '../Constant'
import DocumentPicker from 'react-native-document-picker';
import {Icon} from 'react-native-elements'
class ReturnItem extends React.Component {
  constructor (props) {
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
  render () {
    const { navigation } = this.props
    return (
      <ScrollView style = {{flex  :1}} stickyHeaderIndices={[0]}>
        <CustomHeader home title={'RETURN'}
        navigation = {navigation} />
               {
                   this.state.image !== '' ?
                   <Image source = {{uri : this.state.image }}  style = {[styles.imageView , {resizeMode : "contain" , backgroundColor : '#ccc'}]}/>
                   :
                   <TouchableOpacity onPress = {this._openPicker} style = {styles.imageView}>
                 <Icon type = {"font-awesome"} name  = {"image"} color = {"#fff"} size  = {30} />
                 </TouchableOpacity>
                }
                <CustomButton  title = {'Upload Photo'} containerStyle = {{width : '45%' , marginVertical: 25}} />
                <CustomInput multiline = {true} numberOfLines = {6} 
                placeholder = {'Describe Why You Woulod Like To Return'}
                inputContainerStyle = {{height : 120 ,borderWidth : 1 , borderColor :themeColor }} />
                <CustomButton  title = {'Terms And Conditions'} containerStyle = {{width : '60%' , margin: 8 , alignSelf: 'flex-end', }} />
                <CustomButton  title = {'Return'} containerStyle = {{width : '45%' , margin: 8 , alignSelf: 'flex-end', }} />


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageView : {height : 180 , width : 160 , alignItems : "center" ,
  justifyContent : "center" ,alignSelf  : "center",  borderRadius : 5 , 
  backgroundColor : 'skyblue' , marginTop : 12},
})
export default withNavigation(ReturnItem)
