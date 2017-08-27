import { combineReducers } from 'redux';
import SomethingFetched from './reducer_fetch';
import SelectedSomethingReducer from './reducer_selected_something';
import LoginReducer from './reducer_login';
import userAuthInfoReducer from './reducer_set_user_auth_info';
import userDbInfoReducer from './reducer_set_user_db_info';

const rootReducer = combineReducers({
  something: SomethingFetched,
  selectedSomething: SelectedSomethingReducer,
  loggedIn: LoginReducer,
  userAuthInfo: userAuthInfoReducer,
  userDbInfo: userDbInfoReducer,
});

export default rootReducer;
