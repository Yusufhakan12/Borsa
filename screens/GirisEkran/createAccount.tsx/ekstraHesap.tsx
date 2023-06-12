import React,{useEffect,useState} from "react";
import {View, Text, Pressable, StyleSheet,Modal, TouchableOpacity, Appearance} from "react-native";
import CustomSelect from "./component/customSelect";
import { DOVİZ } from "../../../src/data/data";
import CustomButton from "../customBottom";
import SQLite from 'react-native-sqlite-storage'
import LottieView from 'lottie-react-native'
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
const [theme,setTheme]=useState(Appearance.getColorScheme())
    Appearance.addChangeListener((scheme)=>
    setTheme(scheme.colorScheme))

    useEffect(() => {
//createTable();
//createTableBakiye()
//getDataBakiye()
 //getData();
    }, []);
    
const onAdd=()=>{
    //setData()
    //setDataBakiye()
    //removeData()
    setTerm(!term)
    console.log("basildi")
}
function handleOnPress() {
    setTerm(!term)
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
        if (secilen.length == 0 ) {
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
                        [null]
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
                            console.log(name)
                        }
                   
                       
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }


    const setData = async () => {
        if (secilen.length == 0 ) {
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

        <View style={{alignItems:"center"}}>
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

            <Modal animationType="slide" transparent={true} visible={term} >

                <View style={styles.centeredView}>
                    <View style={  styles.modalView}>
                      
                <LottieView 
                source={require("../../../assets/Lottie/success.json")}
                autoPlay
                style={{height:140,width:140}}
                />


                    <View
                  style={{
                    marginTop:25,
                    height: 39,
                    backgroundColor: '#009B8D',
                    width: 133,
                    borderRadius: 28,
                  }}>
                  <TouchableOpacity onPress={handleOnPress} >
                    <Text
                      style={{
                        fontSize: 15,
                        margin: 8,
                        marginLeft: 50,
                        color: 'white',
                      }}>
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
                    </View>
                </View>


            </Modal>
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
})
export default EkstraHesap;