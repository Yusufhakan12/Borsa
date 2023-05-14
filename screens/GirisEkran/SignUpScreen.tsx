import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import { Next } from "../../src/store/actions";

const SignUpScreen=({navigation}:{navigation:any})=>{


const [userName,setUserName]=useState('');
const [error,setError]=useState(false);
const info=useSelector((state:RootState)=>state.info)
const dispatch=useDispatch();

    const onRegisterPressed=()=>{
        
    
       if(userName.length===0)
       {
        setError(!error)
       }
       
       
        
       
        else{
            navigation.navigate("Signup2")
        }
        
    }
    
    
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