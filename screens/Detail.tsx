import {useEffect, useState} from "react";
import { StyleSheet, Text, View, Pressable, TextInput} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../src/store";
import CustomSelect from "./GirisEkran/createAccount.tsx/component/customSelect";
import CustomButton from "./GirisEkran/customBottom";
import { Bakiye, TiklananPara } from "../src/store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../storage";
import { containsKey } from "../storage";
import { getData } from "../storage";
const Detail = ({route}: {route: any}) => {
  const bakiye=useSelector((state:RootState)=>state.bakiye)
  const tiklanan=useSelector((state:RootState)=>state.tiklanan)
  const dispatch=useDispatch()
  const [task,setTask]=useState([""]);
  const [tutar,setTutar]=useState("");
  const [error, setError]=useState(Boolean);
  const [satimError,setSatimError]=useState(false)
  const [succes,setSucces]=useState(false)
  const id = route.params.id;
  const satis=route.params.satis;
  const alis=route.params.alis
  const ifHave=tiklanan.tiklanan.indexOf(id)
  const [satimSayac,setSatimSayac]=useState(0)
  const [alimSayac,setAlimSayac]=useState(0);
  
  const SellFunction = () => {
    
    if(ifHave===-1)
    { setSatimSayac(satimSayac+1)
      console.log(satimSayac)
      if(error)
        {
          setError(!error)
        }
        if(satimSayac<1)
        {
          setSatimError(!satimError)
          
        }
       
        
      }
      else{
        if(error)
        {
          setError(!error)
        }
        setSucces(!succes)
        console.log("başarılı")
      }

  };
  const BuyFunction = (tutar:string) => {
    const intTutar=Number(parseFloat(tutar).toFixed(4))
  
    if(intTutar>bakiye.bakiye)
    { 
      if(succes===true)
      {
        setSucces(!succes)
      }
      setError(!error)
      console.log("bakiye yetersiz")
    }
    else
    {   setAlimSayac(alimSayac+1);
      if(satimError)
      {
        setSatimError(!satimError)
      }
      if(error===true)
      {
        setError(!error)
      }
    
      //setTask(id)
    
      const yeni=bakiye.bakiye-intTutar
    dispatch(TiklananPara(id))
   console.log(tiklanan)
    dispatch(Bakiye(yeni))
   
      setTask([...task,tutar])
      
      if(alimSayac<1)
      {
        setSucces(!succes)

      }
      console.log(yeni)
    }
      

  };

 
  return (
    <View style={{backgroundColor:"black",position:"relative"}}>
      <View style={{alignItems:"center"}}>
      <Text style={[styles.text,styles.text2]}>{id}</Text>
       
      </View>
      <View style={{margin:4,position:"relative",marginTop:44}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={[styles.text,styles.text2]}>Satış fiyatı:</Text>
        <Text style={[styles.text,styles.text2]}>{satis}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={[styles.text,styles.text2,{paddingLeft:13}]}>Alış fiyatı:</Text>
        <Text style={[styles.text,styles.text2]}>{alis}</Text>
        </View>

       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:43}}>
       <Text style={[styles.text,styles.text2,{paddingLeft:51}]}>Tutar:</Text>
       <TextInput
       value={tutar}
       onChangeText={setTutar}
       style={styles.Input}
       placeholder="0"
            />
       </View>
       <View style={{alignItems:"center",marginTop:25}}>
        {error?<Text style={[styles.text,{color:"red"}]}>Bakiyeniz yetersiz!</Text>:null}
        {succes?<Text style={[styles.text,{color:"green"}]}>İşlem başarılı</Text>:null}
        {satimError?<Text style={[styles.text,{color:"red"}]}>Paranız yok</Text>:null}
       </View>

      </View>
       
    
      
      <View style={{flexDirection:"row", justifyContent: "space-around"}}>
      <Pressable style={styles.container}
      onPress={()=>SellFunction()}
      >
          <Text style={styles.text}> Sell</Text>
        </Pressable>
        <Pressable 
        onPress={()=>BuyFunction(tutar)}
        style={[styles.container, {backgroundColor: "green"}]}>
          <Text style={styles.text}> Buy</Text>
        </Pressable>
      </View>
      
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 190,
    padding: 15,
    marginVertical:5,
    alignItems: "center",
    borderRadius: 5,
    marginTop:300,
    
   
    
   
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "TiltWarp-Regular",
    fontSize:13
    
  },
  Input:{
        borderRadius:5,
        borderWidth:1,
        backgroundColor:"#F9FBFC",
        paddingHorizontal:10,
        paddingVertical:5,
       
        position:"relative",
        width:90
        
        
  },
  text2:{
    fontSize:21,
    marginTop:5,
   
  }
});
export default Detail;
