
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import stayJson from '../../data/stay.json'


const STORAGE_KEY = 'stayDB'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  // getRandomStay,
  getDefaultFilter,
  getFilterFromSearchParams,
  getCurrentPos,
  calculateDistance
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


async function query(filterBy = getDefaultFilter()) {
  var stays = await storageService.query(STORAGE_KEY)
  const { txt, startDate, endDate, minPrice, maxPrice, guests = {},  country , tag} = filterBy

  if (txt) {
    const regex = new RegExp(txt, 'i');
    stays = stays.filter(
      (stay) => regex.test(stay.loc.city) || regex.test(stay.loc.country) 
    )
  }
  
  if (country) {
    stays = stays.filter((stay) => stay.loc.country === country)
  }
  if (tag) {
    stays = stays.filter((stay) => stay.type === tag)
  }

//TODO Date Range, Price Range

  const { adults = 0, children = 0, infants = 0 } = guests
  stays = stays.filter((stay) => stay.capacity >= (adults + children + infants))

  return stays
}

function getById(stayId) {
  const stay = storageService.get(STORAGE_KEY, stayId)
  console.log(stay)
  return stay
}

function remove(stayId) {
  // return Promise.reject('Not now!')
  return storageService.remove(STORAGE_KEY, stayId)
}


function save(stay) {
  // if (stay._id) { //TODO add dfter adding backend
  //   return storageService.put(STORAGE_KEY, stay)
  // } else {
    // when switching to backend - remove the next line
    stay.host = userService.getLoggedinUser() ? userService.getLoggedinUser() : {"host": {
          "_id": "622f3403e36c59e6164faf93",
          "fullname": "Patty And Beckett",
          "location": "Eureka, California, United States",
          "about": "Adventurous couple loves to travel :)",
          "responseTime": "within an hour",
          "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
          "pictureUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "id": "36133410"
      }}
    return storageService.post(STORAGE_KEY, stay)
  // }
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

// function getRandomStay() {
//     return {

//     }
// }




const tempStays = [
  {

    name: `Farm stay in Campiglia D'orcia, Italy`,
    type: 'OMG!',
    imgUrls: [
      '/src/assets/img/asset 68.webp',
      '/src/assets/img/asset 69.webp',
      '/src/assets/img/asset 70.webp',
      '/src/assets/img/asset 71.webp',
      '/src/assets/img/asset 72.webp'
    ],
    price: 80,
    summary: 'Relax with all the families in this quiet place....',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Italy',
      countryCode: 'IT',
      city: 'Rome',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Houseboats',
    imgUrls: [
      '/src/assets/img/asset 74.webp',
      '/src/assets/img/asset 75.webp',
      '/src/assets/img/asset 76.webp',
      '/src/assets/img/asset 77.webp',
      '/src/assets/img/asset 78.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Towers',
    imgUrls: [
      '/src/assets/img/asset 78.webp',
      '/src/assets/img/asset 79.webp',
      '/src/assets/img/asset 80.webp',
      '/src/assets/img/asset 81.webp',
      '/src/assets/img/asset 82.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: "Chef's kitchens",
    imgUrls: [
      '/src/assets/img/asset 83.webp',
      '/src/assets/img/asset 84.webp',
      '/src/assets/img/asset 85.webp',
      '/src/assets/img/asset 86.webp',
      '/src/assets/img/asset 87.webp',
      '/src/assets/img/asset 88.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: "Shepherd's huts",
    imgUrls: [
      '/src/assets/img/asset 68.webp',
      '/src/assets/img/asset 69.webp',
      '/src/assets/img/asset 70.webp',
      '/src/assets/img/asset 71.webp',
      '/src/assets/img/asset 72.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Skiing',
    imgUrls: [
      '/src/assets/img/asset 74.webp',
      '/src/assets/img/asset 75.webp',
      '/src/assets/img/asset 76.webp',
      '/src/assets/img/asset 77.webp',
      '/src/assets/img/asset 78.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Trulli',
    imgUrls: [
      '/src/assets/img/asset 78.webp',
      '/src/assets/img/asset 79.webp',
      '/src/assets/img/asset 80.webp',
      '/src/assets/img/asset 81.webp',
      '/src/assets/img/asset 82.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Farms',
    imgUrls: [
      '/src/assets/img/asset 83.webp',
      '/src/assets/img/asset 84.webp',
      '/src/assets/img/asset 85.webp',
      '/src/assets/img/asset 86.webp',
      '/src/assets/img/asset 87.webp',
      '/src/assets/img/asset 88.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Castles',
    imgUrls: [
      '/src/assets/img/asset 68.webp',
      '/src/assets/img/asset 69.webp',
      '/src/assets/img/asset 70.webp',
      '/src/assets/img/asset 71.webp',
      '/src/assets/img/asset 72.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Design',
    imgUrls: [
      '/src/assets/img/asset 74.webp',
      '/src/assets/img/asset 75.webp',
      '/src/assets/img/asset 76.webp',
      '/src/assets/img/asset 77.webp',
      '/src/assets/img/asset 78.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Boats',
    imgUrls: [
      '/src/assets/img/asset 78.webp',
      '/src/assets/img/asset 79.webp',
      '/src/assets/img/asset 80.webp',
      '/src/assets/img/asset 81.webp',
      '/src/assets/img/asset 82.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Grand pianos',
    imgUrls: [
      '/src/assets/img/asset 83.webp',
      '/src/assets/img/asset 84.webp',
      '/src/assets/img/asset 85.webp',
      '/src/assets/img/asset 86.webp',
      '/src/assets/img/asset 87.webp',
      '/src/assets/img/asset 88.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Skiing',
    imgUrls: [
      '/src/assets/img/asset 68.webp',
      '/src/assets/img/asset 69.webp',
      '/src/assets/img/asset 70.webp',
      '/src/assets/img/asset 71.webp',
      '/src/assets/img/asset 72.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'OMG!',
    imgUrls: [
      '/src/assets/img/asset 74.webp',
      '/src/assets/img/asset 75.webp',
      '/src/assets/img/asset 76.webp',
      '/src/assets/img/asset 77.webp',
      '/src/assets/img/asset 78.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Ryokans',
    imgUrls: [
      '/src/assets/img/asset 78.webp',
      '/src/assets/img/asset 79.webp',
      '/src/assets/img/asset 80.webp',
      '/src/assets/img/asset 81.webp',
      '/src/assets/img/asset 82.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  },
  {
    name: 'Ribeira Charming Duplex',
    type: 'Minsus',
    imgUrls: [
      '/src/assets/img/asset 83.webp',
      '/src/assets/img/asset 84.webp',
      '/src/assets/img/asset 85.webp',
      '/src/assets/img/asset 86.webp',
      '/src/assets/img/asset 87.webp',
      '/src/assets/img/asset 88.webp'
    ],
    price: 80,
    summary: 'Fantastic duplex apartment...',
    capacity: 8,
    amenities: [
      'TV',
      'Wifi',
      'Kitchen',
      'Smoking allowed',
      'Pets allowed',
      'Cooking basics'
    ],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small'
    },
    loc: {
      country: 'Portugal',
      countryCode: 'PT',
      city: 'Lisbon',
      address: '17 Kombo st',
      lat: -8.61308,
      lng: 41.1413
    },
    reviews: [[Object]],
    likedByUsers: ['mini-user']
  }
]

async function _createStays() {
  const stays = await storageService.query(STORAGE_KEY)
  if (stays.length < 1) {

    
    for (let index = 0; index < stayJson.length; index++) {

      
      await save(stayJson[index])
    }
  }

}


// async function _createStays() {
//   const stays = await storageService.query(STORAGE_KEY)
//   if (stays.length < 1) {

//     for (let index = 0; index < tempStays.length; index++) {
//       await save(tempStays[index])
//     }
//   }

// }

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



_createStays()
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