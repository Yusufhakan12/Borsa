import React, { useState,useEffect } from "react";
import { Text, View,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../customBottom";
import { HESAP } from "../../../src/data/data";
import { RootState } from "../../../src/store";
import CustomSelect from "./component/customSelect";
import { Type } from "../../../src/store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
const WelcomeScreen=({navigation}:{navigation:any})=>{
    const [category,setCategory]=useState("")
    const [error,setError]=useState(false);
    const info=useSelector((state:RootState)=>state.info)
    const typeAccount=useSelector((state:RootState)=>state.type)
    const dispatch=useDispatch()

    const saveItem=async()=>{
        try {
            
            await AsyncStorage.setItem("typeData1",typeAccount.type)
            
        } catch (error:any) {
            console.error(error.message)
        }finally{
            const name= await AsyncStorage.getItem("typeData1")
            setCategory(JSON.stringify(name))
            console.log(name)
        }
    }
    
 
    const Next=()=>{
       
        
        if(category==="")
        {
            setError(!error)
        }
        else{
            
            saveItem();

            navigation.navigate("Doviz")
        }
       

    }
   

    //console.log(typeAccount)
    return(
        <View >
            <View style={{alignItems:"center",marginVertical:150}}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.Name}>{info.info}</Text>
            <Text style={styles.subTitle}>Let's create an account now</Text>
            </View>
            <CustomSelect
            data={HESAP}
            setSelected={setCategory}
            save="value"
            search={false}
            placeholder="Bir Hesap seciniz"
            
            />
        {error?<Text style={styles.error}>Boş geçilemez</Text>:null}
        
        <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{dispatch(Type(category));Next()}}
        text="Next"
        />
       
        </View>
       
            
        </View>
    );
    
}

const styles=StyleSheet.create({
    welcomeText:{
        fontFamily: "TiltWarp-Regular",
        fontSize:44,
        color:"black"
    },
    subTitle:{
        fontFamily: "TiltWarp-Regular",
        fontSize:12
    },
    Name:{
        fontSize:23,
        fontFamily: "TiltWarp-Regular",
    },
    error:{
        marginLeft:40,
        color:"red",
        fontFamily: "TiltWarp-Regular"
    }
})
export default WelcomeScreen