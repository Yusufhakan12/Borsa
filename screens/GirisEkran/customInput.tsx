import React from "react";
import {Text, View, Pressable, StyleSheet, FlatList, TextInput} from "react-native";

const CustonInput=({value,setValue,placeholder,secureTextEntry}:any)=>{

    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
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