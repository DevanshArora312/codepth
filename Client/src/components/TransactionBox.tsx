import { View, Text,StyleSheet, ColorValue ,useColorScheme, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import { Bills,Spendings,Savings,Income } from '../utils/Images'

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
    var image;
    switch(props.type){
        case "Bills" :
            image = Bills;
            break;
        case "Spendings" :
            image = Spendings;
            break;
        case "Savings" :
            image = Savings;
            break;
        case "Income" :
            image = Income;
            break;
    }
  return (
    <TouchableOpacity onPress={() => {
        navigation.navigate('SingleTransac');
    }}>
        <View style={styles.box} >
            <View style={style.view}>
                <Image source={image} style={style.imageStyle}/>
                <Text style={styles.genText}>
                    {props.type}
                </Text>
            </View>
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

const style = StyleSheet.create({
    imageStyle : {
        width : 40,
        height:40,
        borderRadius :50
    },
    view : {
        flexDirection:"row",
        alignItems:"center",
        columnGap:7
    }
})