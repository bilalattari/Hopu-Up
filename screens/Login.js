import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,TouchableOpacity,
    Text,ScrollView
} from 'react-native';
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import {withNavigation} from 'react-navigation'
import Logo from '../Component/LogoImage'
import {themeColor} from '../Constant/index'
import Slogan from '../Component/Slogan'
 class Login extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
    render() {
      const {navigation} = this.props
        return (
            <ScrollView style={styles.container}>
              <CustomHeader title = {'Login'} />
              <Logo height={250}/>
              <Slogan />
              <CustomInput label = {'Email'} 
              labelStyle = {{color : themeColor , fontSize: 14, paddingVertical: 2,}}
              placeholder = {'Email Address'} textChange = {(text)=> console.log(text)}/>
              <CustomInput label = {'Password'} 
              secureTextEntry = {true}
              labelStyle = {{color : themeColor , fontSize: 14, paddingVertical: 2,}}
              placeholder = {'Password'} textChange = {(text)=> console.log(text)}/>
              <View style = {{marginVertical : 41}}>
              <CustomButton title = {'Login'} 
              onPress = {()=> navigation.navigate('App')}/>
              <TouchableOpacity 
              onPress = {()=> navigation.navigate('ForgotPassword')}
              style = {{height : 40 , padding : 8 , paddingRight : 16  , alignSelf : 'center' ,
               }}>
              <Text style = {{color : themeColor}} >Forget Password</Text>
                </TouchableOpacity>
                </View>
          </ScrollView>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    })
    export default withNavigation(Login)
