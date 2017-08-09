import {combineReducers} from 'redux'

import {emoReducer} from './emoReducer'
import { postEntry } from './postEntry'


const rootReducer = combineReducers({
  emoReducer, postEntry
})

export default rootReducer
