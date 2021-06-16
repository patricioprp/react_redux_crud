import {combineReducers} from 'redux';
import productosReducer from './productosReducer';

//aqui combinamo todos los reducers, y nos crea solo 1 reducer

export default combineReducers({
    productos: productosReducer
});