import React, { Component } from 'react'
import { Header, Input, Icon } from 'react-native-elements'
import { StatusBar, View, Image, TouchableOpacity } from 'react-native'
import { themeColor } from '../Constant/index'
import Logo from '../Component/LogoImage'
export default (CustomHeader = props => (
  <View>
    <StatusBar backgroundColor={'skyblue'} translucent />
    <Header
      barStyle='light-content' // or directly
      containerStyle={{ backgroundColor: 'skyblue' }}
      leftComponent={
        props.home ? (
          <Logo height={70} />
        ) : (
          { icon: 'arrow-back', color: '#fff' }
        )
      }
      centerComponent={{
        text: props.title,
        style: { color: themeColor, fontSize: 15  , fontWeight : 'bold'}
      }}
      rightComponent={
        props.home ? (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            {
              props.add ? 
              <TouchableOpacity
              onPress={() => props.onClickAdd()}
            >
              <Icon
                type={'font-awesome'}
                name={'plus-circle'}
                color={themeColor}
                size={20}
                containerStyle={{ paddingHorizontal: 6 }}
              />
            </TouchableOpacity>
            :
            null
            }
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Favourites')}
            >
              <Icon
                type={'font-awesome'}
                name={'heart'}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type={'font-awesome'}
                name={'envelope'}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 6 }}
                onPress={() => props.navigation.navigate('Messages')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type={'font-awesome'}
                name={'shopping-bag'}
                onPress={() => props.navigation.navigate('Cart')}
                color={'#fff'}
                size={16}
                containerStyle={{ paddingHorizontal: 6 }}
              />
            </TouchableOpacity>
          </View>
        ) : null
      }
    />
  </View>
))
