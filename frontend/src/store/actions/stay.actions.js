import { stayService } from "../../services/stay.service.js";
import { showSuccessMsg } from "../../services/event-bus.service.js";
import { ADD_STAY, STAY_UNDO, REMOVE_STAY, SET_STAYS, SET_FILTER_BY, SET_IS_LOADING, UPDATE_STAY } from "../reducers/stay.reducer.js";
import { store } from "../store.js";

export function loadStays() {
    const filterBy = store.getState().stayModule.filterBy
    // store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return stayService.query(filterBy)
        .then(stays => {
            store.dispatch({ type: SET_STAYS, stays })
        })
        .catch(err => {
            console.log('stay action -> Cannot load stays', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeStay(stayId) {
    return stayService.remove(stayId)
        .then(() => {
            store.dispatch({ type: REMOVE_STAY, stayId })
        })
        .catch(err => {
            console.log('stay action -> Cannot remove stay', err)
            throw err
        })
}

export function removeStayOptimistic(stayId) {
    store.dispatch({ type: REMOVE_STAY, stayId })
    return stayService.remove(stayId)
        .then(() => {
            showSuccessMsg('Removed Stay!')
        })
        .catch(err => {
            store.dispatch({ type: STAY_UNDO })
            console.log('stay action -> Cannot remove stay', err)
            throw err
        })
}

export function saveStay(stay) {
    const type = stay._id ? UPDATE_STAY : ADD_STAY
    return stayService.save(stay)
        .then(savedStay => {
            console.log('savedStay:', savedStay)
            store.dispatch({ type, stay: savedStay })
            return savedStay
        })
        .catch(err => {
            console.log('stay action -> Cannot save stay', err)
            throw err
        })
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}