import { Crypto, Tiklanan } from "../../models/crypto";


export interface Favorites{

    Isim:string,
    Satis:string,
    Alis:string
    
}
export interface infoModel{
    Isim:string,
    SoyIsim:string
}
export interface informationsState{
    info:string
}

export interface FavoriteState{
    favorites:Favorites[];
}

export interface userState{
    user:boolean;
}

export interface typeState{
    type:string
}

export interface typeCurrencyState{
    typeCurrency:string
}

export interface SubeState{
    Sube:string
}

export interface BakiyeState{
    bakiye:number
}

export interface ParaBirimitate{
    paraBirimi:number
}

export interface TiklananParaState{
    tiklanan:string[]
}
export interface DilState{
    dil:boolean
}

