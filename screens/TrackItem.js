import React, { Fragment } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView
} from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { themeColor } from '../Constant'
import ProductDescription from '../Component/ProductDescription'

const url  =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2GaDkRQ5FV83CxoXIu0tN2oVNIN8ANTLdnb4j00c-zYOVyBD'
class TrackItem extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigation } = this.props
    return (
      <View style = {{flex  :1}} stickyHeaderIndices={[0]}>
        <CustomHeader home title={'ON TRACK'}
        navigation = {navigation} />
        <CustomButton 
        iconName = {'truck'}
        title = {'On Track'} containerStyle = {{width : '80%' , marginVertical: 25,}} />

        <View style = {{flexDirection : 'row' , paddingHorizontal : 8}}>
            <View style = {{flex : 2.5 , borderRightColor : themeColor , borderRightWidth : 1 , 
                height : 80 }}>
            <Text style = {{color : '#fff' , fontSize : 16 , textAlign : 'center' ,
             padding : 2 , backgroundColor : themeColor , marginRight :12 ,borderRadius : 2}}>Seller Address</Text>
            <View style = {{height : 15 , width : 15  , borderRadius : 25 , backgroundColor : themeColor,
                 position:  'absolute', right:  -8, }}>
                </View>
            </View>
            <View style = {{flex : 4}}>
                <Text style = {{paddingLeft : 12}}>North Nazimabad Karachi
                North Nazimabad Karachi North Nazimabad Karachi </Text>
            </View>
            </View>
            <View style = {{flexDirection : 'row' , paddingHorizontal : 8}}>
            <View style = {{flex : 2.5 , borderRightColor : themeColor , borderRightWidth : 1 , 
                height : 80 }}>
            <Text style = {{color : '#fff' , fontSize : 16 , textAlign : 'center' ,
             padding : 2 , backgroundColor : themeColor , marginRight :12 ,borderRadius : 2}}>Delivery Date</Text>
            <View style = {{height : 15 , width : 15  , borderRadius : 25 , backgroundColor : themeColor,
                 position:  'absolute', right:  -8, }}>
                </View>
            </View>
            <View style = {{flex : 4}}>
                <Text style = {{paddingLeft : 12}}> {new Date().toLocaleDateString()} </Text>
            </View>
            </View>
            <View style = {{flexDirection : 'row' , paddingHorizontal : 8}}>
            <View style = {{flex : 2.5 , borderRightColor : themeColor , borderRightWidth : 1 , 
                height : 80 }}>
            <Text style = {{color : '#fff' , fontSize : 16 , textAlign : 'center' ,
             padding : 2 , backgroundColor : themeColor , marginRight :12 ,borderRadius : 2}}>Buyer Address</Text>
            <View style = {{height : 15 , width : 15  , borderRadius : 25 , backgroundColor : themeColor,
                 position:  'absolute', right:  -8, }}>
                </View>
            </View>
            <View style = {{flex : 4}}>
                <Text style = {{paddingLeft : 12}}>North Nazimabad Karachi
                North Nazimabad Karachi North Nazimabad Karachi </Text>
            </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
export default withNavigation(TrackItem)
