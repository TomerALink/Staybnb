// import { userService } from '../services/user'
import { StayPreview } from './StayPreview'

// export function StayList({ stays, onRemoveStay, onUpdateStay }) {
export function StayList() {

    const stays = [{
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


    return <section>
        <div className='list-container'>
            <ul className="list">
                {stays.map(stay =>
                    <li key={stay._id}>
                        <StayPreview stay={stay} />

                    </li>)
                }
            </ul>
        </div>
    </section>
}