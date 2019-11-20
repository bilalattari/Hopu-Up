import React, { Component } from 'react'
import { Image , StyleSheet , View , Text} from 'react-native'
import {themeColor} from '../Constant/index'
export default Logo = props => 
    props.logo ? 
<View style = {{height : props.height ? props.height : 300}}>
<Image source = {require("../assets/hopuplogo.png")}
style = {[styles.logo , {height : props.height ? props.height : 300 }]} />
  <Text style = {{color : themeColor , fontSize : 18  , position : 'absolute' , top : '60%' , left : '11%' ,
   fontWeight : 'bold'}}>[LOGO]</Text>
</View >
  : 
  <Image source = {require("../assets/hopuplogo.png")}
  style = {[styles.logo , {height : props.height ? props.height : 300 }]} />
const styles = StyleSheet.create({
    logo : {height : 300 , width : 300, resizeMode  : "contain" , alignSelf : "center" }
  })