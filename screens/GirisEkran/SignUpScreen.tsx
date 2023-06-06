import React,{useState,useEffect} from "react";
import {Text, View, StyleSheet,Appearance } from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import { Next } from "../../src/store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInScreenDark } from "../component/darkMode";
import { SIGNINTRANSLATION } from "../../langauge/langauge";

const SignUpScreen=({navigation}:{navigation:any})=>{

const langauge=useSelector((state:RootState)=>state.dil)   
const [userName,setUserName]=useState("");
const [error,setError]=useState(false);
const info=useSelector((state:RootState)=>state.info)
const [theme,setTheme]=useState(Appearance.getColorScheme())
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))
const dispatch=useDispatch();
const saveItem=()=>{
    try {
        AsyncStorage.setItem("appData",info.info)
    } catch (error:any) {
        console.error(error.message)
    }
}
const Isimgetir= async()=>{
    try {
        const name= await AsyncStorage.getItem("appData")
        setUserName(JSON.stringify(name))
        console.log(name)
    } catch (error) {
        
    }
}
    const onRegisterPressed=async()=>{
    
        

       if(userName.length===0)
       {
        setError(!error)
       }
       
       
        
       
        else{
      
            saveItem();
            navigation.navigate("Signup2")
            
        }
        
        
    }
    
        useEffect(()=>{
            Isimgetir()
        },[])
    
    return(
        
        <View style={theme=="light"?  styles.root:SignInScreenDark.root}>
        <CustonInput
        placeholder="Full Name"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
    
        
        />
      
        {error?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[5].Turkce:SIGNINTRANSLATION[5].English}</Text>:null}
      
         
        <CustomButton
        onpress={()=>{dispatch(Next(userName));onRegisterPressed()}}
        text={langauge.dil===false?SIGNINTRANSLATION[4].Turkce:SIGNINTRANSLATION[4].English}
        />
    
     </View>
     
    );
   
}


const styles=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        
    },
    error:{
        fontSize:12 ,
        color:"red"
    }
})
export default SignUpScreen