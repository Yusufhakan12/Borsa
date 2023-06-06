import { BakiyeState, DilState, FavoriteState,ParaBirimitate,SubeState,TiklananParaState,informationsState,typeCurrencyState,typeState,userState } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE,REMOVE_FAVORİTE, userActionTypes, LOG_IN, nextActionTypes, NEXT, typeActionTypes, TYPE, typeCurrencyActionTypes, TYPE_CURRENCY, SubeActionTypes,SUBE, BakiyeActionTypes, BAKIYE, ParaBirimiActionTypes, PARA_BIRIMI, TiklananParaActionTypes, TIKLANAN_PARA, DilActionTypes, DIL } from "./actionTypes";
import { useState } from "react";
import { Crypto, Tiklanan } from "../../models/crypto";
import { act } from "react-test-renderer";
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
const bakiyeInitialState:BakiyeState={
    bakiye:1000
}
const paraBirimiInitialState:ParaBirimitate={
    paraBirimi:1
}

const TiklananParaInitialState:TiklananParaState={
    tiklanan:[]
}
const DilInitialState:DilState={
    dil:false
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
    };
};

export function BakiyeReducer(
    state=bakiyeInitialState,
    action:BakiyeActionTypes
):BakiyeState{
    switch(action.type){
        case BAKIYE:
            return{
                bakiye:action.payload
            }
            default:
                return state
    };
};

export function ParaBirimiReducer(
    state=paraBirimiInitialState,
    action:ParaBirimiActionTypes
):ParaBirimitate{
    switch(action.type){
        case PARA_BIRIMI:
            return{
                paraBirimi:action.payload
            }
            default:
                return state
    };
};

export function TiklananParaReducer(
    state=TiklananParaInitialState,
    action:TiklananParaActionTypes

):TiklananParaState{
    switch(action.type){
        case TIKLANAN_PARA:
            return{
                
                tiklanan:state.tiklanan.concat(action.payload)

            }
            default:
                return state
    }
}

export function DilReducer(
    state=DilInitialState,
    action:DilActionTypes
):DilState{
    switch(action.type){
        case DIL:
            return{
                dil:action.payload
            }
            default:
                return state
    }
}