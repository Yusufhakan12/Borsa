import { Crypto } from "../../models/crypto";
import { Favorites,informationsState,infoModel } from "./models";
export  const ADD_FAVORİTE='ADD_FAVORİTE';
export const REMOVE_FAVORİTE='REMOVE_FAVORİTE';
export const LOG_IN="LOG_IN";
export const NEXT="NEXT";
export const TYPE="TYPE";
export const TYPE_CURRENCY="TYPE_CURRENCY";
export const SUBE="SUBE";

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
interface Type{
    type:typeof TYPE
    payload:string
}

interface TypeCurrency{
    type:typeof TYPE_CURRENCY,
    payload:string
}
interface Sube{

    type:typeof SUBE,
    payload:string
}


export type FavoriteActionsTypes=AddFavoriteAction|RemoveFavorite;
export type userActionTypes=Login;
export type nextActionTypes=Next;
export type typeActionTypes=Type;
export type typeCurrencyActionTypes=TypeCurrency;
export type SubeActionTypes=Sube;