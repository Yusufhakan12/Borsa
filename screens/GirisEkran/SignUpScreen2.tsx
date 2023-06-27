import React from "react";
import { View,StyleSheet,Text, Appearance, Alert } from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import axios from "axios";
import { useState } from "react";
import { Auth } from "firebase/auth";
import auth,{ FirebaseAuthTypes, firebase } from "@react-native-firebase/auth";
import { SignInScreenDark } from "../component/darkMode";
import { useSelector } from "react-redux";
import { RootState } from "../../src/store";
import { SIGNINTRANSLATION } from "../../langauge/langauge";
const SignUpScreen2=({navigation}:{navigation:any})=>{

    const [password,setPassword]=useState('');
    const [mail,setMail]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    const [mailerror,setMailError]=useState(false);
    const [passworderror,setPasswordError]=useState(false);
    const [equalderror,setEqualError]=useState(false);
    const [exError,setExError]=useState(false);
    const [theme,setTheme]=useState(Appearance.getColorScheme())
    const langauge=useSelector((state:RootState)=>state.dil)
    Appearance.addChangeListener((scheme)=>
    setTheme(scheme.colorScheme))
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
             navigation.navigate("Welcome")
            }).then(()=>{
                firebase.auth().currentUser?.sendEmailVerification({
                    handleCodeInApp:true,
                    url:'https://yenibir-5d5e6.firebaseapp.com'
                }).catch((err)=>{console.log(err)}).then(()=>{
                    Alert.alert('send veri')
                })
            })
            
            .catch(e=>{
             
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
       
    }
   
    return(
        <View style={ theme=="light"? styles.root:SignInScreenDark.root}>
        <CustonInput
        placeholder="Email"
        value={mail}
        setValue={setMail}
        secureTextEntry={false}
        
        />
        {mailerror?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[8].Turkce:SIGNINTRANSLATION[8].English}</Text>:null}
       
        <CustonInput
         placeholder={langauge.dil===false?SIGNINTRANSLATION[6].Turkce:SIGNINTRANSLATION[6].English}
         value={password}
         setValue={setPassword}
         secureTextEntry={true}
        />
         {passworderror?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[9].Turkce:SIGNINTRANSLATION[9].English}</Text>:null}
         <CustonInput
         placeholder={langauge.dil===false?SIGNINTRANSLATION[7].Turkce:SIGNINTRANSLATION[7].English}
         value={passwordRepeat}
         setValue={setPasswordRepeat}
         secureTextEntry={true}
        />

        {equalderror?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[10].Turkce:SIGNINTRANSLATION[10].English}</Text>:null}
        {exError?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[11].Turkce:SIGNINTRANSLATION[11].English}</Text>:null}

         <CustomButton
        onpress={onRegisterPressed}
        text={langauge.dil===false?SIGNINTRANSLATION[4].Turkce:SIGNINTRANSLATION[4].English}
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