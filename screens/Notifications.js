import React, { Fragment } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Switch
} from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import DocumentPicker from 'react-native-document-picker'
const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2GaDkRQ5FV83CxoXIu0tN2oVNIN8ANTLdnb4j00c-zYOVyBD'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notification : false,
      emailNotification : false
    }
  }
  static navigationOptions = {
    header: null
  }

  _Icon = (name) =>
  <TouchableOpacity >
  <Icon type = {'font-awesome'} name = {name} 
  color = {themeColor} size = {26} 
  containerStyle = {styles.buttonContainer} />
  </TouchableOpacity>

  render () {
    const { navigation } = this.props
    const {notification , emailNotification} = this.state
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'NOTIFICATIONS'} />
        <View style = {[styles.rowContainer , {borderBottomColor : themeColor , borderBottomWidth : 1}]}>
            <Text style = {styles.heading}>Sound </Text>
            <View style = {{flexDirection : 'row'}}>
              {this._Icon("volume-up")}
              {this._Icon("volume-off")}
              {this._Icon("mobile")}
             </View>
            </View>
            <View style = {[styles.rowContainer , {borderBottomColor : themeColor , borderBottomWidth : 1}]}>
            <Text style = {styles.heading}>Notification </Text>
            <View style = {{flexDirection : 'row'}}>
              <Switch  value = {notification}  thumbColor  ={themeColor} 
              trackColor = {{true : 'skyblue' , false : '#ccc'}}onValueChange = {()=> this.setState({notification : !notification})}/>
             </View>
            </View>
            <View style = {[styles.rowContainer , {borderBottomColor : themeColor , borderBottomWidth : 1}]}>
            <Text style = {styles.heading}>Email Notification </Text>
            <View style = {{flexDirection : 'row'}}>
              <Switch  value = {emailNotification}  thumbColor  ={themeColor} 
              trackColor = {{true : 'skyblue' , false : '#ccc'}}onValueChange = {()=> this.setState({emailNotification : !emailNotification})}/>
             </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  rowContainer : {flexDirection : 'row' , paddingHorizontal : 12 , alignItems : 'center' , minHeight : 90 , justifyContent : 'space-between'},
  heading : {fontSize : 18 , color : themeColor , fontWeight : 'bold'},
  buttonContainer : {marginHorizontal : 2 , backgroundColor : "#D8F0FF" ,
  borderRadius : 25 , height : 45 , width : 45, justifyContent : "center"},

})
export default withNavigation(Cart)
 