import { FavoriteState,informationsState,userState } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE,REMOVE_FAVORİTE, userActionTypes, LOG_IN, nextActionTypes, NEXT } from "./actionTypes";
import { useState } from "react";
import { Crypto } from "../../models/crypto";
const initialState:FavoriteState={
    favorites:[],
};

const userintialState:userState={
    user:false
}
const NextintialState:informationsState={
    info:"",
}
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


export function LoginReducer(
   
    state=userintialState,
    action:userActionTypes,
):userState{
    switch(action.type){
        case LOG_IN:
            return {
                user:!state.user
            }
            default:
                return state
    };
  
}

export function NextReducer(
    state=NextintialState,
    action:nextActionTypes
):informationsState{
    switch(action.type){
        case NEXT:
            return{
                info: action.payload
            };
           default:
            return state 
    }
}