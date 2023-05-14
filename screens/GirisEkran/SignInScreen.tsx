import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput, Alert} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Login } from "../../src/store/actions";
const SignInScreen=({navigation}:{navigation:any})=>{
const dispatch=useDispatch();

const isload=useSelector((state:RootState)=>state.us);


const[isLoading,setIsloading]=useState(false)
const [mail,setMail]=useState('');
const [password,setPassword]=useState('');
const[error,setError]=useState(false);
const [invalidError,setInvalidError]=useState(false);

const onSignInPressed= async()=>{

    if(mail.length===0||password.length===0)
    {
       console.log("asd")
    }
    else{
        await auth().signInWithEmailAndPassword(mail,password)
        .then((userCredential)=>{
         const user=userCredential.user;
         console.log(user)
         if(user.email)
         {
            setIsloading(!isLoading)
            dispatch(Login(isLoading))
            console.log(isload);
         }
         
            
            
         
        
        }).catch(e=>{
            if(e.code==="auth/invalid-email")
         
            {
                setInvalidError(!invalidError)
            }
        })
        
    }
setError(true);
    //console.log('Sign In')

   
   
  
    
}
const onCreateAccount=()=>{
    //navigation.navigate("Signup")
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
            
                {error?  (mail.length<=0 ?
                <Text
                style={styles.error}
                >E-mail field cannot be empty</Text>:null)
                :(null)}
           <CustonInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
           />
               {error?  (password.length<=0 ?
               <Text
               style={styles.error}
               >Password field cannot be empty</Text>:null)
               :(null)}
               {invalidError?  (
               <Text
               style={styles.error}
               >Invalid E-mail</Text>)
               :(null)}
           <CustomButton
           onpress={onSignInPressed}
           text="Sign In"
           />
           <Pressable onPress={onCreateAccount} >
            <Text>Create account</Text>
           </Pressable>
     
        </View>
    );
}
export default SignInScreen

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