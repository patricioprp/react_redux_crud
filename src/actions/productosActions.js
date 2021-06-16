import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

//crear nuevos productos

export function crearNuevosProsductoAction(producto){
    return (dispatch) => {
        dispatch(agregarProducto());
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});