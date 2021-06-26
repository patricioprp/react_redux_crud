import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR
} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


//crear nuevos productos
export function crearNuevosProsductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos',producto);

            //si todo sale bien
            dispatch(agregarProductoExito(producto));    
            
            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));

            //Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


//Funcion que descargan los productos de la base de datos
export function obtenerProductosAction(){
    return async(dispatch) => {
        dispatch(descargarProducto());

        try {
            // setTimeout(async() => {
            //     const respuesta =  await clienteAxios.get('/productos');
            //     //   console.log(respuesta.data);
            //       dispatch(descargaProductosExitosa(respuesta.data));
            // }, 3000);
          const respuesta =  await clienteAxios.get('/productos');
        //   console.log(respuesta.data);
          dispatch(descargaProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaProductosError());
        }
    }
}

const descargarProducto = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

//Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async (dispatch)=>{
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);   
            dispatch(eliminarProductoExito());       
            //si se elimina
        Swal.fire("Eliminado!", "El producto fue eliminado.", "success");
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = id => ({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});