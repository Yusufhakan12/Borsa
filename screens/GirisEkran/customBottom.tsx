import React from "react";
import { Text,Button, View ,StyleSheet,Pressable} from "react-native";

const CustomButton=({onpress,text}:any)=>{
    return(
        <Pressable onPress={onpress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#3B71F3',
        width:320,
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
        
    },
    text:{
        fontWeight:'bold',
        color:'white'
    }
})
export default CustomButton