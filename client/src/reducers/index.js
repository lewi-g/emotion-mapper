import {combineReducers} from 'redux'

import {emoReducer} from './emoReducer'
import postEntry  from './postEntry'
import getEntries from './getEntries'


const rootReducer = combineReducers({
  emoReducer, postEntry, getEntries
})

export default rootReducer
