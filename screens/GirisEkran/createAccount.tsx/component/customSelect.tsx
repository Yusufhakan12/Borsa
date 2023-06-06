import React, { useState } from "react";
import { Text, View,StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

const CustomSelect=({data,setSelected,save,search,placeholder}:any)=>{

    return(
        <View>
        <SelectList
        data={data}
        setSelected={setSelected} 
        save={save}
        search={search}
        placeholder={placeholder}
        boxStyles={{borderRadius:15,width:370,margin:10}}
        dropdownStyles={{borderRadius:20,width:370,margin:10}}
        inputStyles={{color:"gray"}}
        dropdownTextStyles={{color:"gray"}}
        />
        </View>
    );
}
export default CustomSelect