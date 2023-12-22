import { View, Text } from 'react-native'
import React from 'react'
import { HeadBar } from '../components/Headbar'
import BottomBar from '../components/BottomBar'

export default function SingleTransaction({navigation} : {navigation : any}) {
  return (
    <View style={{height:"100%"}}>
      <HeadBar/>
      <Text>SingleTransaction</Text>
      <BottomBar navigation={navigation}/>
    </View>
  )
}