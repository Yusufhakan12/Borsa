import React ,{useState}from "react";
import { View,Text, StyleSheet } from "react-native";
import { SUBE } from "../../../src/data/data";
import CustomButton from "../customBottom";
import CustomSelect from "./component/customSelect";
import { useDispatch,useSelector } from "react-redux";
import { Sube } from "../../../src/store/actions";
import { RootState } from "../../../src/store";
const SubeScreen=({navigation}:{navigation:any})=>{
    const [category,setCategory]=useState("")
    const [error,setError]=useState(false);
    const dispatch=useDispatch();
    const sube=useSelector((state:RootState)=>state.sube)

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
        <View style={{alignItems:"center",marginVertical:150}}>
             <CustomSelect
            data={SUBE}
            setSelected={setCategory}
            save="value"
            search={true}
            placeholder="Sube seciniz"
            
            />
         {error?<Text style={styles.error}>Boş geçilemez</Text>:null}   
     <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{dispatch(Sube(category));Next()}}
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
export default SubeScreen