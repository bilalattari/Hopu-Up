import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,
    Image
} from 'react-native';
import {withNavigation} from 'react-navigation'
import CustomButton from '../Component/Button'
import Logo from '../Component/LogoImage'
import {themeColor} from '../Constant/index'
import Slogan from '../Component/Slogan'
 class LandingScreen extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      const {navigation} = this.props
        return (
            <View style={styles.container}>
               <Logo />
                 <Slogan />
                 <View style = {{flexDirection : "row" , justifyContent : "space-around"}}>
                     <CustomButton  title = {'Login'} onPress = {()=> navigation.navigate("SignIn")}/>
                     <CustomButton  title = {'Sign Up'} onPress = {()=> navigation.navigate("CreateAccount")}/>
                     </View>
            </View>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent : 'space-around',
        
        flexDirection: 'column',
      },
      sloganText : {fontWeight : "bold" , color :themeColor , fontSize : 20 ,
      marginHorizontal : "10%" , textAlign : "center"},
      logo : {height : 300 , width : 300, resizeMode  : "stretch" , alignSelf : "center" }
    })
    export default withNavigation(LandingScreen)
