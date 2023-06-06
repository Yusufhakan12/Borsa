import React, { useState, useEffect } from "react"
import { Text, View, Pressable, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import { socket } from "../App"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { addFavorite,RemoveFavorite } from "../src/store/actions"
import { Crypto } from "../models/crypto"
import { containsKey, getData, removeItem, storeData } from "../storage"
import {useDispatch,useSelector} from "react-redux";
import { RootState } from "../src/store"
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
  {
      name: 'DovizDb',
      
  },
  () => { },
  error => { console.log(error) }
);
const Home = ({ navigation }:{navigation:any} ) => {
  const myFavList=useSelector((state:RootState)=>state.fav)
  const paraBirimi=useSelector((state:RootState)=>state.paraBirimi)
  //const currency=useSelector((state:RootState)=>state.currency)
  const [currency,setcurrency]=useState("");
  const [cryptoList, setCrypto] = useState();
  const dispatch=useDispatch();
  const map=myFavList.favorites.map((item)=>{
    return{
      Isim:item.Isim,
      Alis:item.Alis,
      Satis:item.Satis
    }
   })
    


  useEffect(() => {
    socket.on("borsa", data => {
      setCrypto(data)
    })
  }, [])
  

  useEffect(() => {
    getData();
}, []);

const getData = () => {
    try {
     
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT Name FROM DovizTur",
                [],
                (tx, results) => {
                    var len = results.rows.length;
                   
                      var Name = results.rows.item(0).Name;
                      console.log(Name)
                      setcurrency(Name);
                    
                        
                        
                        
                    
                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}







 const navigate = (id: string,satis:string,alis:string) => {
    navigation.navigate("Detail", {id: id,satis:satis,alis:alis});
  };

  const onFavorite = (borsa:Crypto) => {
    //setFav([...favorite1, borsa])
    /** 
    try {
      await removeItem(borsa.Isim)
     
      /**const hasFav=await containsKey(borsa.Isim);
      if(!hasFav){
        await storeData(borsa.Isim,fav);
      }
      
    } catch (error:any) {
      console.error(error.message);
    }finally{
      
      const favList=await getData(borsa.Isim);
    }
    */
    
  }

  const ifExists = (borsa:Crypto) => {
   
    //const hasFav= containsKey(borsa.Isim);
    if (map.filter(item => item.Isim === borsa.Isim).length > 0) {
      //storeData(borsa.Isim,fav)
      return true
    }
    
    return false
    
  }

  const renderItem = ({ item }:{item:Crypto}) => {
    if(currency===item.Isim){
      paraBirimi.paraBirimi=parseInt(item.Satis)
      
    }
    return (
      <View>
        <Pressable
          onPress={() => navigate(item.Isim,item.Satis,item.Alis)}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>{item.Isim}</Text>
          <Text style={styles.rightText}>{(parseFloat(item.Satis)/paraBirimi.paraBirimi).toFixed(4)}</Text>

          <Pressable onPress={() => ifExists(item)?dispatch(RemoveFavorite(item)) : dispatch(addFavorite(item)) }>
            <MaterialIcons
              name={ifExists(item) ? "favorite" : "favorite-outline"}
              size={25}
              style={styles.icon}
              color="white"
            />
          </Pressable>
        </Pressable>

      </View>
      
    )
  }

  return (
    <FlatList
      data={cryptoList}
      keyExtractor={item => item.Isim}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "black",
    margin: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7
  },
  textStyle: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "TiltWarp-Regular",
    color: "white"
  },

  rightText: {
    right: 35,
    top: 8.33,
    color: "white",
    position: "absolute",
    fontSize: 16
  },
  icon: {
    position: "absolute",
    right: 1
  }
})

export default Home
