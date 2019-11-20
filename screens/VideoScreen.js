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
import ControlPanel from './ControlPanel'
import { Icon } from 'react-native-elements'
import { themeColor } from '../Constant'
import Video from 'react-native-video'
import Tags from '../Component/Tag'
class VideoScreen extends React.Component {
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
        <CustomHeader home title={'Manage Videos'} />
        <Video
          source={{ uri: 'https://www.youtube.com/watch?v=w-OucrPtOyI' }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref
          }} // Store reference
          //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //    onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
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
          <CustomButton title={'Delete'} />
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
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: themeColor,
    height: 25,
    margin: 2
  },
  tagText: { fontSize: 12, marginHorizontal: 4 },
  tagBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: themeColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 4
  },
  labelStyle :{ color: themeColor, fontSize: 14, paddingVertical: 2 }
})
export default withNavigation(VideoScreen)
