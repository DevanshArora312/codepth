import { View, Text,StyleSheet, ColorValue ,useColorScheme, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
type TransacProp = {
    color : ColorValue,
    type : String,
    amount : Number,
    id : String,
    navigation :any
}

export default function TransactionBox(props : TransacProp ): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    const navigation = props.navigation;
    const styles = StyleSheet.create({
        box : {
            flex : 1,
            justifyContent : "space-between",
            alignItems:"center",
            flexDirection:"row",
            width:"100%",
            height:54,
            // backgroundColor:"blue",
            marginVertical:7,
            borderBottomColor:isDarkMode ? "white" : "black",
            borderBottomWidth:1
    
        },
        boxView : {
            flexDirection:"row",
            columnGap:10
        },
        coloredText :{
            color : props.color,
            fontSize:20
        },
        genText : {
            fontSize : 20,
            color : isDarkMode ? "white" : "black"
        }
    })
  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate('SingleTransac');
    }}>
        <View style={styles.box} >
            <Text style={styles.genText}>
                {props.type}
            </Text>
            <View style={styles.boxView}>
                    <Text style={styles.coloredText}>
                    {(props.type === "Spendings" || props.type === "Bills" ) ? "-" : "+"}{"$"}{`${props.amount}`}
                    </Text>
                    <Icon name={'arrow-forward-ios'} color={isDarkMode ? "white" : "black"} size={20}/>
            </View>
        </View>
    </TouchableOpacity>
  )
}
