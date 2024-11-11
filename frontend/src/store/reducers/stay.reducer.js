import { stayService } from "../../services/stay.service.js"

//* Stays
export const SET_STAYS = 'SET_STAYS'
export const REMOVE_STAY = 'REMOVE_STAY'
export const ADD_STAY = 'ADD_STAY'
export const UPDATE_STAY = 'UPDATE_STAY'
export const STAY_UNDO = 'STAY_UNDO'

//* Shopping stayt
export const TOGGLE_CART_IS_SHOWN = 'TOGGLE_CART_IS_SHOWN'
export const ADD_STAY_TO_CART = 'ADD_STAY_TO_CART'
export const REMOVE_STAY_FROM_CART = 'REMOVE_STAY_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    stays: [],
    isCartShown: false,
    shoppingCart: [],
    isLoading: false,
    filterBy: stayService.getDefaultFilter(),
    lastStays: []
}

export function stayReducer(state = initialState, action = {}) {
    switch (action.type) {
        //* Stays
        case SET_STAYS:
            return { ...state, stays: action.stays }
        case REMOVE_STAY:
            const lastStays = [...state.stays]
            return {
                ...state,
                stays: state.stays.filter(stay => stay._id !== action.stayId),
                lastStays
            }
        case ADD_STAY:

            return {
                ...state,
                stays: [...state.stays, action.stay]
            }
        case UPDATE_STAY:
            return {
                ...state,
                stays: state.stays.map(stay => stay._id === action.stay._id ? action.stay : stay)
            }

        //* Shopping stayt
        case TOGGLE_CART_IS_SHOWN:
            return { ...state, isCartShown: !state.isCartShown }

        case ADD_STAY_TO_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.stay]
            }

        case REMOVE_STAY_FROM_CART:
            const shoppingCart = state.shoppingCart.filter(stay => stay._id !== action.stayId)
            return { ...state, shoppingCart }


        case CLEAR_CART:
            return { ...state, shoppingCart: [] }

        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case STAY_UNDO:
            return {
                ...state,
                stays: [...state.lastStays]
            }


        default:
            return state
    }
}