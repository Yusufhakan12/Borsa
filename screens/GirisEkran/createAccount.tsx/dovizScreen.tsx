import React, { useState,useEffect } from "react";
import { Text, View,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../customBottom";
import { DOVİZ } from "../../../src/data/data";
import { RootState } from "../../../src/store";
import { TypeCurrency } from "../../../src/store/actions";
import CustomSelect from "./component/customSelect";
import AsyncStorage from "@react-native-async-storage/async-storage";


const DovizScreen=({navigation}:{navigation:any})=>{
const [category,setCategory]=useState("")
const [error,setError]=useState(false);
const dispatch=useDispatch();
const currency=useSelector((state:RootState)=>state.currency)
const Next=()=>{
    if(category==="")
    {
        setError(!error)
    }
    else{
        navigation.navigate("Sube")
    }
    
}

    return(
        <View style={{alignItems:"center",marginVertical:150}}>
             <CustomSelect
            data={DOVİZ}
            setSelected={setCategory}
            save="value"
            search={true}
            placeholder="Bir döviz türü seçiniz"
            
            />
            {error?<Text style={styles.error}>Boş geçilemez</Text>:null}
     <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{dispatch(TypeCurrency(category));Next()}}
        text="Next"
        />
       
        </View>
     
        </View>
    )
}
const styles=StyleSheet.create({
    error:{
        marginLeft:40,
        color:"red",
        fontFamily: "TiltWarp-Regular"
    }
})
export default DovizScreen