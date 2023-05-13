import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth";
const SignInScreen=({navigation}:{navigation:any})=>{
const[isLoading,setIsloading]=useState(false)
const [mail,setMail]=useState('');
const [password,setPassword]=useState('');
const[error,setError]=useState("");
const onSignInPressed=()=>{

    auth().signInWithEmailAndPassword(mail,password)
    .then(userCredential=>{
     const user=userCredential.user;
    
    }).catch(e=>{
     console.log(e)
    })
    console.log('Sign In')
    setIsloading(true)
  
    //navigation.navigate("Borsa")
}
const onCreateAccount=()=>{
    navigation.navigate("Signup")
}

    return(

       
        <View style={styles.root}>



           <CustonInput
           placeholder="E-mail"
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
           <CustomButton
           onpress={onSignInPressed}
           text="Sign In"
           />
           <Pressable onPress={onCreateAccount} >
            <Text>Hesabınız yok mu ?</Text>
           </Pressable>
        </View>
    );
}
export default SignInScreen

const styles=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        
    }
})