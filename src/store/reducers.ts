import { FavoriteState,SubeState,informationsState,typeCurrencyState,typeState,userState } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE,REMOVE_FAVORİTE, userActionTypes, LOG_IN, nextActionTypes, NEXT, typeActionTypes, TYPE, typeCurrencyActionTypes, TYPE_CURRENCY, SubeActionTypes,SUBE } from "./actionTypes";
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
const typeInitialState:typeState={
    type:"",
    
}
const typeCurrencyInitialState:typeCurrencyState={
    typeCurrency:"",
}
const subeInitialState:SubeState={
    Sube:"",
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
    };
};

export function TypeReducer(
    state=typeInitialState,
    action:typeActionTypes
):typeState{
    switch(action.type){
        case TYPE:
            return{
                type:action.payload
            }
            default:
                return state
    };
};

export function TypeCurrencyReducer(
    state=typeCurrencyInitialState,
    action:typeCurrencyActionTypes
):typeCurrencyState{
    switch(action.type){
        case TYPE_CURRENCY:
            return{
                typeCurrency:action.payload
            }
            default:
                return state
    };
};

export function SubeReducer(
    state=subeInitialState,
    action:SubeActionTypes
):SubeState{
    switch(action.type){
        case SUBE:
            return{
                Sube:action.payload
            }
            default:
                return state
    }
}