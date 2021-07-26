import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO
} from '../types'

import axiosClient from '../config/axios'

import Swal from 'sweetalert2'

//return an arrow function inside an arrow function
export default function createNewProductAction(product){
    return async (dispatch) => {
        dispatch(addProducts())

        try {
            await axiosClient.post('/products', product)
            dispatch(addProductSuccess(product))

            //show alert 
            Swal.fire(
                'Correct',
                'It was sucessfully added',
                'success'
            )
        } catch (error) {
            dispatch(addProductError(true))           

            //Error alert
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again!'
            })
        }
    }
}




//create addProduct function 
const addProducts = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//create addProductSuccess function
const addProductSuccess = (product) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product
})
//create addProductError function
const addProductError = (product) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: product
})