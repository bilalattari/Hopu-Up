import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,Image,
    Text,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {withNavigation} from 'react-navigation'
class ControlPanel extends React.Component {
  constructor(props){
    super(props)
    this.setState = {
    }
  }
  static navigationOptions = {
    header: null,
};
drawerheading = (icon , text , route )=>{
  let navigation = this.props.navigation
    return(
        <TouchableOpacity
        onPress = {()=> navigation.navigate(route) }
        style={{flexDirection : 'row'  , alignItems : 'center'  , margin : 8 }}>
            <Icon name = {icon} size = {23} style = {{marginHorizontal : 5}} />
            <Text style = {{fontSize : 18}}> {text} </Text>
            </TouchableOpacity>
    )
}
    render() {
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
                <View style={{flex : 2 , justifyContent : 'center' , alignItems : "center"}}>
                    <Image source = {require('../assets/avatar.png' )} 
                    style = {{height : '70%' , width : "70%" , resizeMode : 'contain' , borderRadius  : 125}} />
                    </View>
                    <View style={{flex : 3}}>
                        {this.drawerheading('play' , 'Home' , 'Play')}
                        {this.drawerheading('play' , 'My Profile' , 'Profile')}
                        {this.drawerheading('play' , 'Transactions' , 'Transactions')}
                        {this.drawerheading('play' , 'Transfer Funds' , 'TransferFunds')}
                        {this.drawerheading('play' , 'Request Withdrawel' , 'WithdrawFunds')}
                        {this.drawerheading('play' , 'Upload Documents' , 'Play')}
                        {this.drawerheading('play' , 'Change Account Password' , 'ChangeAccountPassword')}
                        {this.drawerheading('play' , 'Add new TA account' , 'AddNewAccount')}
                    </View>
           </View>
        );
      }   
    }   
 
    export default withNavigation(ControlPanel);
    
    const styles = StyleSheet.create({
      container: {
          flex : 1,
        flexDirection: 'column',
        backgroundColor : 'white'
      },
    })
