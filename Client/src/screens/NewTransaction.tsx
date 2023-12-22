import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { HeadBar } from '../components/Headbar'
import BottomBar from '../components/BottomBar'

export default function NewTransaction({navigation} : {navigation : any}) {
  return (
    <View style={{height:"100%"}}>
      <HeadBar/>
      <View>

      </View>
      <BottomBar navigation={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
    mainArea : {
        backgroundColor:"rgb(34,34,34)",
        width:"100%",
        height:"100%"
    }
})