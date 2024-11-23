import { httpService } from './http.service'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'orderDB'

export const reservationsService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy = {}) {
    console.log(filterBy)
    return httpService.get(`order`, filterBy)
}

function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}

async function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}
async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await httpService.put(`order/${order._id}`, order)
    } else {
        savedOrder = await httpService.post('order', order)
    }
    return savedOrder
}