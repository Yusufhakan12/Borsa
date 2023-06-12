import React, { useState,useEffect } from "react";
import { Text, View,StyleSheet,Appearance } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../customBottom";
import { HESAP } from "../../../src/data/data";
import { RootState } from "../../../src/store";
import CustomSelect from "./component/customSelect";
import { Type } from "../../../src/store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInScreenDark } from "../../component/darkMode";
import { SIGNINTRANSLATION } from "../../../langauge/langauge";
import LottieView from 'lottie-react-native'
const WelcomeScreen=({navigation}:{navigation:any})=>{
    const [category,setCategory]=useState("")
    const [error,setError]=useState(false);
    const info=useSelector((state:RootState)=>state.info)
    const typeAccount=useSelector((state:RootState)=>state.type)
    const dispatch=useDispatch()
    const langauge=useSelector((state:RootState)=>state.dil)
    const [theme,setTheme]=useState(Appearance.getColorScheme())
    Appearance.addChangeListener((scheme)=>
    setTheme(scheme.colorScheme))
    const saveItem=async()=>{
        try {
            
            await AsyncStorage.setItem("typeData1",typeAccount.type)
            
        } catch (error:any) {
            console.error(error.message)
        }finally{
            const name= await AsyncStorage.getItem("typeData1")
            setCategory(JSON.stringify(name))
            console.log(name)
        }
    }
    
 
    const Next=()=>{
       
        
        if(category==="")
        {
            setError(!error)
        }
        else{
            
            saveItem();

            navigation.navigate("Doviz")
        }
       

    }
   

    //console.log(typeAccount)
    return(
        <View style={theme=="light"?{backgroundColor:"white"}:{backgroundColor:"black",flex:1}} >
            <View style={{alignItems:"center"}}>
            <LottieView
            source={require("../../../assets/Lottie/welcome.json")}
            autoPlay
            style={{height:290,width:290}}
            
            />

           
            <Text style={theme=="light"? styles.Name:SignInScreenDark.Name}>{info.info}</Text>
           
            </View>
            <CustomSelect
            data={HESAP}
            setSelected={setCategory}
            save="value"
            search={false}
            placeholder={langauge.dil===false?SIGNINTRANSLATION[13].Turkce:SIGNINTRANSLATION[13].English}
            
            />
        {error?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[5].Turkce:SIGNINTRANSLATION[5].English}</Text>:null}
        
        <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{dispatch(Type(category));Next()}}
        text={langauge.dil===false?SIGNINTRANSLATION[4].Turkce:SIGNINTRANSLATION[4].English}
        />
       
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
        fontSize:12,
        color:"black"
        
    },
    Name:{
        fontSize:23,
        fontFamily: "TiltWarp-Regular",
        color:"black"
    },
    error:{
        marginLeft:40,
        color:"red",
        fontFamily: "TiltWarp-Regular"
    }
})
export default WelcomeScreen