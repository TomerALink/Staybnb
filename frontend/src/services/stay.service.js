
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stayDB'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    // getRandomStay,
    getDefaultFilter
}


function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(stays => {          
            return stays
            .filter(stay =>
            {
                const tagMatches = filterBy.tag ? stay.type === filterBy.tag : true;
                return tagMatches
            }
            )
        })
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

function remove(stayId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, stayId)
}


function save(stay) {
    if (stay._id) {
        return storageService.put(STORAGE_KEY, stay)
    } else {
        // when switching to backend - remove the next line
        stay.host = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, stay)
    }
}

function getEmptyStay() {
    return {
                name: "",
                type: "",
                imgUrls: [ ],
                price: 0,
                summary: "",
                capacity: 1,
                amenities: [ ],
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

function getDefaultFilter() {
    return { tag: '' } //TODO
}


const tempStays = [
    {

      name: 'Ribeira Charming Duplex',  
      type: 'Camping',
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
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
      labels: [ 'Top of the world', 'Trending', 'Play', 'Tropical' ],
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
      reviews: [ [Object] ],
      likedByUsers: [ 'mini-user' ]
    }
  ]

function _createStays(){
    for (let index = 0; index < tempStays.length; index++) {
        save(tempStays[index])
    }
    
}

_createStays()
