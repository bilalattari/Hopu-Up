import React, { Fragment } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,ScrollView,
} from 'react-native'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import CustomButton from '../Component/Button'
import {  } from 'react-native-gesture-handler';

class Conditions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    header: null
  }

  render () {                   
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'TERMS & CONDITIONS'} />
        <ScrollView>
        <Text style = {{marginHorizontal : 15 , color  : themeColor , fontSize : 16 , padding : 12}}>sdasdasdsadasdsa sdasdasdsadasdsa sdasdasdsadasdsa
        sdasdasdsadasdsa sdasdasdsadasdsa sdasdasdsadasdsa sdasdasdsadasdsa sdasdasdsadasdsa sdasdasdsadasdsa
        sdasdasdsadasdsa sdasdasdsadasdsa </Text>
            </ScrollView>

        <View style = {{marginVertical : 1 , justifyContent : "flex-end"}}>
              <CustomButton title  = {'ACCEPT'} containerStyle = {{width : '86%'}} />
              </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
})
export default withNavigation(Conditions)
 