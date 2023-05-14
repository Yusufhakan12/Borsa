import { Crypto } from "../../models/crypto";
import { Favorites,informationsState,infoModel } from "./models";
export  const ADD_FAVORİTE='ADD_FAVORİTE';
export const REMOVE_FAVORİTE='REMOVE_FAVORİTE';
export const LOG_IN="LOG_IN";
export const NEXT="NEXT";

interface AddFavoriteAction{
    type:typeof ADD_FAVORİTE;
    payload:Crypto;
}

interface RemoveFavorite{
    type:typeof REMOVE_FAVORİTE;
    meta:{
        deletefav:Crypto
    }
}

interface Login{
    type:typeof LOG_IN;
    payload:boolean
}

interface Next{
    type:typeof NEXT
    payload:string
}


export type FavoriteActionsTypes=AddFavoriteAction|RemoveFavorite;
export type userActionTypes=Login;
export type nextActionTypes=Next;