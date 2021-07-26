import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types'

export const showAlert = alert => {
    return (dispatch)=>{
        dispatch(createAlert(alert))
    }
}

const createAlert = alert => ({
    type: MOSTRAR_ALERTA, 
    payload: alert
})

export const hideAlert = () => {
    return (dispatch) =>{
        dispatch(removeAlert())
    }
}

const removeAlert = () => ({
    type: OCULTAR_ALERTA
})