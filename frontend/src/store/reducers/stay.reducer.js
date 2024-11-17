import { stayService } from "../../services/stay.service.js"

//* Stays
export const SET_STAYS = 'SET_STAYS'
export const SET_STAY = 'SET_STAY'
export const REMOVE_STAY = 'REMOVE_STAY'
export const ADD_STAY = 'ADD_STAY'
export const UPDATE_STAY = 'UPDATE_STAY'
export const STAY_UNDO = 'STAY_UNDO'

//* Wish list 
export const TOGGLE_WISH_LIST_IS_SHOWN = 'TOGGLE_WISH_LIST_IS_SHOWN'
export const ADD_STAY_TO_WISH_LIST = 'ADD_STAY_TO_WISH_LIST'
export const REMOVE_STAY_FROM_WISH_LIST = 'REMOVE_STAY_FROM_WISH_LIST'
export const CLEAR_WISH_LIST = 'CLEAR_WISH_LIST'

export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    stays: [],
    stay: null,
    isWishListShown: false,
    wishList: [],
    isLoading: false,
    filterBy: stayService.getDefaultFilter(),
    lastStays: []
}

export function stayReducer(state = initialState, action = {}) {
    switch (action.type) {
        //* Stays
        case SET_STAY:
            return { ...state, stay: action.stay }
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

        //* WISH_LIST
        case TOGGLE_WISH_LIST_IS_SHOWN:
            return { ...state, isWishListShown: !state.isWishListShown }

        case ADD_STAY_TO_WISH_LIST:
            return {
                ...state,
                wishList: [...state.wishList, action.stay]
            }

        case REMOVE_STAY_FROM_WISH_LIST:
            const wishList = state.wishList.filter(stay => stay._id !== action.stayId)
            return { ...state, wishList }


        case CLEAR_WISH_LIST:
            return { ...state, wishList: [] }

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