import { combineReducers } from 'redux'
import ReducerCheck from './ReducerCheck'
import ReducerActive from './ReducerActive'

const ReducerRoot = combineReducers({
    Check: ReducerCheck,
    Active: ReducerActive
})

export default ReducerRoot