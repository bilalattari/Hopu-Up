import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,FlatList,ScrollView,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation , NavigationEvents}  from 'react-navigation'
import { Icon } from 'react-native-elements';
import { themeColor } from '../Constant';
import DocumentPicker from 'react-native-document-picker';

 class Messages extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image : ''
    }
  }
  static navigationOptions = {
    header: null,
};

messageList = ( item )=> <TouchableOpacity
onPress = {()=> this.props.navigation.navigate("Chat")}
style = {styles.messageContainer}>
<Image source = {require('../assets/avatar.png')} 
style = {styles.msgImage} />
<View style = {{flex : 1 }}>
<View style = {styles.msgName}> 
<Text style = {styles.name}>User Name</Text>
<Text style = {{ paddingRight : 5 , color : 'grey'}}>5h</Text>
</View>
<Text style ={{paddingLeft : 5}}>dashkhdskja dashkhdskjadashkhdskjadashkhdskja dashkhdskja</Text>
</View>
</TouchableOpacity>


render() {
      const {navigation} = this.props.navigation
        return (
          <View>
              <CustomHeader  home = {true}  title = {'Messages'} />
                   <FlatList
                   data = {['1' , '2' , '3','4','5' , '6']}
                   renderItem  ={({data , index})=> this.messageList(data)}
                   />
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      messageContainer : {minHeight : 100 , flexDirection : 'row' , alignItems : "center", 
      borderBottomColor : themeColor , borderBottomWidth : 0.5},
      msgImage : {height : 55 , width : 55 , borderRadius : 25 , marginHorizontal : 10},
      msgName : {flexDirection  : "row" , justifyContent : 'space-between' ,
      marginHorizontal : 5 , height : 35 , alignItems : "center" },
      name : {fontWeight : 'bold' , fontSize : 18 },

    })
    export default withNavigation(Messages)
