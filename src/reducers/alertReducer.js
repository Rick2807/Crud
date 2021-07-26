import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types'

const initialState = {
    alert: null
} 

const alertReducer = (state = initialState, action) =>{
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alert: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state, 
                alert: null
            }

        default:
            return state
    }
}

export default alertReducer