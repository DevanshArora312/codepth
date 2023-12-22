import { View, Text,StyleSheet,useColorScheme, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/MaterialIcons"
import Icon3 from "react-native-vector-icons/FontAwesome6"
export default function ActionBox() {
    const isDarkMode = useColorScheme() === "dark";
    const styles = StyleSheet.create({
        actionBar : {
            backgroundColor : isDarkMode ? 'rgb(35,35,35)' : "white",
            position:'absolute',
            top:'39%',
            left:'12.5%',
            width:"75%",
            height:'10%',
            borderRadius:20,
            alignItems:"center",
            justifyContent:"space-around",
            flexDirection:"row"
        },
        view : {
            alignItems:"center",
            rowGap:4 
        }
    })
  return (
    <View style={styles.actionBar}>
        <TouchableOpacity style={styles.view}>
            <Icon2 name={'payment'} color={isDarkMode ? "white" : "black"} size={25} />
            <Text style={{color:isDarkMode ? "white" : "black" , fontSize:15}}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
            <Icon name={'bank'} color={isDarkMode ? "white" : "black"} size={20} />
            <Text style={{color:isDarkMode ? "white" : "black" , fontSize:15}}>Bank</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
            <Icon3 name={'hand-holding-dollar'} color={isDarkMode ? "white" : "black"} size={20} />
            <Text style={{color:isDarkMode ? "white" : "black" , fontSize:15}}>Request</Text>
        </TouchableOpacity>
    </View>
  )
}