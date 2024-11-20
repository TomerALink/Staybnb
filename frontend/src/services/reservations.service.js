
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'



const STORAGE_KEY = 'reservationsDB'
            
export const reservationsService = {
  query,
  getById,
  save,
  remove,
}


async function query() {
  var reservationss = await storageService.query(STORAGE_KEY)
  
  // reservationss = reservationss.filter((reservations) => reservations.host._id = userService.getLoggedinUser()._id ) // Todo get for current user

  return reservationss
}

function getById(reservationsId) {
  const reservations = storageService.get(STORAGE_KEY, reservationsId)
  console.log(reservations)
  return reservations
}

function remove(reservationsId) {
  // return Promise.reject('Not now!')
  return storageService.remove(STORAGE_KEY, reservationsId)
}


function save(reservations) {
  if (reservations._id) { //TODO add dfter adding backend
    return storageService.put(STORAGE_KEY, reservations)
  } else {
    // when switching to backend - remove the next line
    return storageService.post(STORAGE_KEY, reservations)
  }
}




async function _createReservationss() {
  const reservationss = await storageService.query(STORAGE_KEY)
  
}

_createReservationss()
