import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {themeColor} from '../Constant/index'
import { withNavigation } from 'react-navigation'
class AdSucces extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    header: null
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }


  render () {
    const state = this.state
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <CustomHeader title={'AD SUCCESS'}/>
        <View style = {{flex : 1 , justifyContent : 'center'}}>
          <Text style = {styles.videoSlogan}> Classified Add Posted Succesfully </Text>
          <Text style = {[styles.videoSlogan , {fontSize : 16}]}> Yor Add Will Be Up for 3 weaks </Text>

        <View style={{ marginTop: 24 }}>
          <CustomButton title={'POST AGAIN'}  containerStyle = {{width : '90%'}} 
          onPress = {()=>navigation.navigate("AddItem" , {slogan : 'Create Classified Adds'})} />
        </View>
            </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoSlogan : {fontWeight : "bold" , fontSize : 25 , marginHorizontal  : 28  , 
  textAlign : "center" , color : themeColor , marginVertical :25},
  amountInput : {width : '92%' , borderColor : '#D8D8D8' ,borderRadius : 5,
  borderWidth : 0.5 , alignSelf: 'center' , marginLeft: 17, paddingLeft : 6},
  pickerHeading: { paddingLeft: '6%', fontWeight: '700' , marginTop : 6}
})
export default withNavigation(AdSucces)
