import React,{useState,useEffect} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import { Next } from "../../src/store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData,getData, containsKey } from "../../storage";

const SignUpScreen=({navigation}:{navigation:any})=>{


const [userName,setUserName]=useState('');
const [error,setError]=useState(false);
const info=useSelector((state:RootState)=>state.info)
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
        
        <View style={styles.root}>
        <CustonInput
        placeholder="Full Name"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
        
        />
      
        {error?<Text style={styles.error}>This field cannot be left blank</Text>:null}
      
         
        <CustomButton
        onpress={()=>{dispatch(Next(userName));onRegisterPressed()}}
        text="Next"
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