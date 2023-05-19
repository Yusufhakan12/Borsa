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
//navigation uyarısını silmek için any yazdık

/** 
const mapStateToProps=(state:RootState)=>({
  fav:state.fav,
});
*/
//type AppProps=ReturnType<typeof mapStateToProps>



const Home = ({ navigation }:{navigation:any} ) => {
  const deneme=1
  const myFavList=useSelector((state:RootState)=>state.fav)
  const paraBirimi=useSelector((state:RootState)=>state.paraBirimi)
  const currency=useSelector((state:RootState)=>state.currency)
  const map=myFavList.favorites.map((item)=>{
    return{
      Isim:item.Isim,
      Alis:item.Alis,
      Satis:item.Satis
    }
   })
    
const dispatch=useDispatch();

  const [cryptoList, setCrypto] = useState();
  //const [favoriteList, setFavoriteList] = useState<any[]>([]);
  //const [ favorite1, setFav ] = useState<any[]>([]);


  useEffect(() => {
    socket.on("borsa", data => {
      setCrypto(data)
    })
  }, [])
  

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
/** 
  const onRemoveFavorite = (borsa:Crypto) => {
    const filteredList = favorite1.filter(item => item.Isim !== borsa.Isim)
    setFav(filteredList)
  }
*/
  const ifExists = (borsa:Crypto) => {
   
    //const hasFav= containsKey(borsa.Isim);
    if (map.filter(item => item.Isim === borsa.Isim).length > 0) {
      //storeData(borsa.Isim,fav)
      return true
    }
    
    return false
    
  }

  const renderItem = ({ item }:{item:Crypto}) => {
    if(currency.typeCurrency===item.Isim){
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
