import {View, Text,StyleSheet,Dimensions, TextInput,useColorScheme} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather" 

export function HeadBar() : JSX.Element {
    // const isDarkMode = useColorScheme() === 'dark';
    return (
    <View style={styles.root} >
        <View >
            <Icon name={'trophy'} size={45} color={"white"} style={{paddingBottom:3}}/>
        </View>
        <View style={styles.rectangle4} >
            <TextInput style={styles.search} placeholder='Search in Transactions' placeholderTextColor="#FFF" />
        </View>
        <View >
            <Icon2 name={'bell'} size={30} color={"white"}/>
        </View>
    </View>
);
}
// const {height,width} = Dimensions.get("window");
const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexShrink: 0,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center",
        // backgroundColor: 'rgba(20, 20, 20, 1)',
        backgroundColor:"black"
    },
    
    rectangle4: {
        width: '50%',
        height: 72,
        flexShrink: 0,
        justifyContent:'center',
        alignItems:"center",
        // marginRight:20
    },
    search: {
        width: '100%',
        height: '60%',
        flexShrink: 0,
        borderRadius:30,
        backgroundColor: 'rgb(70,70,70)',
        opacity:0.45,
        textAlign:"center",
        color:'white',
        paddingHorizontal:10
    },
});
