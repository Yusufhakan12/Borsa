import React,{useState} from "react";
import {Text, View, Pressable, StyleSheet, Appearance, TouchableOpacity} from "react-native";
import CustonInput from "./customInput";
import CustomButton from "./customBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import auth,{ FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Dil, Login } from "../../src/store/actions";
import { SignInScreenDark } from "../component/darkMode";
import { SIGNINTRANSLATION } from "../../langauge/langauge";
const SignInScreen=({navigation}:{navigation:any})=>{
const dispatch=useDispatch();

const isload=useSelector((state:RootState)=>state.us);
const langauge=useSelector((state:RootState)=>state.dil)


const[isLoading,setIsloading]=useState(false)
const [mail,setMail]=useState('');
const [password,setPassword]=useState('');
const[error,setError]=useState(false);
const [invalidError,setInvalidError]=useState(false);
const [theme,setTheme]=useState(Appearance.getColorScheme())
const [select,setSelect]=useState(Boolean)
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))
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

       
        <View style={theme==="light" ? styles.root:SignInScreenDark.root}>


            
           <CustonInput
           placeholder="E-mail"
           value={mail}
           setValue={setMail}
           secureTextEntry={false}
           
           />
            
                {error?  (mail.length<=0 ?
                <Text
                style={styles.error}
                >{langauge.dil===false?SIGNINTRANSLATION[3].Turkce:SIGNINTRANSLATION[3].English}</Text>:null)
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
               >  {langauge.dil===false?SIGNINTRANSLATION[2].Turkce:SIGNINTRANSLATION[2].English}</Text>:null)
               :(null)}
               {invalidError?  (
               <Text
               style={styles.error}
               >Invalid E-mail</Text>)
               :(null)}
           <CustomButton
           onpress={onSignInPressed}
           text={langauge.dil===false?SIGNINTRANSLATION[0].Turkce:SIGNINTRANSLATION[0].English}
           />
           <Pressable onPress={onCreateAccount} >
            <Text style={theme==="light"?styles.text:SignInScreenDark.text}>{langauge.dil===false ?  SIGNINTRANSLATION[1].Turkce:SIGNINTRANSLATION[1].English}</Text>
           </Pressable>

               <View style={{marginTop:390}}>
            <View style={{
                width:'85%',
                height:40,
                borderWidth:0.5,
                backgroundColor:'white',
                borderRadius:15,
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:5,
                paddingRight:5
            }}>
                <TouchableOpacity
                onPress={()=>dispatch(Dil(false))}
                style={{
                    width:60,
                    height:30,
                    backgroundColor: langauge.dil===false? 'yellow':'white',
                    borderRadius:15,
                    justifyContent:'center',
                    alignItems:'center'
                    
                }}
                >
                    <Text style={{color:'black',fontSize:12,fontWeight:'700'}} >Türkçe</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>dispatch(Dil(true))}
                style={{
                    width:60,
                    height:30,
                    backgroundColor:langauge.dil===true ? 'yellow':'white',
                    borderRadius:15,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text style={{color:'black',fontSize:12,fontWeight:'800'}} >English</Text>
                </TouchableOpacity>



            </View>
        </View> 





     
        </View>

                




    );
}
export default SignInScreen

const styles=StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
        flex:1
        
    },
    error:{
        fontSize:12 ,
        color:"red"
    },
    text:{
        color:"black"
    }
})