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
import CustomButton from '../Component/Button'
import SearchInput from '../Component/SearchBar'
import Comment from '../Component/Comment'
import UserView from '../Component/UserView'
class Products extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        search : ""
    }
  }
  static navigationOptions = {
    header: null
  }
  _Icon = (name) =>
  <TouchableOpacity >
  <Icon type = {'font-awesome'} name = {name} 
  color = {themeColor} size = {15} 
  containerStyle = {styles.buttonContainer} />
  </TouchableOpacity>
  render () {                   
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'STORE'} add = {true} onClickAdd = {()=> this.props.navigation.navigate("AddItem" , {slogan : 'Become a Seller on Hope Up'})} />
        <SearchInput value  = {this.state.search}  onChangeText = {(text)=> this.setState({search : text})}
         placeholder= {"Search Product"} />
        <ScrollView>
            <FlatList 
            data = {['1' ,'2' , '3']}
            keyExtractor = {(item)=> item}
            renderItem = {({item , index})=>
        <View>
            <View style = {styles.videoContainer}>
                 <TouchableOpacity>
                <Icon type = {"font-awesome"} name  ={"shopping-bag"} color = {"#fff"} size = {50} />
                 </TouchableOpacity>
            </View>
            <View style = {styles.videoTitleRow}>
                <Text style = {styles.videoTitle}>Product Title</Text>
                <View style = {{flexDirection : "row" , }}>
                {this._Icon("heart")}
                {this._Icon("flag")}
                {this._Icon("envelope")}
                {this._Icon("shopping-bag")}
                </View>
                </View>

                <View style = {{paddingHorizontal : 12 , marginVertical : 12}}>
                <Text style = {[styles.videoTitle ]}>Description</Text>
                <Text style = {{color : themeColor}}>Lorem Ispum Delumgs Lorem Ispum Delumgs Lorem Ispum Delumgs Lorem Ispum Delumgs Lorem Ispum Delumgs </Text>
                    </View>
                <UserView userName  ={'User Name'} />
                <Text style = {[styles.videoTitle  , {paddingLeft : 12 , marginVertical : 12}]}>COMMENTS</Text>
                {
                    ['1' ,'2' , '3'].map((data , index)=> <Comment index = {index} text = {'Lorem ISpum Lorem ISpum Lorem ISpum Lorem ISpum'} />)
                }
            </View>
            }
            />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  videoIcon : {height : 20 , width : 20 , marginHorizontal : 2, borderRadius : 25 , backgroundColor : "skyblue"},
  videoTitle : {fontWeight : "bold" , color : themeColor , fontSize : 16},
  videoTitleRow : {flexDirection : "row" , justifyContent : "space-between" , paddingHorizontal : 15 ,
   paddingVertical : 5 , marginVertical : 2, backgroundColor : 'skyblue'},
  videoContainer : {height : 200 , width : "100%" , justifyContent : "center" , alignItems : "center" ,
  backgroundColor : "skyblue"},
  buttonContainer : {marginHorizontal : 2 , height : 20 , width : 20, justifyContent : "center"},
})
export default withNavigation(Products)
 