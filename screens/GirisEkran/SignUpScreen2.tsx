import React from "react";
import { View,StyleSheet,Text } from "react-native";
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
    const [mailerror,setMailError]=useState(false);
    const [passworderror,setPasswordError]=useState(false);
    const [equalderror,setEqualError]=useState(false);
    const [exError,setExError]=useState(false);

    const onRegisterPressed=()=>{

        if(password!==passwordRepeat)
        {
            setEqualError(!equalderror)
        }
       else if(mail.length!==0&&password.length!==0&&passwordRepeat.length!==0)
        {
            auth().createUserWithEmailAndPassword(mail,password)
            .then(userCredential=>{
             const user=userCredential.user;
             
            }).catch(e=>{
             
                if(passwordRepeat.length<6||password.length<6)
                {   
                    setPasswordError(!passworderror);
                    
                }
                if(e.code==='auth/email-already-in-use')
                {
                    setExError(!exError)
                }
               
                else{
                    setMailError(!mailerror);
                 }

            })
        }
      
    


        //console.log('Sign In')
        navigation.navigate("Welcome")
    }
   
    return(
        <View style={styles.root}>
        <CustonInput
        placeholder="Email"
        value={mail}
        setValue={setMail}
        secureTextEntry={false}
        
        />
        {mailerror?<Text style={styles.error}>E-mail doğru formatta olmalı</Text>:null}
       
        <CustonInput
         placeholder="Password"
         value={password}
         setValue={setPassword}
         secureTextEntry={true}
        />
         {passworderror?<Text style={styles.error}>Şifre en az 6 karakterli olması gerekli</Text>:null}
         <CustonInput
         placeholder="Password Repeat"
         value={passwordRepeat}
         setValue={setPasswordRepeat}
         secureTextEntry={true}
        />

        {equalderror?<Text style={styles.error}>Parolalar aynı olmalı</Text>:null}
        {exError?<Text style={styles.error}>Boyle bir kullanıc var</Text>:null}

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
        
    },
    error:{
        fontSize:12 ,
        color:"red"
    }
})
export default SignUpScreen2