import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { utilService } from '../services/util.service.js'
import { StayDetailsShareSave } from '../cmps/stay_details_cmps/StayDetailsShareSave.jsx'
import { StayDetailsGallery } from '../cmps/stay_details_cmps/StayDetailsGallery.jsx'
// import { StayDetailsHeader } from '../cmps/stay_details_cmps/StayDetailsHeader.jsx'
import { StayDetailsConciseInfo } from '../cmps/stay_details_cmps/StayDetailsConciseInfo.jsx'
import { StayDetailsHostInfo } from '../cmps/stay_details_cmps/StayDetailsHostInfo.jsx'
// import { StayDetailsHostSummary } from '../cmps/stay_details_cmps/StayDetailsHostSummary.jsx'
import { StayDetailsAmenities } from '../cmps/stay_details_cmps/StayDetailsAmenities.jsx'
// import { StayDetailsReservation } from '../cmps/stay_details_cmps/StayDetailsReservation.jsx'
import { StayDetailsReviews } from '../cmps/stay_details_cmps/StayDetailsReviews.jsx'
// import { StayDetailsMap } from '../cmps/stay_details_cmps/StayDetailsMap.jsx'


export function StayDetails() {

    const stay = {
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
        "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
        "capacity": 8,
        "bathrooms": 2,
        "bedrooms": 4,
        "roomType": "Entire home/apt",
        "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics", "Wheelchair accessible",
            "Air conditioning", "Pool", "Free parking on premises", "Doorman", "Gym", "Elevator", "Hot tub", "Heating"
        ],
        "labels": ["Top of the world", "Trending", "Play", "Tropical"],
        "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "/src/assets/img/asset 109.webp",
            "isSuperhost": true,
            "location": "Eureka, California, United States",
            "about": "Adventurous couple loves to travel :)",
            "responseTime": "within an hour",
            // "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
            // "pictureUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_medium",
            "id": "36133410"
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
                "at": "2016-06-12T04:00:00.000Z",
                "rate": 4,
                "by": {
                    "_id": "622f3407e36c59e6164fc004",
                    "fullname": "Kiesha",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "10711825"
                },
                "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
            },
            {
                "at": "2016-07-28T04:00:00.000Z",
                "rate": 3,
                "by": {
                    "_id": "622f3403e36c59e6164fb204",
                    "fullname": "Chris",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "70072865"
                },
                "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
            },
            {
                "at": "2016-09-11T04:00:00.000Z",
                "rate": 4,
                "by": {
                    "_id": "622f3405e36c59e6164fb703",
                    "fullname": "Kim",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "71179725"
                },
                "txt": "We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves."
            },
            {
                "at": "2017-01-07T05:00:00.000Z",
                "rate": 3,
                "by": {
                    "_id": "622f3404e36c59e6164fb37f",
                    "fullname": "Tracy",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "65593239"
                },
                "txt": "Beautiful location. Patty & Peter were super helpful and easy to work with!"
            },
            {
                "at": "2017-04-07T04:00:00.000Z",
                "rate": 5,
                "by": {
                    "_id": "622f3403e36c59e6164fb105",
                    "fullname": "Duyen",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "26215688"
                },
                "txt": "Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back."
            },
            {
                "at": "2017-05-09T04:00:00.000Z",
                "rate": 5,
                "by": {
                    "_id": "622f3402e36c59e6164fabbe",
                    "fullname": "Binh",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "117390236"
                },
                "txt": "The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. "
            },
            {
                "at": "2018-02-24T05:00:00.000Z",
                "rate": 3,
                "by": {
                    "_id": "622f3404e36c59e6164fb4af",
                    "fullname": "Samy",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "15143517"
                },
                "txt": "We spent a great week at Patty and Peter's place. The place was exactly as shown in the pictures, very comfortable, nice view, with all amenities. The resort is great with several pools, a long beach, many restaurants, and of course a lot of great activities all around."
            },
            {
                "at": "2018-06-16T04:00:00.000Z",
                "rate": 4,
                "by": {
                    "_id": "622f3405e36c59e6164fb87b",
                    "fullname": "Breanne",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "78173091"
                },
                "txt": "This place was perfect for my family. We had plenty of room to spread out and the service could not have been any better"
            },
            {
                "at": "2018-06-29T04:00:00.000Z",
                "rate": 5,
                "by": {
                    "_id": "622f3405e36c59e6164fb713",
                    "fullname": "Kimberly",
                    "imgUrl": "/src/assets/img/asset 73.webp",
                    "id": "100535039"
                },
                "txt": "We love Westin Kaanapalli"
            }
        ],
        "likedByUsers": ["mini-user"]
    }

    const avgRating = utilService.calcAvgRating(stay.reviews)

    return (
        <section className="stay-details">
            <StayDetailsShareSave name={stay.name} />
            <StayDetailsGallery imgs={stay.imgUrls} />
            {/* <StayDetailsHeader stay={stay} /> */}
            <section className="stay-main-info">
                <StayDetailsConciseInfo type={stay.type} loc={stay.loc} capacity={stay.capacity} bedrooms={stay.bedrooms} bathrooms={stay.bathrooms} avgRating={avgRating} numReviews={stay.reviews.length} />
                <StayDetailsHostInfo host={stay.host} avgRating={avgRating} numReviews={stay.reviews.length} />
                {/* <StayDetailsHostSummary stay={stay} /> */}
                <StayDetailsAmenities amenities={stay.amenities} />
                {/* <StayDetailsReservation stay={stay} /> */}
            </section>
            <section className="stay-additional-info">
                <StayDetailsReviews reviews={stay.reviews} />
                {/* <StayDetailsMap stay={stay} /> */}
            </section>
        </section>
    )

}