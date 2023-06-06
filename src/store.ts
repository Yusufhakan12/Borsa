import {combineReducers} from 'redux';
import {favoriteReducer,LoginReducer,NextReducer, TypeReducer,TypeCurrencyReducer, SubeReducer, BakiyeReducer,ParaBirimiReducer, TiklananParaReducer,DilReducer} from './store/reducers';
import {legacy_createStore as createStore} from 'redux'
export const rootReducer = combineReducers({
  fav: favoriteReducer,
  us:LoginReducer,
  info:NextReducer,
  type:TypeReducer,
  currency:TypeCurrencyReducer,
  sube:SubeReducer,
  bakiye:BakiyeReducer,
  paraBirimi:ParaBirimiReducer,
  tiklanan:TiklananParaReducer,
  dil:DilReducer
  // OtherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const store=createStore(rootReducer);
export default store;

