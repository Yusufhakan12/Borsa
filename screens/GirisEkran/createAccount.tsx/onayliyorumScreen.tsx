import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../src/store";

const OnayliyorumScreen = ({navigation}: {navigation: any}) => {
  const typeAccount = useSelector((state: RootState) => state.type);
  const currency = useSelector((state: RootState) => state.currency);
  const sube = useSelector((state: RootState) => state.sube);
  return (
    <View style={{alignItems: "center", marginVertical: 240}}>
      <View style={{alignSelf: "flex-start", marginLeft: 30}}>
        <Text style={{fontFamily: "TiltWarp-Regular"}}>Hesap türü:</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{typeAccount.type}</Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Welcome");
          }}
          style={styles.button}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>Duzenle</Text>
        </Pressable>
      </View>
      <View style={{alignSelf: "flex-start", marginLeft: 30}}>
        <Text style={{fontFamily: "TiltWarp-Regular"}}>Döviz Cinsi:</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{currency.typeCurrency}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Doviz");
          }}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>Duzenle</Text>
        </Pressable>
      </View>
      <View style={{alignSelf: "flex-start", marginLeft: 30}}>
        <Text style={{fontFamily: "TiltWarp-Regular"}}>Şube:</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{sube.Sube}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Sube");
          }}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>Duzenle</Text>
        </Pressable>
      </View>

      <View style={styles.saveButton}>
        <Pressable 
        onPress={()=>{
            navigation.navigate("SigIn")
        }}
        >
          <Text
            style={{
              fontFamily: "TiltWarp-Regular",
              paddingVertical: 8,
              color: "white",
              fontSize: 17,
            }}
          >
            Kaydet
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    margin: 7,
    fontFamily: "TiltWarp-Regular",
  },
  line: {
    fontSize: 24,
    marginRight: 1,
  },
  button: {
    marginRight: 12,
    marginVertical: 7,
  },
  container: {
    borderWidth: 1,
    height: 42,
    width: 340,
    marginHorizontal: 52,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  saveButton: {
    backgroundColor: "red",
    width: 160,
    height: 50,
    borderRadius: 11,
    alignItems: "center",
    alignSelf:"flex-end",
    marginRight:27,
    marginVertical:5
  },
});
export default OnayliyorumScreen;
