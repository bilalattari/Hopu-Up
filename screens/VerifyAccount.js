import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { Picker } from 'native-base'
import { withNavigation } from 'react-navigation'
import {Icon} from 'react-native-elements'
import DocumentPicker from 'react-native-document-picker';

class VerifyAccount extends React.Component {
constructor (props) {
    super(props)
    this.state = {
    selected: 'deposit'
    }
}
static navigationOptions = {
    header: null
}

onValueChange (value) {
    this.setState({
    selected: value
    })
}

pickerHeading = text => <Text style={styles.pickerHeading}>{text}</Text>

uploadDoc = async ()=>{
    try {
        const res = await DocumentPicker.pick({
          type: 'application/pdf',
        });
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
}
render () {
    let data = ['1', '2', '3']
    const state = this.state
    return (
    <View style={styles.container}>
        <CustomHeader
        title={'Verify Your Account'}
        openMenu={() => this.props.navigation.navigate('Home')}
        />
        <View style = {{marginTop : '10%'}}>
        {this.pickerHeading('Document Type')}
        <View style={styles.chunkPicker}>
        <Picker
            note
            mode='dropdown'
            style={{ height: 45 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
        >
            <Picker.Item label='Proof Of Id' value='deposit' />
            <Picker.Item label='Proof Of Id' value='withdrawel' />
            <Picker.Item label='Proof Of Id' value='transfer' />
        </Picker>
        </View>
        <TouchableOpacity onPress = {this.uploadDoc} style = {styles.uploadDocument}>
            <Icon type = {'font-awesome'} name = {'plus'} size = {40} color = {'#cccccc'} />
            <Text style = {styles.uploadText} >Upload Document </Text>
            </TouchableOpacity>
        <View style={{ marginVertical: 12 }}>
        <CustomButton title={'Proceed'} backgroundColor={'green'} />
        </View>
        </View>
    </View>
    )
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
amountInput : {width : '65%' , borderColor : '#D8D8D8' ,borderRadius : 5,
borderWidth : 0.5 , alignSelf: 'center' , marginLeft: 17,},
chunkPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D8D8D8',
    alignSelf: 'center',
    width: '83%'
},
uploadDocument : {height : 160 , width : '85%' , alignSelf : 'center' , marginVertical : 25, 
borderColor : 'grey' , borderWidth : 0.5 , justifyContent : 'center' , alignItems : 'center' , borderRadius : 12},
pickerHeading: { paddingLeft: '9%', paddingVertical: 8, fontWeight: '700' },
uploadText : {color : '#cccccc' , fontSize : 15  , marginTop : 12}
})
export default withNavigation(VerifyAccount)
