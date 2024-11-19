
//* Reservations
export const SET_RESERVATIONS = 'SET_RESERVATIONS'
export const SET_RESERVATION = 'SET_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'
export const ADD_RESERVATION = 'ADD_RESERVATION'
export const UPDATE_RESERVATION = 'UPDATE_RESERVATION'
export const RESERVATION_UNDO = 'RESERVATION_UNDO'



export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    reservations: [],
    reservation: null,
    isLoading: false,
    lastReservations: []
}

export function reservationReducer(state = initialState, action = {}) {
    switch (action.type) {
        //* Reservations
        case SET_RESERVATION:
            return { ...state, reservation: action.reservation }
        case SET_RESERVATIONS:
            return { ...state, reservations: action.reservations }
        case REMOVE_RESERVATION:
            const lastReservations = [...state.reservations]
            return {
                ...state,
                reservations: state.reservations.filter(reservation => reservation._id !== action.reservationId),
                lastReservations
            }
        case ADD_RESERVATION:

            return {
                ...state,
                reservations: [...state.reservations, action.reservation]
            }
        case UPDATE_RESERVATION:
            return {
                ...state,
                reservations: state.reservations.map(reservation => reservation._id === action.reservation._id ? action.reservation : reservation)
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case RESERVATION_UNDO:
            return {
                ...state,
                reservations: [...state.lastReservations]
            }
            


        default:
            return state
    }
}