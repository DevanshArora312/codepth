import { View, Text,StyleSheet,useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
export default function BottomBar({navigation} : {navigation : any}) {
    const isDarkMode = useColorScheme() === "dark";
    const styles = StyleSheet.create({
        bottomBar : {
            bottom:10,
            left:"2.5%",
            width:"95%",
            borderRadius:20,
            backgroundColor : isDarkMode ? 'rgb(35,35,35)' : "white",
            height:"9%",
            alignItems:"center",
            justifyContent:"space-around",
            flexDirection:"row",
            position:"absolute"
        },
        bottomIcon : {
            color:isDarkMode ? "white" : "black",
        }
    })
  return (
    <View style={styles.bottomBar}>
        <TouchableOpacity><Icon name={'cog'} style={styles.bottomIcon} size={25}/></TouchableOpacity>
        <TouchableOpacity><Icon name={'chart-pie'} style={styles.bottomIcon} size={25}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Icon name={'home'} style={styles.bottomIcon} size={25}/></TouchableOpacity>
        <TouchableOpacity><Icon2 name={'message-circle'} style={styles.bottomIcon} size={25}/></TouchableOpacity>
        <TouchableOpacity><Icon name={'user-circle'} style={styles.bottomIcon} size={25}/></TouchableOpacity>
    </View>
  )
}

