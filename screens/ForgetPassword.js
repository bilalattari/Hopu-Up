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
import { Icon } from 'react-native-elements';
export default class ForgetPassword extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    header: null,
};
    render() {
        return (
          <ScrollView style={styles.container}>
          <CustomHeader title = {'FORGOT PASSWORD'} />
          <Logo height={250}/>
           <Slogan />
           <View style = {{flexDirection : 'row' }}>
             <View style = {{width : '83%'}}>
             <CustomInput label = {'Email'} 
              labelStyle = {styles.labelStyle}
              placeholder = {'Email Address'} textChange = {(text)=> console.log(text)}/>
               </View>
              <Icon type = {'font-awesome'} name = {'arrow-circle-right'} size = {40}
               color = {themeColor} containerStyle = {{ alignSelf : 'center',marginTop  : 18, 
               justifyContent : 'center'  }} />
              </View>
               <CustomInput label = {'Enter Code Sent On Email'} 
              labelStyle = {styles.labelStyle}
              placeholder = {'Code'} textChange = {(text)=> console.log(text)}/>
              <CustomInput label = {'Password'} 
              secureTextEntry = {true}
              labelStyle = {styles.labelStyle}
              placeholder = {'Password'} textChange = {(text)=> console.log(text)}/>
              <CustomInput label = {'Confirm Password'} 
              secureTextEntry = {true}
              labelStyle = {styles.labelStyle}
              placeholder = {'Confirm Password'} textChange = {(text)=> console.log(text)}/>
                          <View style = {{marginVertical : 12}}>
              <CustomButton title = {'LOGIN'} />
                </View>
          </ScrollView>
        );
      }   
    }   
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      labelStyle : {color : themeColor , fontSize: 14, paddingVertical: 2,}
    })
