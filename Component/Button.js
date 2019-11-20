import React, { Component } from 'react'
import { Button  , Icon } from 'react-native-elements'
import {themeColor} from '../Constant/index'
export default CustomButton = props => 
<Button title={props.title}
icon={props.icon ?
    <Icon
    style = {{padding : 6}}
      name={props.icon}
      type = {font-awesome}
      size={15}
      color="white"
    /> : null
  }
  {...props}
  containerStyle = {[{alignSelf : 'center' , width : 140 } , props.containerStyle]}
  buttonStyle = {{backgroundColor : props.backgroundColor ? props.backgroundColor : themeColor , height : 50}}
/>
