import { combineReducers, compose, legacy_createStore as createStore, } from 'redux'
import { userService } from "../services/user.service.js"
import { stayReducer } from "./reducers/stay.reducer.js"
import { reservationReducer } from "./reducers/reservation.reducer.js"
import { userReducer } from "./reducers/user.reducer.js"
import { systemReducer } from './reducers/system.reducer.js'

const rootReducer = combineReducers({
    stayModule: stayReducer,
    reservationModule: reservationReducer,
    userModule: userReducer,
    systemModule: systemReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
