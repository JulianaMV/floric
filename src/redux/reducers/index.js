import {combineReducers} from 'redux';
import flowers from './flowerReduce'
import buque from './buqueReducer'
import local from './localbuqueReducer'
 
export default combineReducers({
    flowers,
    buque,
    local
})