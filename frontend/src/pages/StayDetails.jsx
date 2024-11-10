import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { StayDetailsShareSave } from '../cmps/stay_details_cmps/StayDetailsShareSave.jsx'
import { StayDetailsGallery } from '../cmps/stay_details_cmps/StayDetailsGallery.jsx'
// import { StayDetailsHeader } from '../cmps/stay_details_cmps/StayDetailsHeader.jsx'
// import { StayDetailsConciseInfo } from '../cmps/stay_details_cmps/StayDetailsConciseInfo.jsx'
// import { StayDetailsHostInfo } from '../cmps/stay_details_cmps/StayDetailsHostInfo.jsx'
// import { StayDetailsHostSummary } from '../cmps/stay_details_cmps/StayDetailsHostSummary.jsx'
// import { StayDetailsAmenities } from '../cmps/stay_details_cmps/StayDetailsAmenities.jsx'
// import { StayDetailsReservation } from '../cmps/stay_details_cmps/StayDetailsReservation.jsx'
// import { StayDetailsReviews } from '../cmps/stay_details_cmps/StayDetailsReviews.jsx'
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
        "summary": "Fantastic duplex apartment...",
        "capacity": 8,
        "amenities": ["TV", "Wifi", "Kitchen", "Smoking allowed", "Pets allowed", "Cooking basics"],
        "labels": ["Top of the world", "Trending", "Play", "Tropical"],
        "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "/src/assets/img/asset 109.webp"
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
                    "imgUrl": "/src/assets/img/asset 73.webp"
                }
            }
        ],
        "likedByUsers": ["mini-user"]
    }

    return (
        <section className="stay-details">
            <StayDetailsShareSave stay={stay} />
            <StayDetailsGallery stay={stay} />
            {/* <StayDetailsHeader stay={stay} />
            <section className="stay-main-info">
                <StayDetailsConciseInfo stay={stay} />
                <StayDetailsHostInfo stay={stay} />
                <StayDetailsHostSummary stay={stay} />
                <StayDetailsAmenities stay={stay} />
                <StayDetailsReservation stay={stay} />
            </section>
            <section className="stay-additional-info">
                <StayDetailsReviews stay={stay} />
                <StayDetailsMap stay={stay} />
            </section> */}
        </section>
    )

}