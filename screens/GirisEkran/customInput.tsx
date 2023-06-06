import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput,Appearance,} from "react-native";

const CustonInput=({value,setValue,placeholder,secureTextEntry}:any)=>{
  const [theme,setTheme]=useState(Appearance.getColorScheme())
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))
    return(
        <View style={[styles.container,value.length>0?{borderColor:"green"}:{borderColor:"black"}]}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={"gray"}
            style={{color:"black"}}
            />
       
        </View>
        
        
    );
}
const styles=StyleSheet.create({
    container:{
        borderRadius:7,
        borderWidth:1,
        width:320,
        backgroundColor:"#F9FBFC",
        paddingHorizontal:10,
        marginVertical:5
    }
})
export default CustonInput