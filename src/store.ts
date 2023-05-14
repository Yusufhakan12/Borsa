import {combineReducers} from 'redux';
import {favoriteReducer,LoginReducer,NextReducer} from './store/reducers';
import {legacy_createStore as createStore} from 'redux'
export const rootReducer = combineReducers({
  fav: favoriteReducer,
  us:LoginReducer,
  info:NextReducer
  // OtherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const store=createStore(rootReducer);
export default store;

