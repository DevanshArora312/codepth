import {
    ColorValue,
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import { HeadBar } from '../components/Headbar';
import { useEffect, useState } from 'react';
import TransactionBox from '../components/TransactionBox';
import Icon2 from "react-native-vector-icons/Feather"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from '../components/BottomBar';
import ActionBox from '../components/ActionBox';
// import Blob from "../blob/index"


export default  function Home({navigation }: {navigation: any}) : JSX.Element {
    const isDarkMode : Boolean = useColorScheme() === "dark";
    interface data {
        userId : String,
        type : String,
        color : ColorValue,
        amount : Number,
        details :  {
            organisation : String,
            date : String,
            closingBalance : Number,
            description : String
        },
        _id : String
    }
    const [array,setArray]  = useState<data[] | null>(null);
    const styles = StyleSheet.create({
        worldContainer : {
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"black",
          height:'35%',
        },
        
        transactionHeader : {
            justifyContent:"space-between",
            paddingHorizontal:10,
            alignItems:"center",
            flexDirection:"row" 
        },
        transactionHeaderText : {
            color:isDarkMode ? "white" : "black",
            fontFamily: 'Inika-Bold',
            fontWeight: '400',
            fontSize:22
        },
        emptybox : {
            height:'5%'
        },
        transactionArea : {
            flex:1,
            width:"100%",
            // alignItems:"center",
            // justifyContent:"center"
        },
        scrollContainer : {
            height:"100%",
            width:"90%",
            backgroundColor: isDarkMode ? 'rgb(35,35,35)' : "white",
            borderRadius:30,
            marginTop:10,
            paddingHorizontal:30,
            paddingVertical:8
        }
      });
    useEffect(()=>{
        fetch("http://192.168.29.165:4000/api/v1/getTransaction")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setArray(data.data);
            })
            .catch(err=>{
                console.log(err.message);
            })
    },[]);
    return (  
      <SafeAreaView style={{backgroundColor:isDarkMode ? "#2C2734": "#D9D9D9",flex:1}} >
        <HeadBar/>
        <View style={styles.worldContainer}>
            {/* <Canvas camera={{position:[0.0,0.0,8.0]}}>
                <Blob/>
            </Canvas> */}
            <Text>
                Hello
            </Text>
        </View>
        <ActionBox/>
        <View style={styles.emptybox} />
        <View style={styles.transactionArea}>
            <View style={styles.transactionHeader}>
                <Text style={styles.transactionHeaderText}>
                    Transaction
                </Text>
                <TouchableOpacity >
                    <Icon2 name={'arrow-right'} color={isDarkMode ? "white" : "black"} size={25}/>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",justifyContent:"center",height:"69%",alignItems:"center"}}>
                <ScrollView style={styles.scrollContainer} >
                    {
                        array && array.map( (item,index)=> {
                            return(
                                <TransactionBox 
                                color = {item.color}
                                amount = {item.amount}
                                type = {item.type}
                                id={item._id}
                                key = {index}
                                navigation={navigation}
                            /> 
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
        <BottomBar navigation={navigation}/>
      </SafeAreaView>
    );
    
  }
  
