import { combineReducers } from 'redux';
import configureStore from './middleware/createStore';

import IndexReducer from './modules/index/reducer';

function createStore() {
  const rootReducer = combineReducers({
    IndexReducer,
  });

  return configureStore(rootReducer);
}

export default createStore();
