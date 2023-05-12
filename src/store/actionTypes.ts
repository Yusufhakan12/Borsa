import { Crypto } from "../../models/crypto";
import { Favorites } from "./models";
export  const ADD_FAVORİTE='ADD_FAVORİTE';
export const REMOVE_FAVORİTE='REMOVE_FAVORİTE';

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



export type FavoriteActionsTypes=AddFavoriteAction|RemoveFavorite;