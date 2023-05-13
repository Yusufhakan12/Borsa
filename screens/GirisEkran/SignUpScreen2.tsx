import React from "react";
import { View,StyleSheet } from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import axios from "axios";
import { useState } from "react";
import { Auth } from "firebase/auth";
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth";
const SignUpScreen2=({navigation}:{navigation:any})=>{

    const [password,setPassword]=useState('');
    const [mail,setMail]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    const [Tel,setTel]=useState('');
    const onRegisterPressed=()=>{
       auth().createUserWithEmailAndPassword(mail,password)
       .then(userCredential=>{
        const user=userCredential.user;
       
       }).catch(e=>{
        console.log(e)
       })
    


        console.log('Sign In')
        //navigation.navigate("SigIn")
    }
   
    return(
        <View style={styles.root}>
        <CustonInput
        placeholder="Email"
        value={mail}
        setValue={setMail}
        secureTextEntry={false}
        
        />
       
        <CustonInput
         placeholder="Password"
         value={password}
         setValue={setPassword}
         secureTextEntry={true}
        />
         <CustonInput
         placeholder="Password Repeat"
         value={passwordRepeat}
         setValue={setPasswordRepeat}
         secureTextEntry={true}
        />
         <CustomButton
        onpress={onRegisterPressed}
        text="Register"
        />
       
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        
    }
})
export default SignUpScreen2