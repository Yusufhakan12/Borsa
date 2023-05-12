import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";

const SignUpScreen=()=>{
    const onRegisterPressed=()=>{
        console.log('Sign In')
    }
    const [userName,setUserName]=useState('');
    const [identity,setidentity]=useState('');
    const [Tel,setTel]=useState('');
    const [surname,setSurname]=useState('');
    const [password,setPassword]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    return(
        <View style={styles.root}>
        <CustonInput
        placeholder="Identity"
        value={identity}
        setValue={setidentity}
        secureTextEntry={false}
        
        />
        <CustonInput
        placeholder="UserName"
        value={userName}
        setValue={setUserName}
        secureTextEntry={false}
        
        />
         <CustonInput
        placeholder="Surname"
        value={surname}
        setValue={setSurname}
        secureTextEntry={false}
        
        />
          <CustonInput
        placeholder="Telephone Number"
        value={Tel}
        setValue={setTel}
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
    );
}


const styles=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        
    }
})
export default SignUpScreen