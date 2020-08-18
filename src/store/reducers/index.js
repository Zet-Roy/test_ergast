import { combineReducers } from 'redux'
import drivers from './driversReducer'
import races from './racesReducer'

export default combineReducers({
    drivers,
    races
})