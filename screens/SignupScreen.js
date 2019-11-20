import React, { Fragment } from 'react'
import { StyleSheet, View, Text, Image , ScrollView } from 'react-native'
import CustomInput from '../Component/Input'
import CustomButton from '../Component/Button'
import Logo from '../Component/LogoImage'
import { withNavigation } from 'react-navigation'
class SignUp extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    header: null
  }
  render () {
    const { navigation } = this.props
    return (
      <ScrollView>
        <Logo height={120} />
        <Image
          source={require('../assets/avatar.png')}
          style={styles.userImage}
        />

        <View style={{ flexDirection: 'row'  , marginTop : 12}}>
          <View style={{ flex: 1 }}>
            <CustomInput
              textChange={text => console.log(text)}
              placeholder={'First Name'}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              textChange={text => console.log(text)}
              placeholder={'Last Name'}
            />
          </View>
        </View>
        <CustomInput
              textChange={text => console.log(text)}
              placeholder={'Email'}
              keyboardType = {'email-address'}
            />
            <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 1 }}>
            <CustomInput
              textChange={text => console.log(text)}
              placeholder={'Password'}
              secureTextEntry = {true}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomInput
              textChange={text => console.log(text)}
              placeholder={'Verify Password'}
              secureTextEntry = {true}
            />
          </View>
        </View>
        <CustomInput
              textChange={text => console.log(text)}
              placeholder={'User Name'}
            />
            <View style = {{marginVertical : 12}}>
            <CustomButton title = {"Sign Up"}
             onPress = {()=> navigation.navigate("SignIn")} />
                </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImage : {
    height: 120,
    width: 120,
    alignSelf: 'center',
    borderRadius: 12
  }
})
export default withNavigation(SignUp)
