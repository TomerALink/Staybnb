import { httpService } from './http.service'
import { storageService } from './async-storage.service.js'
import stayJson from '../../data/stay.json'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stayDB'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    getDefaultFilter,
    getFilterFromSearchParams,
    getCurrentPos,
    calculateDistance
}



async function query(filterBy = getDefaultFilter()) {
  return httpService.get(`stay`, filterBy)
}

function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await httpService.put(`stay/${stay._id}`, stay)
    } else {
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

function getEmptyStay() {
  return {
    name: "",
    type: "",
    imgUrls: [
      '/src/assets/img/asset 72.webp',
      '/src/assets/img/asset 71.webp',
      '/src/assets/img/asset 70.webp',
      '/src/assets/img/asset 69.webp',
      '/src/assets/img/asset 68.webp',
    ],
    price: 0,
    summary: "New on Staybnb!",
    capacity: 1,
    amenities: [],
    bathrooms: 1,
    bedrooms: 1,
    roomType: "",
    host: {
      _id: "",
      fullname: "",
      location: "",
      about: "",
      responseTime: "",
      thumbnailUrl: "",
      pictureUrl: "",
      isSuperhost: true,
      id: ""
    },
    loc: {
      country: "",
      countryCode: "",
      city: "",
      address: "",
      lat: 0,
      lan: 0
    },
    reviews: [],
    likedByUsers: []
  }
}


function getDefaultFilter() {
  return { txt: '',
    tag: '', 
    country: '',
    startDate: '',
    endDate:  '',
    minPrice:  0,
    maxPrice:  0,
    guests:  {adults: 2,
      children: 0,
      infants: 0,
      pets: 0,} }
}

function getFilterFromSearchParams(searchParams) {
  const defaultFilter = getDefaultFilter()
  const filterBy = {
      txt: searchParams.get('txt') || '',
      country: searchParams.get('country') || '',
      startDate: searchParams.get('startDate') || '',
      endDate: searchParams.get('endDate') || '',
      minPrice: +searchParams.get('minPrice') || 0,
      maxPrice: +searchParams.get('maxPrice') || 0,
      guests: searchParams.get('guests') || {}
  }
  for (const field in defaultFilter) {
      filterBy[field] = searchParams.get(field) || ''
  }
  return filterBy
}

function getCurrentPos() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      )
    } else {
      reject(new Error("Geolocation is not supported by this browser."))
    }
  })
}


function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radius of the Earth in kilometers

  // Convert degrees to radians
  const toRadians = (degrees) => (degrees * Math.PI) / 180

  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return (R * c).toFixed(2) // Distance in kilometers
}

async function _createStays() {
  console.log('tomtom')
  const stays = await storageService.query(STORAGE_KEY)
  console.log(stays)
  console.log('tomtom2')
  const loggedinUser = userService.getLoggedinUser()
  if (stays.length > 0  ) return;

    
    for (let index = 0; index < stayJson.length; index++) {

      const { _id, ...copiedNode } = stayJson[index];
      copiedNode.host._id = loggedinUser._id
      copiedNode.host.fullname = loggedinUser.fullname
      copiedNode.host.pictureUrl = loggedinUser.imgUrl
      copiedNode.host.thumbnailUrl = loggedinUser.imgUrl
      
      console.log(copiedNode)
      await save(copiedNode)
    }
  

}

// _createStays()