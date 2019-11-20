import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation , NavigationEvents}  from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { themeColor } from '../Constant';


let HomePageTitle = (props)=> 
        <TouchableOpacity  {...props}
        style  = {{alignSelf : 'center' ,flexDirection : 'row' , width : '70%' , height : 30 , alignItems : 'center'  , marginVertical : 3}}>
                  <Icon color = {themeColor} type = {props.type} name = {props.name} containerStyle = {{width : '20%'}}/>
                  <Text style = {{color :themeColor   , fontSize : 20 }}> {props.title} </Text>
                </TouchableOpacity>
 class Transactions extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
closeControlPanel = () => {
  this._drawer.close()
};
openControlPanel = () => {
  this._drawer.open()
};
navigate = (route)=> this.props.navigation.navigate(route)
    render() {
      const {navigation} = this.props

        return (
          <View>
              <CustomHeader  home = {true}  title = {'HOME'} navigation = {this.props.navigation} />
              <View style = {{alignSelf : 'center' , marginVertical : 6}}>
                <TouchableOpacity onPress = {()=> navigation.navigate("Profile")}>
              <Image source = {require('../assets/avatar.png')} 
               style = {{height : 120 , width : 120 , resizeMode : 'contain' ,  borderRadius : 12 }}/>
                  </TouchableOpacity>
               <Text style = {{textAlign : 'center' , fontSize : 18 , marginVertical : 6    }}>User name</Text>
                </View>
                <HomePageTitle onPress = {()=> this.navigate("ManageVideoScreen")} type = {'material'} name = {'play-circle-outline'}title  = {'Managae Videos'} />
                <HomePageTitle onPress = {()=> this.navigate("ManageProductScreen")} type = {'font-awesome'} name = {'bath'}title  = {'Managae Products'} />
                <HomePageTitle onPress = {()=> this.navigate("Classifieds")} type = {'font-awesome'} name = {'file'}title  = {'Managae Classified'} />
                <HomePageTitle onPress = {()=> this.navigate("Order")} type = {'font-awesome'} name = {'truck'}title  = {'Orders'} />
                <HomePageTitle onPress = {()=> this.navigate("Notifications")} type = {'font-awesome'} name = {'bell'}title  = {'Notofications'} />
                <HomePageTitle onPress = {()=> this.navigate("Conditions")} type = {'font-awesome'} name = {'file'}title  = {'Terms and Conditions'} />
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default withNavigation(Transactions)
