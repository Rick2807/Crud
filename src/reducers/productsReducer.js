import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO
} from '../types'

//initialize a state for reducer 

//Every reducer has its own
const initialState = {
    products: [],
    error: null, 
    loading: false,
    deleteProduct: null,
    editProduct: null
}



//create a reducer
 const productsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case AGREGAR_PRODUCTO: 
        case COMENZAR_DESCARGA_PRODUCTO:
            return {
                ...state,
                loading: action.payload
                
            }
        case AGREGAR_PRODUCTO_EXITO: 
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR: 
        case DESCARGA_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR: 
        case PRODUCTO_EDITADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTO_EXITO: 
            return{
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state, 
                deleteProduct: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO: 
            return {
                ...state, 
                products: state.products.filter(product => product.id !== state.deleteProduct),
                deleteProduct: null
            }
        case OBTENER_PRODUCTO_EDITAR: 
            return { 
                ...state, 
                editProduct: action.payload
            }
        case PRODUCTO_EDITADO_EXITO: 
            return {
                ...state, 
                editProduct: null, 
                products: state.products.map( product => 
                    product.id === action.payload.id ? action.payload : 
                    product  
                )
            }

        default:
            return state
    }
}

export default productsReducer