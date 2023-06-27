import React, { useState } from "react";
import {View, Text, Pressable, StyleSheet, Appearance} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../src/store";
import { SignInScreenDark } from "../../component/darkMode";
import SQLite from 'react-native-sqlite-storage'
import { SIGNINTRANSLATION } from "../../../langauge/langauge";
const db=SQLite.openDatabase(
  {
      name:'DovizDb',
     
  },
  ()=>{},
  error=>{console.log(error)}
);
const OnayliyorumScreen = ({navigation}: {navigation: any}) => {
  const typeAccount = useSelector((state: RootState) => state.type);
  const currency = useSelector((state: RootState) => state.currency);
  const sube = useSelector((state: RootState) => state.sube);
  const langauge=useSelector((state:RootState)=>state.dil)
  const [theme,setTheme]=useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme)=>
  setTheme(scheme.colorScheme))

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
  return (
    <View  style={theme=="light"? styles.OnayliyorumContainer:SignInScreenDark.OnayliyorumContainer} >
      <View style={{alignItems: "center", marginVertical: 240}}>
      <View style={styles.topTitle}>
        <Text style={theme=="light"?styles.topText:SignInScreenDark.topText}>{langauge.dil===false?SIGNINTRANSLATION[16].Turkce:SIGNINTRANSLATION[16].English}</Text>
      </View>

      <View style={ theme=="light" ?styles.container:SignInScreenDark.containerBox}>
        <Text style={styles.title}>{typeAccount.type}</Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Welcome");
          }}
          style={styles.button}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>{langauge.dil===false?SIGNINTRANSLATION[19].Turkce:SIGNINTRANSLATION[19].English}</Text>
        </Pressable>
      </View>
      <View style={styles.topTitle}>
        <Text style={theme=="light"?styles.topText:SignInScreenDark.topText}>{langauge.dil===false?SIGNINTRANSLATION[17].Turkce:SIGNINTRANSLATION[17].English}</Text>
      </View>
      <View style={theme=="light" ?styles.container:SignInScreenDark.containerBox}>
        <Text style={styles.title}>{currency.typeCurrency}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            removeData()
            navigation.navigate("Doviz");
            
          }}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>{langauge.dil===false?SIGNINTRANSLATION[19].Turkce:SIGNINTRANSLATION[19].English}</Text>
        </Pressable>
      </View>
      <View style={styles.topTitle}>
        <Text style={theme=="light"?styles.topText:SignInScreenDark.topText}>{langauge.dil===false?SIGNINTRANSLATION[18].Turkce:SIGNINTRANSLATION[18].English}</Text>
      </View>
      <View style={theme=="light" ?styles.container:SignInScreenDark.containerBox}>
        <Text style={styles.title}>{sube.Sube}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Sube");
          }}
        >
          <Text style={{fontFamily: "TiltWarp-Regular"}}>{langauge.dil===false?SIGNINTRANSLATION[19].Turkce:SIGNINTRANSLATION[19].English}</Text>
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
            {langauge.dil===false?SIGNINTRANSLATION[20].Turkce:SIGNINTRANSLATION[20].English}
          </Text>
        </Pressable>
      </View>
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
  OnayliyorumContainer:{
    flex:1
  },
  topTitle:{
    alignSelf: "flex-start",
     marginLeft: 30
  },

  topText:{
    fontFamily: "TiltWarp-Regular"
  }
});
export default OnayliyorumScreen;
