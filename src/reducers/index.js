import { combineReducers } from 'redux';
import usersListReducer from './usersListReducer';

import idReducer from './id-reducer';

const rootReducer = combineReducers({
  userList: usersListReducer,
  id: idReducer
})

export default rootReducer;