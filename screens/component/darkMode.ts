import React from 'react'
import {StyleSheet} from 'react-native'

 export const SignInScreenDark=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        backgroundColor:"black",
        flex:1,
        paddingVertical:22
    },
    text:{
        color:"white"
    },
    welcomeText:{
        fontFamily: "TiltWarp-Regular",
        fontSize:44,
        color:"gray"
    },
    subTitle:{
        fontFamily: "TiltWarp-Regular",
        fontSize:12,
        color:"gray"
        
    },
    Name:{
        fontSize:23,
        fontFamily: "TiltWarp-Regular",
        color:"gray"
    },
    dovizContainer:{
        alignItems:"center",
       
        backgroundColor:"black",
        flex:1

    },
    subeContainer:{
        alignItems:"center",
        
        backgroundColor:"black",
        flex:1
    },
    OnayliyorumContainer:{
        backgroundColor:"black",
        flex:1
    },
    topText:{
        fontFamily: "TiltWarp-Regular",
         color:"white"
      },
      containerBox: {
        borderWidth: 1,
        height: 42,
        width: 340,
        marginHorizontal: 52,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
        backgroundColor:"gray"
      },
      containerEkstraHesap:{
        alignItems:"center",
        backgroundColor:"black",
        flex:1
      }

})

