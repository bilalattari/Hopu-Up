import React, { Fragment } from 'react';
import {
    StyleSheet,TextInput,
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
 class Chat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    header: null,
};

render() {
      const {navigation} = this.props.navigation
        return (
          <View style = {{flex : 1}}>
              <CustomHeader  home = {true}  title = {'Messages'} />
              <ScrollView>
                   <FlatList
                   data = {['1' , '2' , '3','4','5' , '6']}
                   contentContainerStyle = {{flex : 1}}
                   renderItem  ={({data , index})=> 
                   <View style = {{minHeight : 60 , flexDirection : "row" , alignItems : "center" , flex  : 1 ,
                    justifyContent : index%2 == 0 ? "flex-start" : "flex-end"}}>
                        {
                         index%2 == 0   ?
                         <Image source = {require('../assets/avatar.png')} 
                       style = {styles.msgImage} />
                         :
                         null   
                        }
                        {
                            index%2 == 0   ?
                            <Icon type = {"font-awesome"} name = {"angle-left"} color = {themeColor} 
                            containerStyle = {{marginRight : -4}} />
                            :
                            null
                        }
                       <Text style = {[{padding : 12 , borderColor : "#ccc" , borderWidth : 0.5 , 
                       backgroundColor : index%2 == 0 ?  themeColor : "#fff" , color : index%2 != 0 ?  themeColor : "#fff" , width : "60%"}]}>
                           Cahattttttttttttt Cahattttttttttttt  </Text>
                           {
                         index%2 != 0   ?
                         <Image source = {require('../assets/avatar.png')} 
                       style = {styles.msgImage} />
                         :
                         null   
                        }
                       </View>
                }
                   />
                  </ScrollView>
                   <View style = {styles.inputContainer}>
                        <TextInput placeholder = {'Say Something'} placeholderTextColor = {"skyblue"}
                         style = {{height : 60 , width : '90%' }} />
                         <TouchableOpacity style = {{width : '10%',}}>
                         <Icon type = {'font-awesome'} name = {'arrow-right'} color = {themeColor} containerStyle = {{ alignSelf : 'center'}}  />
                             </TouchableOpacity>
                       </View>
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      msgImage : {height : 41 , width : 41 , borderRadius : 5 , marginHorizontal : 10},
      inputContainer : {justifyContent : "flex-end" , flexDirection : "row" , height : 50 ,
      borderTopColor : themeColor , borderTopWidth : 0.5 , alignItems : 'center'},

    })
    export default withNavigation(Chat)
