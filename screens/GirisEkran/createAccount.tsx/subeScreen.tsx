import React ,{useState}from "react";
import { View,Text, StyleSheet,Appearance } from "react-native";
import { SUBE } from "../../../src/data/data";
import CustomButton from "../customBottom";
import CustomSelect from "./component/customSelect";
import { useDispatch,useSelector } from "react-redux";
import { Sube } from "../../../src/store/actions";
import { RootState } from "../../../src/store";
import { SignInScreenDark } from "../../component/darkMode";
import { SIGNINTRANSLATION } from "../../../langauge/langauge";
const SubeScreen=({navigation}:{navigation:any})=>{
    const [category,setCategory]=useState("")
    const [error,setError]=useState(false);
    const dispatch=useDispatch();
    const sube=useSelector((state:RootState)=>state.sube)
    const [theme,setTheme]=useState(Appearance.getColorScheme())
    const langauge=useSelector((state:RootState)=>state.dil)
    Appearance.addChangeListener((scheme)=>
    setTheme(scheme.colorScheme))
    const Next=()=>{

        if(category==="")
        {
            setError(!error)
        }
        else{
            navigation.navigate("onayliyorum")
        }
     
    }
    return(
        <View style={theme=="light"?styles.SubeContainer:SignInScreenDark.subeContainer}>
            <View style={{marginTop:30}}>
            <CustomSelect
            data={SUBE}
            setSelected={setCategory}
            save="value"
            search={true}
            placeholder={langauge.dil===false?SIGNINTRANSLATION[15].Turkce:SIGNINTRANSLATION[15].English}
            
            />
            </View>
           
         {error?<Text style={styles.error}>Boş geçilemez</Text>:null}   
     <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{dispatch(Sube(category));Next()}}
        text={langauge.dil===false?SIGNINTRANSLATION[4].Turkce:SIGNINTRANSLATION[4].English}
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
    },
    SubeContainer:{
        alignItems:"center",
        
    }
})
export default SubeScreen