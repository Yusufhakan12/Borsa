import { FavoriteState } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE,REMOVE_FAVORİTE } from "./actionTypes";
import { Crypto } from "../../models/crypto";
const initialState:FavoriteState={
    favorites:[],
};

export function favoriteReducer(
   state=initialState,
    action:FavoriteActionsTypes,
):FavoriteState {
    switch (action.type) {
        case ADD_FAVORİTE:
            return {
                favorites:[...state.favorites,action.payload]
            };
            
        case REMOVE_FAVORİTE:
            return{
                favorites:state.favorites.filter(
                    (item:Crypto)=>item.Isim!==action.meta.deletefav.Isim
                )
            };
        default:
            return state;
    }
}

