import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/store";
const WelcomeScreen=()=>{
    const info=useSelector((state:RootState)=>state.info)
    return(
        <View >
            <View style={{alignItems:"center",marginVertical:150}}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.Name}>{info.info}</Text>
            <Text style={styles.subTitle}>Let's create an account now</Text>
            </View>
            
        
           
            
        </View>
    );
}

const styles=StyleSheet.create({
    welcomeText:{
        fontFamily: "TiltWarp-Regular",
        fontSize:44,
        color:"black"
    },
    subTitle:{
        fontFamily: "TiltWarp-Regular",
        fontSize:12
    },
    Name:{
        fontSize:23,
        fontFamily: "TiltWarp-Regular",
    }
})
export default WelcomeScreen