import {combineReducers} from 'redux';
import {favoriteReducer} from './store/reducers';
import {legacy_createStore as createStore} from 'redux'
export const rootReducer = combineReducers({
  fav: favoriteReducer,
  // OtherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const store=createStore(rootReducer);
export default store;

