
import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
import {themeColor} from '../Constant/index'
export default (Tags = props => (
  <View style={styles.tagMainBox}>
  <Text
    style={{
      color: themeColor,
      fontSize: 15,
      fontWeight: '600',
      marginVertical: 4
    }}
  >
    Tags
  </Text>
  <View style={styles.tagBox}>
    { props.tags.map((data, index) => (
      <View style={styles.tagContainer}>
        <TouchableOpacity>
          <Icon
            type={'font-awesome'}
            name={'times-circle'}
            color={themeColor}
            size={12}
            containerStyle={{ width: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.tagText}>{data}</Text>
      </View>
    ))}
  </View>
</View>
))
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
  tagMainBox : {
    minHeight: 100,
    marginVertical: 25,
    marginHorizontal: '2.8%'
  },
  labelStyle :{ color: themeColor, fontSize: 14, paddingVertical: 2 }
})
