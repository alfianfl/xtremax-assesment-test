import { combineReducers } from 'redux';
import mapDataReducer from './mapDataReducer';
import selectedDataReducer from './selectedDataReducer';

const rootReducer = combineReducers({
  mapData: mapDataReducer,
  selectedData: selectedDataReducer
});

export default rootReducer;
