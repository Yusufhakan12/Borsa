import { Crypto } from "../../models/crypto";


export interface Favorites{

    Isim:string,
    Satis:string,
    Alis:string
    
}

export interface FavoriteState{
    favorites:Favorites[];
}