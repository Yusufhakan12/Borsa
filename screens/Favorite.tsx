import React from "react";
import {Text, View, Pressable, StyleSheet, FlatList, Image} from "react-native";
import {containsKey, getData, removeItem, storeData} from "../storage";
import {RootState} from "../src/store";
import {useSelector} from "react-redux";

/** 
const mapStateToProps=(state:RootState)=>({
  fav:state.fav,
});
type AppProps=ReturnType<typeof mapStateToProps>
*/

const Favorite = () => {
  const paraBirimi=useSelector((state:RootState)=>state.paraBirimi)
  const myFavList = useSelector((state: RootState) => state.fav);
  const map = myFavList.favorites.map(item => {
    return {
      Isim: item.Isim,
      Alis: item.Alis,
      Satis: item.Satis,
    };
  });

  if (map.filter(item => item.Isim).length <= 0) {
    return (
      <View style={{marginTop: 263, alignItems: "center"}}>
        <Image
          source={require("../assets/search.png")}
          style={{width: 53, height: 53}}
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
    );
  }

  return (
    <FlatList
      data={map}
      keyExtractor={i => i.Isim}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.textStyle}>{item.Isim}</Text>
            <Text style={styles.rightText}>{(parseFloat(item.Satis)/paraBirimi.paraBirimi).toFixed(4)}</Text>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    margin: 2,
    borderRadius: 10,
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
