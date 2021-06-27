import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

//aqui combinamo todos los reducers, y nos crea solo 1 reducer

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});