import { Crypto } from "../../models/crypto";


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