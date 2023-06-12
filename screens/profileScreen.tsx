import React ,{useEffect, useState}from "react";
import { StyleSheet, Text, View,TouchableOpacity,Pressable, FlatList, Image,ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../src/store";
import Clipboard from "@react-native-clipboard/clipboard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SQLite from 'react-native-sqlite-storage'


const db = SQLite.openDatabase(
    {
        name: 'DovizDb',
        
    },
    () => { },
    error => { console.log(error) }
  );
const ProfileScreen=({navigation}:{navigation:any})=>{
const IBAN='TR80 0006 4000 0014 4031 1902 85'
const HESAPNO=1376
const sube=useSelector((state:RootState)=>state.sube)
const bakiye=useSelector((state:RootState)=>state.bakiye)
const currency=useSelector((state:RootState)=>state.currency)
const tiklanan=useSelector((state:RootState)=>state.tiklanan)
const [alinanTask,setAlinanTask]=useState<any[]>([]);
const [alinanTur,setAlinanTur]=useState([""]);
const [task,setTask]=useState<any[]>([])

useEffect(()=>{
  const interval=  setInterval(()=>{
        getData()
        getDataDoviz()
    },5000)
    return () => {
        clearInterval(interval); // setInterval'i temizle
      };
},[])

const getDataDoviz = () => {
    try {
     
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT Name FROM DovizTur",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    var temp = [];
                    var Name = results.rows.item(0).Name
                    setAlinanTur(Name)
                    for(let i=1;i<len;i++)
                    {
                        var Name = results.rows.item(i).Name
                        

                        temp.push(results.rows.item(i));
                        setTask(temp)

                    }

                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}


const getData = () => {
    try {
     
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM Bakiyeler",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    var temp=[]
                    for(let i=0;i<len;i++)
                    {
                        var Name = results.rows.item(i).Bakiye
                       
                        temp.push(results.rows.item(i))
                 
                        setAlinanTask(temp)
                    }

                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}

    return(
        <View>
            <ImageBackground
            style={{marginTop:7,height:200}}
            source={require("../assets/card-front.png")}
            >
            <View style={{height:26,width:150,margin:9}}>
                <Text style={[styles.text]} >{sube.Sube}</Text>
            </View>
            <TouchableOpacity
            onPress={()=>Clipboard.setString(IBAN)}
            style={{borderWidth:0.5,marginHorizontal:8}}>
            <View style={[styles.cardStyle,{borderRadius:8,}]}>
                <Text
                style={[styles.text,{fontSize:17}]}
               
                >{IBAN}</Text>
                <MaterialIcons
                onPress={()=>Clipboard.setString(IBAN)}
                style={{paddingRight:12,paddingVertical:5,fontSize:17}}
                name="content-copy"
                />
            </View>
            </TouchableOpacity>
           

            <View style={[styles.cardStyle,{margin:8}]}>
            <Text style={[styles.text]} >Hesap No:</Text>
            <Text  style={[styles.text]}>0{HESAPNO} </Text>
            </View>
            <View style={[styles.cardStyle,{marginVertical:2,marginHorizontal:8,position:"relative"}]}>
                <View style={{flexDirection:"row"}}>
                <Text style={[styles.text]} >Bakiye:</Text>
                <Text style={[styles.text]} >{(bakiye.bakiye).toFixed(4)}</Text>
               
                </View>
                
                <Text style={[styles.text,{paddingLeft:286,position:"absolute"}]} >{alinanTur}</Text>
               
                

            </View>
           

            </ImageBackground>
            
            <Text style={[styles.text,{fontSize:25,color:"black"}]}>Hesaplarım</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:14}}>
               
               <FlatList
               data={task}
               
               keyExtractor={(i)=>i.Name}
               renderItem={({item})=>{
                return(
                <View style={{margin:4,height:30,flex:1}}>
                    {task? <Text style={[styles.text,{color:"black",paddingLeft:6}]}>{item.Name}</Text>:null}
                    </View>
                );
                }}
               
               />
               <View style={{marginRight:13}}>
               <FlatList
               data={alinanTask}
               renderItem={({item})=>{return(<View style={{marginRight:2,backgroundColor:"black",marginVertical:4,height:30,borderRadius:1}}>{alinanTask?<Text style={[styles.text,{color:"green",}]}>{(item.Bakiye)}</Text>:null}</View>)}}
               
               />
               </View>
               
            </View>
            
            <View style={{alignItems:"center",margin:8,backgroundColor:"green",height:30,borderRadius:10,marginTop:55}}>
            <Pressable
            onPress={()=>navigation.navigate("EkstraHesap")}
            >       
            <View style={{alignItems:"center",backgroundColor:"green",width:130,height:30,borderRadius:10,paddingVertical:2}}>
            <Text style={[styles.text,{color:"white"}]} >Hesap olustur</Text>

            </View>
            </Pressable>

            </View>

            
        </View>
    );
}
const styles=StyleSheet.create({
    text:{
        fontFamily:"TiltWarp-Regular",
        color:"white",
        paddingLeft:4
    },
    cardStyle:{
        height:26,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default ProfileScreen