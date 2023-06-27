import React, { useState } from "react";
import {Text, View, Pressable, StyleSheet, FlatList, Image, Appearance} from "react-native";
import {containsKey, getData, removeItem, storeData} from "../storage";
import {RootState} from "../src/store";
import {useSelector} from "react-redux";
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native'
const Favorite = ({navigation}:{navigation:any}) => {
  const paraBirimi=useSelector((state:RootState)=>state.paraBirimi)
  const myFavList = useSelector((state: RootState) => state.fav);
  const [theme,setTheme]=useState(Appearance.getColorScheme())
Appearance.addChangeListener((scheme)=>
setTheme(scheme.colorScheme))
  const map = myFavList.favorites.map(item => {
    return {
      Isim: item.Isim,
      Alis: item.Alis,
      Satis: item.Satis,
    };
  });
  const navigate = (id: string,satis:string,alis:string) => {
    navigation.navigate("Detail", {id: id,satis:satis,alis:alis});
  };
  if (map.filter(item => item.Isim).length <= 0) {
    return (
      <View  style={ theme==="light"?   { alignItems: "center",backgroundColor:"white",flex:1}: { alignItems: "center",backgroundColor:"black",flex:1}} >
      <View style={{marginTop: 263, alignItems: "center"}}>
        <LottieView
        source={theme==="light"?  require("../assets/Lottie/like.json"):require("../assets/Lottie/likeDark.json")}
        style={{height:90,width:90}}
        autoPlay
        />
        
        <Text
          style={{
            fontSize: 13,
            color: "#78828A",
            marginTop: 23,
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Opps! Favori listenize ekleme yapmalısınız
        </Text>
      </View>
      </View>
    );
  }

  return (
    <View style={ theme==="dark"? {backgroundColor:"black",flex:1}:{backgroundColor:"white",flex:1}}>

    
    <FlatList
      data={map}
      keyExtractor={i => i.Isim}
      renderItem={({item}) => {
        return (
          <Pressable 
          style={ theme==="light"? styles.container:[styles.container,{borderColor:"gray",borderWidth:1,backgroundColor:"black"}]}
          onPress={()=>navigate(item.Isim,item.Satis,item.Alis)} >
         
            <Text style={styles.textStyle}>{item.Isim}</Text>
            <Text style={styles.rightText}>{(parseFloat(item.Satis)/paraBirimi.paraBirimi).toFixed(4)}</Text>
         
          </Pressable>
        );
      }}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    margin: 3,
    borderRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,

  },
  textStyle: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "TiltWarp-Regular",
    color: "white",
  },

  rightText: {
    right: 12,
    top: 8.33,
    color: "white",
    position: "absolute",
    fontSize: 16,
  },
});
export default Favorite;
