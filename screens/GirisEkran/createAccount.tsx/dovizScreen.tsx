import React, { useState,useEffect } from "react";
import { Text, View,StyleSheet ,Appearance} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../customBottom";
import { DOVİZ } from "../../../src/data/data";
import { RootState } from "../../../src/store";
import { TypeCurrency } from "../../../src/store/actions";
import CustomSelect from "./component/customSelect";
import SQLite from 'react-native-sqlite-storage'
import { SignInScreenDark } from "../../component/darkMode";
import { SIGNINTRANSLATION } from "../../../langauge/langauge";
const db=SQLite.openDatabase(
    {
        name:'DovizDb',
       
    },
    ()=>{},
    error=>{console.log(error)}
);

const DovizScreen=({navigation}:{navigation:any})=>{
const [category,setCategory]=useState("")
const [error,setError]=useState(false);
const langauge=useSelector((state:RootState)=>state.dil)
const dispatch=useDispatch();
const currency=useSelector((state:RootState)=>state.currency)
const [theme,setTheme]=useState(Appearance.getColorScheme())
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))
useEffect(() => {
    createTable();
    getData();
}, []);
useEffect(() => {
    
    getData();
}, [category]);

const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "DovizTur"
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
        )
    })
}


const getData = () => {
    
    try {
        // AsyncStorage.getItem('UserData')
        //     .then(value => {
        //         if (value != null) {
        //             navigation.navigate('Home');
        //         }
        //     })
        db.transaction((tx) => {
            
            tx.executeSql(
                "SELECT Name FROM DovizTur",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    for(let i=0; i<len;i++)
                    {
                        var name=results.rows.item(i).Name;
                        
                        console.log(name)
                    }
               
                   
                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}


const removeData = async () => {
    try {
        // await AsyncStorage.clear();
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM DovizTur",
                [],
              
                error => { console.log(error) }
            )
        })
    } catch (error) {
        console.log(error);
    }
}



const setData = async () => {
    if (category.length == 0 ) {
      console.log("boş")
    } else {
        dispatch(TypeCurrency(category))
        try {
            console.log("başarılı")
         
            await db.transaction(async (tx) => {
                // await tx.executeSql(
                //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                // );
                await tx.executeSql(
                    "INSERT INTO DovizTur (Name) VALUES (?)",
                    [category]
                );
            })
            
        } catch (error) {
            console.log(error);
        }
    }
}



const Next=()=>{
    
    if(category===null)
    {
        setError(!error)
    }
    else{

        
      setData()

        navigation.navigate("Sube")
    }
    
}

    return(
        <View style={ theme=="light"? styles.dovizContainer:SignInScreenDark.dovizContainer}>
            <View style={{marginTop:30}}>
            <CustomSelect
            data={DOVİZ}
            setSelected={setCategory}
            save="value"
            search={true}
            placeholder={langauge.dil===false?SIGNINTRANSLATION[14].Turkce:SIGNINTRANSLATION[14].English}
            
            />
            </View>
            
            {error?<Text style={styles.error}>{langauge.dil===false?SIGNINTRANSLATION[5].Turkce:SIGNINTRANSLATION[5].English}</Text>:null}
     <View style={{alignItems:"center",}}>
        <CustomButton
        onpress={()=>{Next()}}
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
    dovizContainer:{
        alignItems:"center",
     
    }
})
export default DovizScreen