import React, { Component } from 'react'
import { Image , StyleSheet } from 'react-native'
import {themeColor} from '../Constant/index'
export default Logo = props => 
<Image source = {require("../assets/hopuplogo.png")}
style = {[styles.logo , {height : props.height ? props.height : 300 }]} />



const styles = StyleSheet.create({
    logo : {height : 300 , width : 300, resizeMode  : "contain" , alignSelf : "center" }
  })