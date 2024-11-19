import { reservationsService } from "../../services/reservations.service.js";
import { showSuccessMsg } from "../../services/event-bus.service.js";
import { ADD_RESERVATION, RESERVATION_UNDO, REMOVE_RESERVATION, SET_RESERVATIONS, SET_RESERVATION, SET_IS_LOADING, UPDATE_RESERVATION } from "../reducers/reservation.reducer.js";
import { store } from "../store.js";
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer.js'

export function loadReservations() {

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return reservationsService.query()
        .then(reservations => {
            store.dispatch({ type: SET_RESERVATIONS, reservations })
        })
        .catch(err => {
            console.log('reservation action -> Cannot load reservations', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export async function loadReservation(reservationId) {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
     
        const reservation = await reservationsService.getById(reservationId)

        store.dispatch({ type: SET_RESERVATION, reservation })
    } catch (err) {
        console.log('Cannot load reservation', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        
    }
}

export function removeReservation(reservationId) {
    return reservationsService.remove(reservationId)
        .then(() => {
            store.dispatch({ type: REMOVE_RESERVATION, reservationId })
        })
        .catch(err => {
            console.log('reservation action -> Cannot remove reservation', err)
            throw err
        })
}

export function removeReservationOptimistic(reservationId) {
    store.dispatch({ type: REMOVE_RESERVATION, reservationId })
    return reservationsService.remove(reservationId)
        .then(() => {
            showSuccessMsg('Removed Reservation!')
        })
        .catch(err => {
            store.dispatch({ type: RESERVATION_UNDO })
            console.log('reservation action -> Cannot remove reservation', err)
            throw err
        })
}

export function saveReservation(reservation) {
    console.log('llllllllllll',reservation)
    const type = reservation._id ? UPDATE_RESERVATION : ADD_RESERVATION
    return reservationsService.save(reservation)
        .then(savedReservation => {
            console.log('savedReservation:', savedReservation)
            store.dispatch({ type, reservation: savedReservation })
            return savedReservation
        })
        .catch(err => {
            console.log('reservation action -> Cannot save reservation', err)
            throw err
        })
}

