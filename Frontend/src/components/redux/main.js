import {getProductsreducer} from './reducer';
import {combineReducers} from 'redux'

const rootreducers = combineReducers({getProductsdata: getProductsreducer})


export default rootreducers