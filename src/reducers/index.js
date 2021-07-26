import productsReducer from './productsReducer'
import alertReducer from './alertReducer'

import {combineReducers} from 'redux'


export default combineReducers({
    products: productsReducer,
    alert: alertReducer
})