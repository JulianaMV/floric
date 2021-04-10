import {combineReducers} from 'redux';
import flowers from './flowersReducer'
import buque from './buquereducer'
 
export default combineReducers({
    flowers,
    buque,
})