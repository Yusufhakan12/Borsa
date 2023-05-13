import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";

const SignUpScreen=({navigation}:{navigation:any})=>{
    const onRegisterPressed=()=>{
        console.log('Sign In')
        navigation.navigate("Signup2")
    }
    const [userName,setUserName]=useState('');
    const [identity,setidentity]=useState('');
    const [surname,setSurname]=useState('');
   
    return(
        <View style={styles.root}>
         <CustonInput
        placeholder="Name"
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