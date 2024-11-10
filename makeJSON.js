const tags = [
    'OMG!', 'Icons', 'Castles', 'Beachfront', 'Trending', 'National parks',
    'Amazing views', 'Amazing pools', 'Mansions', 'Cabins', 'Countryside',
    'Lakefront', 'Islands', 'Design', 'Off-the-grid', 'Farms', 'Treehouses',
    'Luxe', 'Top cities', 'Tiny homes', 'Tropical', 'Top of the world',
    'Historical homes', 'Boats', 'Play', 'Earth homes', 'Ski-in/out',
    'Houseboats', 'Desert', 'A-frmes', "Chef's kitchens", 'Vineyards',
    'Arctic', 'Rooms', 'Caves', 'Domes', 'Camping', 'New', 'Bad & breakfasts',
    'Towers', 'Surfing', 'Creative spaces', 'Containers', 'Skiing', 'Windmils',
    'Dammusi', 'Riads', 'Barns', 'Ryokans', 'Cycladic homes', 'Grand pianos',
    'Yurts', "Shepherd's huts", 'Adapted', 'Hanoks', 'Campers', 'Golfing',
    'Minsus', 'Casas particulares', 'Trulli', 'Beach', 'Lake'
]

function getRandomFilterName() {
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
}


const stays = [
    {
    "_id": "s101",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 68.webp",
            "/src/assets/img/asset 69.webp",
            "/src/assets/img/asset 70.webp",
            "/src/assets/img/asset 71.webp",
            "/src/assets/img/asset 72.webp",
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s102",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 74.webp",
            "/src/assets/img/asset 75.webp",
            "/src/assets/img/asset 76.webp",
            "/src/assets/img/asset 77.webp",
            "/src/assets/img/asset 78.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s103",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 78.webp",
            "/src/assets/img/asset 79.webp",
            "/src/assets/img/asset 80.webp",
            "/src/assets/img/asset 81.webp",
            "/src/assets/img/asset 82.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s104",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 83.webp",
            "/src/assets/img/asset 84.webp",
            "/src/assets/img/asset 85.webp",
            "/src/assets/img/asset 86.webp",
            "/src/assets/img/asset 87.webp",
            "/src/assets/img/asset 88.webp"
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
}
    , {
    "_id": "s105",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 68.webp",
            "/src/assets/img/asset 69.webp",
            "/src/assets/img/asset 70.webp",
            "/src/assets/img/asset 71.webp",
            "/src/assets/img/asset 72.webp",
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s106",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 74.webp",
            "/src/assets/img/asset 75.webp",
            "/src/assets/img/asset 76.webp",
            "/src/assets/img/asset 77.webp",
            "/src/assets/img/asset 78.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s107",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 78.webp",
            "/src/assets/img/asset 79.webp",
            "/src/assets/img/asset 80.webp",
            "/src/assets/img/asset 81.webp",
            "/src/assets/img/asset 82.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s108",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 83.webp",
            "/src/assets/img/asset 84.webp",
            "/src/assets/img/asset 85.webp",
            "/src/assets/img/asset 86.webp",
            "/src/assets/img/asset 87.webp",
            "/src/assets/img/asset 88.webp"
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
}
    , {
    "_id": "s109",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 68.webp",
            "/src/assets/img/asset 69.webp",
            "/src/assets/img/asset 70.webp",
            "/src/assets/img/asset 71.webp",
            "/src/assets/img/asset 72.webp",
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s110",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 74.webp",
            "/src/assets/img/asset 75.webp",
            "/src/assets/img/asset 76.webp",
            "/src/assets/img/asset 77.webp",
            "/src/assets/img/asset 78.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s111",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 78.webp",
            "/src/assets/img/asset 79.webp",
            "/src/assets/img/asset 80.webp",
            "/src/assets/img/asset 81.webp",
            "/src/assets/img/asset 82.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s112",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 83.webp",
            "/src/assets/img/asset 84.webp",
            "/src/assets/img/asset 85.webp",
            "/src/assets/img/asset 86.webp",
            "/src/assets/img/asset 87.webp",
            "/src/assets/img/asset 88.webp"
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
}
    , {
    "_id": "s113",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 68.webp",
            "/src/assets/img/asset 69.webp",
            "/src/assets/img/asset 70.webp",
            "/src/assets/img/asset 71.webp",
            "/src/assets/img/asset 72.webp",
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s114",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 74.webp",
            "/src/assets/img/asset 75.webp",
            "/src/assets/img/asset 76.webp",
            "/src/assets/img/asset 77.webp",
            "/src/assets/img/asset 78.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s115",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        [
            "/src/assets/img/asset 78.webp",
            "/src/assets/img/asset 79.webp",
            "/src/assets/img/asset 80.webp",
            "/src/assets/img/asset 81.webp",
            "/src/assets/img/asset 82.webp",

        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
},
{
    "_id": "s116",
    "name": "Ribeira Charming Duplex",
    "type": "House",
    "imgUrls":
        ["/src/assets/img/asset 83.webp",
            "/src/assets/img/asset 84.webp",
            "/src/assets/img/asset 85.webp",
            "/src/assets/img/asset 86.webp",
            "/src/assets/img/asset 87.webp",
            "/src/assets/img/asset 88.webp"
        ],
    "price": 80.0,
    "summary": "Fantastic duplex apartment...",
    "capacity": 8,
    "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
    "labels": ["Top of the world", "Trending", "Play", "Tropical"],
    "host": {
        "_id": "u101",
        "fullname": "Davit Pok",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Portugal",
        "countryCode": "PT",
        "city": "Lisbon",
        "address": "17 Kombo st",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [
        {
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }
    ],
    "likedByUsers": ["mini-user"]
}
]

function modifyStay(){
    const newStays =[]
    for (let index = 0; index < stays.length; index++) {
        const element = stays[index];
        element.type = getRandomFilterName()
        newStays.push(element)
    }
   return newStays
}

const newStays = modifyStay()

console.log(newStays)

