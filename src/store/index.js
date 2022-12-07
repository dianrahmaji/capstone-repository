import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { documentReducer } from './reducers/documentReducers';
import {
  repositoryReducer,
  folderReducer,
} from './reducers/repositoryReducers';

const reducer = combineReducers({
  document: documentReducer,
  repository: repositoryReducer,
  folder: folderReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
