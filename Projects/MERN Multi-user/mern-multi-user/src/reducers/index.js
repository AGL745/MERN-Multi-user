//Redux has a single store for centralized application state changes. This reducer
//splits data composition 

import { combineReducers } from "redux"
import auth from "./auth"
import message from "./message"

export default combineReducers({
    auth,
    message, 
})