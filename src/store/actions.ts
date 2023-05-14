import { FavoriteActionsTypes,userActionTypes,ADD_FAVORİTE,REMOVE_FAVORİTE,LOG_IN,NEXT, nextActionTypes } from "./actionTypes";
import { Crypto } from "../../models/crypto";
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
    }
 }

 