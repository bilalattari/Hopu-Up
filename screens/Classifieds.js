import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {themeColor} from '../Constant/index'
import { withNavigation } from 'react-navigation'
class Classifieds extends React.Component {
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
        <CustomHeader title={'CLASSIFIEDS'}/>
             <CustomInput  
             containerStyle = {{width : '70%' , alignSelf: 'center', marginVertical: 10, marginTop:  '15%',}}
              placeholder = {'Find'} textChange = {(text)=> console.log(text)}/>
              <CustomInput  
              keyboardType = {'numeric'}
             containerStyle = {{width : '70%' , alignSelf: 'center', marginVertical: 10,}}
              placeholder = {'Zipcode'} textChange = {(text)=> console.log(text)}/>
        <View style={{ marginTop: 24 }}>
          <CustomButton title={'SEARCH'}  containerStyle = {{width : 180}} 
          onPress = {()=> navigation.navigate('ClassifiedsItems')} />
        </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amountInput : {width : '92%' , borderColor : '#D8D8D8' ,borderRadius : 5,
  borderWidth : 0.5 , alignSelf: 'center' , marginLeft: 17, paddingLeft : 6},
  pickerHeading: { paddingLeft: '6%', fontWeight: '700' , marginTop : 6}
})
export default withNavigation(Classifieds)
