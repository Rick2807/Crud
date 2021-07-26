import {
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO,
    COMENZAR_EDITAR_PRODUCTO 
}from '../types'

import axiosClient from '../config/axios'

export function editProductAction (product){
    return (dispatch) => {
        dispatch(editProduct(product))
    }
} 

const editProduct = (product) =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: product
})

export function editAction(product){
    return async (dispatch) => {
        startEditing(product)

        try {
            await axiosClient.put(`/products/${product.id}`, product)
            dispatch(editedProductSuccess(product))              
        } catch (error) {
            dispatch(editedProductError(true))
            console.log(error)
        }
    }
}

const startEditing = ()=>({
    type: COMENZAR_EDITAR_PRODUCTO
})

const editedProductSuccess = product => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: product
})
const editedProductError = product => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: product
})