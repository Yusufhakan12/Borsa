import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import { NavigationContainer } from "@react-navigation/native";
const SignInScreen=({navigation}:{navigation:any})=>{

const onSignInPressed=()=>{
    console.log('Sign In')

    navigation.navigate("Borsa")
}
const onCreateAccount=()=>{
    navigation.navigate("SignUp")
}
const [userName,setUserName]=useState('');
const [password,setPassword]=useState('');
    return(

       
        <View style={styles.root}>



           <CustonInput
           placeholder="UserName"
           value={userName}
           setValue={setUserName}
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