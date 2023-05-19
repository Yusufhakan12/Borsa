import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../src/store";
import Clipboard from "@react-native-clipboard/clipboard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import TaskScreen from "./component/task";
const ProfileScreen=()=>{
const IBAN='TR80 0006 4000 0014 4031 1902 85'
const HESAPNO=1376
const sube=useSelector((state:RootState)=>state.sube)
const bakiye=useSelector((state:RootState)=>state.bakiye)
const currency=useSelector((state:RootState)=>state.currency)
const tiklanan=useSelector((state:RootState)=>state.tiklanan)
    return(
        <View>
            <View style={{backgroundColor:"red",height:150,margin:5}}>
            <View style={{backgroundColor:"pink",height:26,width:150,margin:9}}>
                <Text style={[styles.text]} >{sube.Sube}</Text>
            </View>
            <TouchableOpacity
            onPress={()=>Clipboard.setString(IBAN)}
            style={{backgroundColor:"#FFE0DB",borderWidth:0.5,marginHorizontal:8}}>
            <View style={{height:26,marginHorizontal:8,borderRadius:8,flexDirection:"row",justifyContent:"space-between"}}>
                <Text
                style={[styles.text,{fontSize:17}]}
               
                >{IBAN}</Text>
                <MaterialIcons
                onPress={()=>Clipboard.setString(IBAN)}
                style={{paddingRight:12,paddingVertical:5,fontSize:17}}
                name="content-copy"
                />
            </View>
            </TouchableOpacity>
           

            <View style={{backgroundColor:"green",height:26,margin:8,flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={[styles.text]} >Hesap No:</Text>
            <Text  style={[styles.text]}>0{HESAPNO} </Text>
            </View>
            <View style={{backgroundColor:"orange",height:26,marginVertical:2,marginHorizontal:8,flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                <Text style={[styles.text]} >Bakiye:</Text>
                <Text style={[styles.text]} >{bakiye.bakiye}</Text>
               
                </View>
                <View style={{paddingRight:8}} >
                <Text style={[styles.text]} >{currency.typeCurrency}</Text>
                </View>
                <View>
                    <Text style={{color:"black"}}>{tiklanan.tiklanan}</Text>
                </View>

            </View>

            </View>
            <TaskScreen/>
        </View>
    );
}
const styles=StyleSheet.create({
    text:{
        fontFamily:"TiltWarp-Regular",
        color:"black",
        paddingLeft:4
    }
})
export default ProfileScreen