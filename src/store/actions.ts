import { FavoriteActionsTypes,userActionTypes,ADD_FAVORİTE,REMOVE_FAVORİTE,LOG_IN,NEXT, nextActionTypes, typeActionTypes, TYPE,TYPE_CURRENCY, typeCurrencyActionTypes,SubeActionTypes, SUBE, BakiyeActionTypes, BAKIYE,PARA_BIRIMI, ParaBirimiActionTypes, TiklananParaActionTypes, TIKLANAN_PARA } from "./actionTypes";
import { Crypto, Tiklanan } from "../../models/crypto";
import { informationsState,infoModel } from "./models";

 export function addFavorite(newFavorite:Crypto):
 FavoriteActionsTypes{
    return{
        type:ADD_FAVORİTE,
        payload:newFavorite
    };
 };

 
 export function RemoveFavorite(deletefav:Crypto):
 FavoriteActionsTypes{
    return{
        type:REMOVE_FAVORİTE,
        meta:{
            deletefav
        }
    };
 };

 export function Login(user:boolean):
 userActionTypes{
    return{
        type:LOG_IN,
        payload:user
    };
 };

 export function Next(informations:string):
 nextActionTypes{
    return{
        type:NEXT,
        payload:informations
    };
 };

 export function Type(type:string):
 typeActionTypes{
    return{
        type:TYPE,
        payload:type
    };
 };
 export function TypeCurrency(type:string):
 typeCurrencyActionTypes{
    return{
        type:TYPE_CURRENCY,
        payload:type
    };
 };

 export function Sube(type:string):
 SubeActionTypes{
    return{
        type:SUBE,
        payload:type
    };
 };
 
 export function Bakiye(type:number):
 BakiyeActionTypes{
    return{
        type:BAKIYE,
        payload:type
    };
 };

 export function ParaBirimi(type:number):
 ParaBirimiActionTypes{
    return{
        type:PARA_BIRIMI,
        payload:type
    };
 };

 export function TiklananPara(type:string):
 TiklananParaActionTypes{
    return{
        type:TIKLANAN_PARA,
        payload:type
    };
 };