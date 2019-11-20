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
import Tags from '../Component/Tag'

const url  =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRI2GaDkRQ5FV83CxoXIu0tN2oVNIN8ANTLdnb4j00c-zYOVyBD'
class Favourites extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigation } = this.props.navigation
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <CustomHeader home title={'FAVOURITES'} />
          <Text style = {styles.header}>Store</Text>
          <FlatList 
          data = {['1' , '2']}
          keyExtractor = {(item)=> item}
          renderItem = {({item , index})=> 
          <ProductDescription title  = {"Medicine"} url = {url} quantity = {"10"} 
           description = {"The description is about The description is about The description is about The description is about" } />}
          />
           
          <Text style = {styles.header}>Classified</Text>
          <FlatList 
          data = {['1' , '2']}
          keyExtractor = {(item)=> item}
          renderItem = {({item , index})=> 
          <ProductDescription title  = {"Medicine"} url = {url} quantity = {"10"} 
           description = {"The description is about The description is about The description is about The description is about" } />}
          />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
    backgroundColor: themeColor
  },
  labelStyle :{ color: themeColor, fontSize: 14, paddingVertical: 2 },
  header : {color : themeColor , padding : 12 , fontWeight: "800" ,fontSize : 20 }
})
export default withNavigation(Favourites)
