import {
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types'

import Swal from 'sweetalert2'
import axiosClient from '../config/axios'


export default function deleteProductAction(product){
    return async (dispatch) =>{
        dispatch(reqDeletedProduct(product))

        try { 
            await axiosClient.delete(`/products/${product}`)
            dispatch(deletedProductSucess())

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            console.log(error)
            dispatch(deletedProductError(true))
        }
    }
} 

const reqDeletedProduct = (id) =>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const deletedProductSucess = () =>({
    type: PRODUCTO_ELIMINADO_EXITO,
    
})

const deletedProductError = (error) => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: error     
})