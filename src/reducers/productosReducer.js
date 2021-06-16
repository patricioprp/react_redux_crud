import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
//Cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading:false
}

//si a la funcion no se le pasa nada inicia con el state inicial
export default function(state = initialState,action){
    switch(action.type){

        case AGREGAR_PRODUCTO:
            return { 
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}