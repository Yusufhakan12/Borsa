import {combineReducers} from 'redux';
import {favoriteReducer,LoginReducer,NextReducer, TypeReducer,TypeCurrencyReducer, SubeReducer} from './store/reducers';
import {legacy_createStore as createStore} from 'redux'
export const rootReducer = combineReducers({
  fav: favoriteReducer,
  us:LoginReducer,
  info:NextReducer,
  type:TypeReducer,
  currency:TypeCurrencyReducer,
  sube:SubeReducer
  // OtherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const store=createStore(rootReducer);
export default store;

