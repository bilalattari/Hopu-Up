import React, { Fragment } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import CustomHeader from '../Component/header'
import { withNavigation, NavigationEvents } from 'react-navigation'
import { themeColor } from '../Constant'
import Tags from '../Component/Tag'
class RepostClassified extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigation } = this.props.navigation
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <CustomHeader home title={'REPOST CLASSIFIEDS'} />
        <Image 
        source = {require('../assets/download.jpg')}
        style = {{height : 200  , width : '100%' , backgroundColor : themeColor,}} />
        <CustomInput
          label={'Title'}
          labelStyle={styles.labelStyle}
          placeholder={'Title'}
          textChange={text => console.log(text)}
        />
        <CustomInput
          label={'Description'}
          labelStyle={styles.labelStyle}
          placeholder={'Description'}
          multiline
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: themeColor,
            height: 120,
            padding: 8
          }}
          textChange={text => console.log(text)}
        />
        <Tags tags = {['12' , '121323' , '122' , '1231312312']} />
        <View style={{ marginVertical: 26 }}>
          <CustomButton title={`TOTAL $${'1.80'}`} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
    backgroundColor: themeColor
  },
  labelStyle :{ color: themeColor, fontSize: 14, paddingVertical: 2 }
})
export default withNavigation(RepostClassified)
