import React, { Fragment } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { Picker } from 'native-base'
import { withNavigation } from 'react-navigation'
import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel'
import { Table, Row, Rows } from 'react-native-table-component'
import { ScrollView } from 'react-native-gesture-handler'
class AddNewAccount extends React.Component {
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

  render () {
    let data = ['1', '2', '3']
    const state = this.state
    return (
      <View style={styles.container}>
        <CustomHeader
          title={'ADD TRADING ACCOUNT'}
          openMenu={() => this.props.navigation.navigate('Home')}
        />
        <View style = {{marginTop : '10%'}}>
        {this.pickerHeading('TRADING SERVER')}
        <View style={styles.chunkPicker}>
          <Picker
            note
            mode='dropdown'
            style={{ height: 45 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label='LIVE-MTS' value='deposit' />
            <Picker.Item label='LIVE-UTS' value='withdrawel' />
            <Picker.Item label='LIVE-YTS' value='transfer' />
          </Picker>
        </View>
        {this.pickerHeading('BASE CURRENCY')}
        <View style={styles.chunkPicker}>
          <Picker
            note
            mode='dropdown'
            style={{ height: 45 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label='USD' value='deposit' />
            <Picker.Item label='EURO' value='withdrawel' />
            <Picker.Item label='POUNDS' value='transfer' />
          </Picker>
        </View>


        <View style={{ marginVertical: 12 }}>
          <CustomButton title={'Add New Account'} containerStyle = {{width : 180}}  />
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
  pickerHeading: { paddingLeft: '9%', paddingVertical: 8, fontWeight: '700' }
})
export default withNavigation(AddNewAccount)
