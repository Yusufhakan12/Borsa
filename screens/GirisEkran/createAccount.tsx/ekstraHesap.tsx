import React,{useEffect,useState} from "react";
import {View, Text, Pressable, StyleSheet,Modal, TouchableOpacity, Appearance} from "react-native";
import CustomSelect from "./component/customSelect";
import { DOVİZ } from "../../../src/data/data";
import CustomButton from "../customBottom";
import SQLite from 'react-native-sqlite-storage'
import LottieView from 'lottie-react-native'
import ModalScreen from "../../component/ModallScreen";
import ModalScreenError from "../../component/ModalScreenError";
import { SignInScreenDark } from "../../component/darkMode";
const db=SQLite.openDatabase(
    {
        name:'DovizDb',
       
    },
    ()=>{},
    error=>{console.log(error)}
);
const EkstraHesap=({navigation}:{navigation:any})=>{
const bakiye=0;
const [secilen,setSecilen]=useState("");
const [term,setTerm]=useState(false)
const [error,setError]=useState(Boolean);
const [theme,setTheme]=useState(Appearance.getColorScheme())
const [kontrol,setKontrol]=useState<any[]>([])
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))

    useEffect(() => {
createTable();
createTableBakiye()
getDataBakiye()
 getData();
    }, []);


    useEffect(()=>{
        for(let i=0;i<kontrol.length;i++)
        {
            if(kontrol[i]===secilen)
            {
                
                setError(!error)
                console.log(error)
                console.log("olmadı")
            }
        }
    },[secilen])
    
const onAdd=()=>{
   
    if(error===false)
    {
        setData()
        setDataBakiye()
        setTerm(!term)
        console.log("basildi")
    }
    
}
const navigaitonPress=()=>{
    setTerm(!term)
    navigation.navigate("Borsa")
}


    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "DovizTur"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
            )
        })
    }


    const createTableBakiye = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Bakiyeler"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Bakiye INTEGER);"
            )
        })
    }


    const removeData = async () => {
        try {
            // await AsyncStorage.clear();
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Bakiyeler",
                    [],
                  
                    error => { console.log(error) }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    

    const removeDatad = async () => {
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

    const getDataBakiye = () => {
        
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
            db.transaction((tx) => {
                
                tx.executeSql(
                    "SELECT Bakiye FROM Bakiyeler",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        for(let i=0; i<len;i++)
                        {
                            var name=results.rows.item(i).Bakiye;
                            console.log(name)
                        }
                   
                       
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }


    const setDataBakiye = async () => {
        if (secilen.length == 0 ||error) {
          console.log("boş")
        } else {
            try {
                console.log("başarılı")
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                await db.transaction(async (tx) => {
                    // await tx.executeSql(
                    //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                    // );
                    await tx.executeSql(
                        "INSERT INTO Bakiyeler (Bakiye) VALUES (?)",
                        [0]
                    );
                })
                
            } catch (error) {
                console.log(error);
            }
        }
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
                            kontrol.push(name)
                            
                        }
                       
                        
                       
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }


    const setData = async () => {
       
        if (secilen.length == 0 ||error) {
          console.log("boş")
        } else {
            try {
                console.log("başarılı")
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                await db.transaction(async (tx) => {
                    // await tx.executeSql(
                    //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                    // );
                    await tx.executeSql(
                        "INSERT INTO DovizTur (Name) VALUES (?)",
                        [secilen]
                    );
                })
                
            } catch (error) {
                console.log(error);
            }
        }
    }


    return(

        <View style={ theme==="light"? styles.container:SignInScreenDark.containerEkstraHesap}>

            <LottieView
            source={require("../../../assets/Lottie/wallet.json")}
            autoPlay
            style={{height:250,width:250}}
            />
            <CustomSelect
            data={DOVİZ}
            setSelected={setSecilen}
            save="value"
            placeholder="Hesap seciniz"
            
            />

           
              <View>
              <CustomButton
            onpress={onAdd}
            text="Onayla"
            
            />
            </View>

          <ModalScreen
          visible={term}
          onpress={navigaitonPress}
          />
          {error?<ModalScreenError
          visible={error}
          onpress={()=>{setError(!error) ,navigation.navigate("Borsa")} }
          text="Böyle bir hesabınız zaten var"
          />:null}
        </View>
      
    );
}

const styles=StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor:"white" ,
        borderRadius: 20,
        width: '87%',
        padding: 35,
        alignItems: 'center',
      },
      container:{
        alignItems:"center",
        flex:1
      }
})
export default EkstraHesap;