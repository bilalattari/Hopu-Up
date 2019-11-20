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
class Videos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        search : ""
    }
  }
  static navigationOptions = {
    header: null
  }

  render () {                   
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader home title={'VIDEOS'} add = {true} onClickAdd = {()=> this.props.navigation.navigate("AddItem" , {slogan : 'Uploaded Videos Should Inspire and Bread Hope'})} />
        <SearchInput value  = {this.state.search}  
        onChangeText = {(text)=> this.setState({search : text})} 
        placeholder= {"Search Videos"} />
        <ScrollView>
            <FlatList 
            data = {['1' ,'2' , '3']}
            keyExtractor = {(item)=> item}
            renderItem = {({item , index})=>
        <View>
            <View style = {styles.videoContainer}>
                 <TouchableOpacity>
                <Icon type = {"font-awesome"} name  ={"play-circle"} color = {"#fff"} size = {50} />
                 </TouchableOpacity>
            </View>
            <View style = {styles.videoTitleRow}>
                <Text style = {styles.videoTitle}>Video Title</Text>
                <View style = {{flexDirection : "row"}}>
                    <View style = {styles.videoIcon}/>
                    <View style = {styles.videoIcon}/>
                    <View style = {styles.videoIcon}/>
                </View>
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
  videoTitleRow : {flexDirection : "row" , justifyContent : "space-between" , marginHorizontal : 15 ,
   marginVertical : 6},
  videoContainer : {height : 200 , width : "100%" , justifyContent : "center" , alignItems : "center" ,
  backgroundColor : "skyblue"},
  msgImage : {height : 45 , width : 45 , borderRadius : 7 , marginHorizontal : 10},
})
export default withNavigation(Videos)
 