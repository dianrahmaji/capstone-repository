import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { documentReducer } from './reducers/documentReducers';
import { teamReducer } from './reducers/teamReducers';

const reducer = combineReducers({
  document: documentReducer,
  team: teamReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
