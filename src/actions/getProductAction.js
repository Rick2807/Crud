import {
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR
} from '../types'

import axiosClient from '../config/axios'

export default function getProductAction() {
    return async (dispatch) =>{
        dispatch(startToGetProduct())

        try {
            const result = await axiosClient('/products')
            
            dispatch(getProductSucess(result.data))
            
        } catch (error) {
            dispatch(getProductError(true))
        }
    }
}

const startToGetProduct = () => ({
    type: COMENZAR_DESCARGA_PRODUCTO,
    payload: true
})

const getProductSucess = payload =>({
    type: DESCARGA_PRODUCTO_EXITO, 
    payload: payload
})

const getProductError = (product) =>({
    type: DESCARGA_PRODUCTO_ERROR,
    payload: product
})