import { FavoriteActionsTypes,ADD_FAVORİTE,REMOVE_FAVORİTE } from "./actionTypes";
import { Crypto } from "../../models/crypto";

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