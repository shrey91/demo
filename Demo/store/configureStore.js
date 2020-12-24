import { createStore, combineReducers } from 'redux';
import reducer from '../redux/reducer/reducer';
const rootReducer = combineReducers(
{ mainReducer: reducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;