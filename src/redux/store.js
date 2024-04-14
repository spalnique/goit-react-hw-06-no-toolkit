import { legacy_createStore as createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contacts/reducers';
import { filterReducer } from './filter/reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
