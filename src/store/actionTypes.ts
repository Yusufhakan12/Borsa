import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { Crypto, Tiklanan } from "../../models/crypto";
import { Favorites,informationsState,infoModel } from "./models";
export  const ADD_FAVORİTE='ADD_FAVORİTE';
export const REMOVE_FAVORİTE='REMOVE_FAVORİTE';
export const LOG_IN="LOG_IN";
export const NEXT="NEXT";
export const TYPE="TYPE";
export const TYPE_CURRENCY="TYPE_CURRENCY";
export const SUBE="SUBE";
export const BAKIYE="BAKIYE";
export const PARA_BIRIMI="PARA_BIRIMI";
export const TIKLANAN_PARA="TIKLANAN_PARA";

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

interface Bakiye{
    type:typeof BAKIYE,
    payload:number
}
interface ParaBirimi{
    type:typeof PARA_BIRIMI,
    payload:number
}
interface TiklananPara{
    type:typeof TIKLANAN_PARA
    payload:string
}

export type FavoriteActionsTypes=AddFavoriteAction|RemoveFavorite;
export type userActionTypes=Login;
export type nextActionTypes=Next;
export type typeActionTypes=Type;
export type typeCurrencyActionTypes=TypeCurrency;
export type SubeActionTypes=Sube;
export type BakiyeActionTypes=Bakiye;
export type ParaBirimiActionTypes=ParaBirimi;
export type TiklananParaActionTypes=TiklananPara;