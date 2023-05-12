import  { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text,View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Detail=({route}:{route:any})=>{
const  id=route.params.id;
    return (

        <Text>{id}</Text>


    );
};


export default Detail;
