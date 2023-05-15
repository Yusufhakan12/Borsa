import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../src/store";
import Clipboard from "@react-native-clipboard/clipboard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const ProfileScreen=()=>{
const IBAN='TR80 0006 4000 0014 4031 1902 85'
const sube=useSelector((state:RootState)=>state.sube)
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
           

            <View style={{backgroundColor:"green",height:26,width:100,margin:8}}>

            </View>
            <View style={{backgroundColor:"orange",height:26,margin:8,width:70}}>
            <Text style={[styles.text]} >Bakiye</Text>
            </View>

            </View>
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